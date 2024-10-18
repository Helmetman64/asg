import React from "react";
import { Card, Text } from "@mantine/core";

type ProductCardProps = {
  product: {
    item_id: number;
    item_name: string;
    price: number;
    image_url?: string;
  };
  onClick: () => void;
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="product-card" onClick={onClick}>
      <Card>
        <Card.Section>
          <div className="image-placeholder"></div>
        </Card.Section>
        <Text size="lg">{product.item_name}</Text>
        <Text>${product.price} AUD</Text>
      </Card>
    </div>
  );
}
