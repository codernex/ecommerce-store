import Image from "next/image";

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/**
       * Image And Actions
       */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          alt="image"
          src={""}
          className="aspect-square object-cover rounded-md"
        />
      </div>
      {/**
       * Description
       */}
      <div>
        <p className="font-semibold text-lg"></p>
        <p className="text-sm text-gray-500"></p>
      </div>
      {/**
       * Price
       */}
      <div className="flex items-center justify-between">
        <p></p>
      </div>
    </div>
  );
};
