import { Product } from "@/types";
import { NoResult } from "./ui/no-result";
import { ProductCard } from "./ui/product-card";

interface ProductListProps {
  items: Product[];
  title: string;
}

export const ProductList: React.FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
