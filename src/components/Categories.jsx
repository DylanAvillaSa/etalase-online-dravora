import React from "react";

const Categories = ({ category, setCategory }) => {
  return (
    <section className="mt-7">
      <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          className={`${category === "semua" ? "shrink-0 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white" : "shrink-0 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"}`}
          onClick={() => setCategory("semua")}
        >
          Semua
        </button>

        <button
          onClick={() => setCategory("makanan")}
          className={`${category === "makanan" ? "shrink-0 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white" : "shrink-0 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"}`}
        >
          Makanan
        </button>

        <button
          onClick={() => setCategory("minuman")}
          className={`${category === "minuman" ? "shrink-0 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white" : "shrink-0 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"}`}
        >
          Minuman
        </button>
      </div>
    </section>
  );
};

export default Categories;
