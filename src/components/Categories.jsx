import { products } from "@/services/products";

const Categories = ({ category, setCategory }) => {
  const categories = [
    "semua",
    ...new Set(products.map((item) => item.category)),
  ];
  return (
    <section className="mt-7">
      <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={
              category === item
                ? "shrink-0 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white"
                : "shrink-0 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"
            }
          >
            {item === "semua" ? "Semua" : item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
