import React from "react";

const Header = ({ cart }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div>
          <p className="text-xs font-medium text-zinc-400">ETALASE ONLINE</p>
          <h1 className="text-lg font-bold tracking-tight">Dravora Store</h1>
        </div>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white shadow-sm transition hover:bg-zinc-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.75l3-9H5.106m2.394 9L5.106 5.272M7.5 14.25 6 16.5m1.5-2.25h9.75m0 0L19.5 16.5m-12 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm11.25 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            />
          </svg>

          <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold">
            {cart.length}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
