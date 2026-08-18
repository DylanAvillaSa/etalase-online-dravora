"use client";
import { formatRupiah } from "@/helper/formatRupiah";
import React from "react";

const ModalOrder = ({
  cart,
  setModalOrder,
  handleIncreaseItem,
  handleDecreaseItem,
  handleDeleteItem,
  totalPaid,
  setCustomerNote,
  handleOrder,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-[2rem]">
        {/* Header */}
        <div className="shrink-0 border-b border-zinc-100 bg-white px-5 pb-4 pt-5 sm:px-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                Pesanan Kamu
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                Keranjang
              </h2>

              <p className="mt-1 text-sm text-zinc-400">
                {cart.length} produk dalam pesanan
              </p>
            </div>

            <button
              onClick={() => setModalOrder(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-900"
            >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {/* Order Items */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-zinc-900">Detail Produk</h3>

              <span className="text-xs text-zinc-400">{cart.length} item</span>
            </div>

            <div className="space-y-3">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-orange-100">
                    <img
                      src={item.image}
                      alt="Nasi Goreng Spesial"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="truncate text-sm font-semibold text-zinc-900">
                          {item.name}
                        </h4>

                        <p className="mt-0.5 text-xs text-zinc-400">
                          Rp{item.price.toLocaleString("id-ID")} / item
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm font-bold text-zinc-900">
                        {formatRupiah(item.price * item.qty)}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-1">
                        <button
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100"
                          onClick={() => handleDecreaseItem(item)}
                        >
                          −
                        </button>

                        <span className="w-5 text-center text-xs font-bold">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => handleIncreaseItem(item)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white transition hover:bg-zinc-800"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="text-[11px] font-medium text-red-400 hover:text-red-500"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-zinc-100" />

          {/* Customer Note */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487 18.5 2.85a1.5 1.5 0 0 1 2.121 2.121l-9.193 9.193-3.75.75.75-3.75 8.434-8.677Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25V19.5A2.25 2.25 0 0 1 17.25 21.75H5.25A2.25 2.25 0 0 1 3 19.5v-12A2.25 2.25 0 0 1 5.25 5.25H10.5"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-sm font-bold text-zinc-900">
                  Catatan Pesanan
                </h3>

                <p className="text-xs text-zinc-400">Opsional</p>
              </div>
            </div>

            <textarea
              rows={3}
              onChange={(e) => setCustomerNote(e.target.value)}
              placeholder="Contoh: alamat, catatan tambahan..."
              className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-300 focus:bg-white focus:ring-4 focus:ring-zinc-100"
            />
          </div>
          <div className="my-3 h-px border-t border-dashed border-zinc-200" />

          {/* Summary */}
          <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-zinc-400">Total pesanan</p>

                <p className="mt-0.5 text-xl font-bold tracking-tight text-zinc-900">
                  Rp{totalPaid.toLocaleString("id-ID")}
                </p>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold text-orange-500">
                {cart.length} item
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-zinc-100 bg-white p-4 sm:p-5">
          <button
            onClick={handleOrder}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#20bd5c] active:scale-[0.98]"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5">
              <path d="M19.11 17.21c-.29-.14-1.71-.84-1.98-.94-.27-.1-.47-.14-.67.14-.2.29-.76.94-.93 1.13-.17.19-.34.22-.63.08-.29-.14-1.21-.45-2.3-1.44-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.67-1.61-.91-2.2-.24-.58-.48-.5-.67-.51h-.57c-.19 0-.5.07-.76.36-.26.29-1 0.98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" />
              <path d="M16.02 2.67C8.66 2.67 2.67 8.66 2.67 16c0 2.35.61 4.65 1.77 6.67L2.6 29.33l6.84-1.79A13.3 13.3 0 0 0 16.02 29.33C23.36 29.33 29.33 23.34 29.33 16S23.36 2.67 16.02 2.67Zm0 24.27c-2.1 0-4.16-.56-5.97-1.62l-.43-.25-4.06 1.06 1.08-3.96-.28-.45A10.95 10.95 0 1 1 16.02 26.94Z" />
            </svg>
            Pesan via WhatsApp
          </button>

          <p className="mt-2 text-center text-[10px] text-zinc-400">
            Pesanan akan diteruskan langsung ke WhatsApp penjual
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
