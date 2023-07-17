"use client";

import { Container } from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";

export default function Cart() {
  const [isMounted, setIsmounted] = useState(false);

  const cart = useCart();

  useEffect(() => setIsmounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold">
            Shopping Cart ({cart.items.length})
          </h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items add cart</p>
              )}

              <ul>
                {cart.items.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
