"use client";

import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function PremiumCleaningLanding() {
  const [preview, setPreview] = useState(null);

  const services = [
    {
      title: "Cleaning Rumah",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      title: "Cleaning Kantor",
      img: "https://images.unsplash.com/photo-1603714228681-b399854b8f80",
    },
    {
      title: "Cuci Sofa & Karpet",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  ];

  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          fill
          className="object-cover"
          alt="Cleaning Service"
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="text-blue-500 font-semibold tracking-wide">
            Fast Clean
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
            Solusi Kebersihan <br /> Profesional & Terpercaya
          </h1>

          <p className="text-slate-300 text-lg mt-6 max-w-xl">
            Kami membantu menjaga rumah, kantor, dan gedung Anda tetap bersih,
            sehat, dan nyaman.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-blue-600 mt-10 px-8 py-4 rounded-full text-white font-semibold shadow-xl hover:bg-blue-700 transition"
          >
            <FaWhatsapp />
            Konsultasi Gratis
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p>Tahun Pengalaman</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
            <p>Klien Puas</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">Profesional</h3>
            <p>Tenaga Ahli</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Layanan Kami</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={s.img}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    alt={s.title}
                  />
                </div>
                <div className="p-6 text-center font-semibold text-lg">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Galeri Pekerjaan Kami
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setPreview(img)}
                className="relative h-48 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={img}
                  fill
                  className="object-cover hover:scale-110 transition"
                  alt="Gallery"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Kenapa Pilih Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Tenaga profesional & terlatih",
              "Peralatan modern & aman",
              "Harga transparan",
              "Garansi kepuasan",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <FaCheckCircle className="text-blue-600 text-xl mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Area Layanan</h2>

            {["Surabaya", "Sidoarjo", "Gresik", "Jabodetabek"].map(
              (area, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <FaMapMarkerAlt className="text-blue-500 mt-1" />
                  <span>{area}</span>
                </div>
              ),
            )}
          </div>

          <iframe
            className="w-full h-80 rounded-2xl"
            src="https://www.google.com/maps?q=jakarta&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-24 bg-slate-950 text-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-6">
          Siap Membersihkan Tempat Anda?
        </h2>
        <p className="text-slate-400 mb-10">
          Hubungi kami sekarang dan dapatkan penawaran terbaik.
        </p>

        <a
          href="https://wa.me/6289523444254"
          className="inline-flex items-center gap-3 bg-blue-600 px-10 py-4 rounded-full text-white font-semibold shadow-xl hover:bg-blue-700 transition"
        >
          <FaWhatsapp />
          Hubungi via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-black text-center text-slate-400 text-sm">
        © 2025 Fast Clean Service. All rights reserved.
      </footer>

      {/* MODAL */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
        >
          <Image
            src={preview}
            width={900}
            height={600}
            className="max-h-full rounded-2xl"
            alt="Preview"
          />
        </div>
      )}

      {/* FLOATING MOBILE */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <a
          href="https://wa.me/6289523444254"
          className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-full text-white font-semibold shadow-xl"
        >
          <FaWhatsapp />
          Chat Sekarang
        </a>
      </div>
    </main>
  );
}
