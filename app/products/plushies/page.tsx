"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/server";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductModal from "@/components/ProductModal/ProductModal";

type Product = {
  item_id: number;
  item_name: string;
  description: string;
  price: number;
  variations: { variation_name: string }[];
};

export default function Page() {
  const [plushies, setPlushies] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    async function fetchPlushiesWithVariations() {
      const { data, error } = await supabase
        .from("Items")
        .select(
          `
          item_id,
          item_name,
          description,
          price,
          variations: Variations (
            variation_id,
            variation_name
          )
        `
        )
        .eq("category_id", 2);

      if (error) {
        console.error("Error fetching plushies: ", error);
      } else {
        setPlushies(data || []);
      }
    }

    fetchPlushiesWithVariations();
  }, []);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpened(true); // Open the modal when a card is clicked
  };

  return (
    <div className="plushies-container">
      <h1>Plushies</h1>
      <div className="products-grid">
        {plushies.map((plushie) => (
          <ProductCard
            key={plushie.item_id}
            product={plushie}
            onClick={() => handleCardClick(plushie)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
        />
      )}
    </div>
  );
}
