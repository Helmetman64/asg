"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductModal from "@/components/ProductModal/ProductModal";
import { supabase } from "@/utils/supabase/server";

type Product = {
  item_id: number;
  item_name: string;
  description: string;
  price: number;
  variations: { variation_name: string }[];
};

export default function FlowersPage() {
  const [flowers, setFlowers] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    async function fetchFlowers() {
      const { data, error } = await supabase
        .from("Items")
        .select(
          `item_id, item_name, description, price, variations: Variations(variation_name)`
        )
        .eq("category_id", 1);

      if (error) {
        console.error("Error fetching flowers: ", error);
      } else {
        setFlowers(data || []);
      }
    }

    fetchFlowers();
  }, []);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpened(true); // Open the modal when a card is clicked
  };

  return (
    <div className="flowers-container">
      <h1>Flowers</h1>
      <div className="products-grid">
        {flowers.map((flower) => (
          <ProductCard
            key={flower.item_id}
            product={flower}
            onClick={() => handleCardClick(flower)}
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
