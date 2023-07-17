import { Product } from "@/types";
import { create } from "zustand";

interface ProductModalProps {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const useProductPreviewModal = create<ProductModalProps>((set) => ({
  isOpen: false,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () =>
    set({
      isOpen: false,
    }),
}));

export default useProductPreviewModal;
