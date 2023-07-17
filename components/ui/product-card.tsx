"use client";

import { Product } from "@/types";
import Image from "next/image";
import { IconButton } from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "./currency";
import { useRouter } from "next/navigation";
import useProductPreviewModal from "@/hooks/use-product-preview-modal";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

export const ProductCard = (product: Product) => {
  const cart = useCart();

  const previewModal = useProductPreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/**
       * Image And Actions
       */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          alt="image"
          src={product?.images?.[0].url}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 duration-300">
          <div className="flex gap-x-6 justify-center items-center">
            <IconButton
              className="text-gray-600"
              icon={<Expand />}
              onClick={onPreview}
            />
            <IconButton
              className="text-gray-600"
              icon={<ShoppingCart />}
              onClick={addToCart}
            />
          </div>
        </div>
      </div>
      {/**
       * Description
       */}
      <div>
        <p className="font-semibold text-lg">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.category.name}</p>
      </div>
      {/**
       * Price
       */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};
