"use client";

import React, { useMemo, useState } from "react";

import Container from "./container/Container";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import ProductSection from "./ProductSection";
import Header from "./Header";

import { products } from "@/services/products";
import ModalOrder from "./modal/ModalOrder";

const MainProducts = () => {
  const [cart, setCart] = useState([]);
  const [modalOrder, setModalOrder] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState("semua");
  const totalPaid = cart.reduce((acc, val) => {
    return acc + val.price * val.qty;
  }, 0);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchVal.toLowerCase()),
      )
      .filter(
        (product) =>
          category === "semua" || product.category.includes(category),
      );
  }, [category, searchVal]);

  const handleIncreaseItem = (item) => {
    setCart((prev) => {
      const itemExist = prev.find((p) => p.id === item.id);
      if (!itemExist) {
        return [...prev, { ...item, qty: 1 }];
      } else {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
    });
  };

  const handleDecreaseItem = (item) => {
    setCart((prev) => {
      const itemExist = prev.find((p) => p.id === item.id);
      if (!itemExist) {
        return [...prev, { ...item, qty: 1 }];
      } else {
        return prev
          .map((p) => (p.id === item.id ? { ...p, qty: p.qty - 1 } : p))
          .filter((p) => p.qty > 0);
      }
    });
  };

  const handleProduct = (product) => {
    setCart((prev) => {
      const itemExist = prev.find((item) => item.id === product.id);

      if (!itemExist) {
        return [...prev, { ...product, qty: 1 }];
      } else {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
    });
  };

  return (
    <>
      <Header cart={cart} />
      <Container>
        <Hero />
        <SearchBar setSearchVal={setSearchVal} />
        <Categories category={category} setCategory={setCategory} />
        <ProductSection
          filteredProducts={filteredProducts}
          handleProduct={handleProduct}
        />

        {/* Floating Cart */}
        <div
          onClick={() => setModalOrder(true)}
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2"
        >
          <button className="flex h-16 w-full items-center justify-between rounded-2xl bg-zinc-900 px-5 text-white shadow-2xl shadow-zinc-900/20 transition hover:bg-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
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
              </div>

              <div className="text-left">
                <p className="text-xs text-zinc-400">{cart.length} item</p>
                <div className="text-sm font-semibold">Lihat pesanan</div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-zinc-400">Total</p>
              <p className="text-sm font-bold">
                Rp{totalPaid.toLocaleString("id-ID")}
              </p>
            </div>
          </button>
        </div>

        {modalOrder && (
          <ModalOrder
            cart={cart}
            totalPaid={totalPaid}
            handleIncreaseItem={handleIncreaseItem}
            handleDecreaseItem={handleDecreaseItem}
            setModalOrder={setModalOrder}
          />
        )}
      </Container>
    </>
  );
};

export default MainProducts;
