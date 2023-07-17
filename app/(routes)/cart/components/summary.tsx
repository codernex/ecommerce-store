"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { Currency } from "@/components/ui/currency";
import toast from "react-hot-toast";

export const Summary = () => {
  const cart = useCart();

  const searchParams = useSearchParams();

  const removeAll = useCart((state) => state.removeAll);
  const items = useCart((state) => state.items);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams]);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  };
  return (
    <div className="mt-16 rounded-md bg-gray-50 px-4 py-6 sm:px-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency
            value={cart.items.reduce(
              (acc, items) => acc + Number(items.price),
              0
            )}
          />
        </div>
      </div>

      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};
