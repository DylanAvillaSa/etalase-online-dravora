import React from "react";

const SearchBar = ({ setSearchVal }) => {
  return (
    <section>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35m1.85-5.4a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Cari menu..."
          onChange={(e) => setSearchVal(e.target.value)}
          className="h-14 w-full rounded-2xl border border-zinc-200 bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
        />
      </div>
    </section>
  );
};

export default SearchBar;
