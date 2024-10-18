import React from "react";
import { Modal, Text } from "@mantine/core";

type ProductModalProps = {
  product: {
    item_id: number;
    item_name: string;
    description: string;
    price: number;
    variations: { variation_name: string }[];
  };
  opened: boolean;
  onClose: () => void;
};

export default function ProductModal({
  product,
  opened,
  onClose,
}: ProductModalProps) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        size="auto"
        transitionProps={{ transition: "fade", duration: 200 }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-img-container">
              <div className="image-placeholder">
                <h1>Image here</h1>
              </div>
            </div>
            <div className="modal-item-info">
              <h1>{product.item_name}</h1>
              <Text>Price: ${product.price}</Text>
              <Text>{product.description}</Text>
              {product.variations.length > 0 && (
                <div className="variations">
                  <h3>Available Variations:</h3>
                  <ul>
                    {product.variations.map((variation) => (
                      <li key={variation.variation_name}>
                        {variation.variation_name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
