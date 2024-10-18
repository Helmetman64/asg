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
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("Items").select("*");
      if (error) {
        console.error("Error fetching products: ", error);
      } else {
        setProducts(data || []);
      }
    }

    fetchProducts();
  }, []);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpened(true); // Open the modal when a card is clicked
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.item_id}
            product={product}
            onClick={() => handleCardClick(product)}
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
