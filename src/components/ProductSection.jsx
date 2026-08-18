import React from "react";
import ProductGrid from "./ProductGrid";
import { products } from "@/services/products";

const ProductSection = ({ filteredProducts, handleProduct }) => {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Pilihan kami
          </p>

          <h3 className="mt-1 text-2xl font-bold tracking-tight">
            Pilih produk
          </h3>
        </div>

        <span className="text-sm text-zinc-400">
          {filteredProducts.length} produk
        </span>
      </div>

      {/* Product Grid */}
      <ProductGrid
        filteredProducts={filteredProducts}
        handleProduct={handleProduct}
      />
    </section>
  );
};

export default ProductSection;
