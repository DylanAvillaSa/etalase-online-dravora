import React from "react";

const Hero = () => {
  return (
    <section className="py-7 sm:py-10">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10">
        {/* Decorative blur */}
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-orange-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-red-500/20 blur-3xl" />

        <div className="relative max-w-xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10">
            ✨ Produk pilihan untuk kamu
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Temukan yang kamu cari,
            <br />
            tinggal pilih.
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300 sm:text-base">
            Jelajahi berbagai produk pilihan dan temukan barang yang sesuai
            dengan kebutuhan kamu. Mudah, cepat, tanpa ribet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
