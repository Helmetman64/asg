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
  const [keychains, setKeychains] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    async function fetchKeychainsWithVariations() {
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
        .eq("category_id", 3);

      if (error) {
        console.error("Error fetching keychains: ", error);
      } else {
        setKeychains(data || []);
      }
    }

    fetchKeychainsWithVariations();
  }, []);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpened(true); // Open the modal when a card is clicked
  };

  return (
    <div className="keychains-container">
      <h1>Keychains</h1>
      <div className="keychains-grid">
        {keychains.map((keychain) => (
          <ProductCard
            key={keychain.item_id}
            product={keychain}
            onClick={() => handleCardClick(keychain)}
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
