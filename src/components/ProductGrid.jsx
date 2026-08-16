import React from "react";

const ProductGrid = ({ filteredProducts, handleProduct }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <article
            key={product.id}
            className="group flex overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-orange-100 sm:h-36 sm:w-36">
              <img
                src={product.image}
                alt={product.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500">
                  {product.badge}
                </span>

                <h4 className="mt-1 line-clamp-1 text-base font-bold">
                  {product.name}
                </h4>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-400">
                  {product.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="font-bold">
                  Rp{product.price.toLocaleString("id-ID")}
                </span>

                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:scale-105 hover:bg-zinc-800"
                  onClick={() => handleProduct(product)}
                >
                  <span className="text-xl font-light leading-none">+</span>
                </button>
              </div>
            </div>
          </article>
        ))
      ) : (
        <div>
          <h1>Produk Belum Ditemukan!</h1>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
