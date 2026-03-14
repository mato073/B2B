"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { getAd, getSeller, categories, formatPrice } from "@/data/mock";
import ContactModal from "@/components/ContactModal";
import Link from "next/link";

export default function AnnoncePage() {
  const { id } = useParams();
  const ad = getAd(Number(id));
  const seller = ad ? getSeller(ad.sellerId) : undefined;
  const cat = categories.find((c) => c.name === ad?.category);
  const [modalOpen, setModalOpen] = useState(false);

  if (!ad || !seller) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Annonce introuvable</h1>
        <Link href="/" className="text-[#2563EB] hover:underline">
          Retour aux annonces
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/" className="text-sm text-gray-500 hover:text-[#2563EB] mb-6 inline-block">
        ← Retour aux annonces
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Image + Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Photo placeholder */}
          <div
            className="h-72 sm:h-96 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: (cat?.color ?? "#6B7280") + "14" }}
          >
            <span className="text-8xl">{cat?.icon ?? "📋"}</span>
          </div>

          {/* Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full text-white"
                style={{ backgroundColor: cat?.color ?? "#6B7280" }}
              >
                {ad.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {ad.location}
              </span>
              <span className="text-sm text-gray-500">Publié le {ad.date}</span>
            </div>

            <h1 className="text-2xl font-bold text-[#0F172A]">{ad.title}</h1>
            <p className="text-3xl font-bold text-[#2563EB]">{formatPrice(ad.price)}</p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="font-semibold text-[#0F172A] mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {ad.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Seller card */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <h3 className="font-semibold text-[#0F172A]">Vendeur</h3>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                <span className="text-[#2563EB] font-bold text-lg">
                  {seller.company.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A]">{seller.company}</p>
                <p className="text-sm text-gray-500">{seller.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-gray-500">Membre depuis</p>
                <p className="font-medium">{seller.memberSince}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-gray-500">Annonces actives</p>
                <p className="font-medium">{seller.activeAds}</p>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-[#2563EB] text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contacter le vendeur
            </button>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <p className="font-medium mb-1">Conseil de sécurité</p>
            <p>Privilégiez les transactions sécurisées et vérifiez toujours le matériel avant achat.</p>
          </div>
        </div>
      </div>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sellerName={seller.company}
      />
    </div>
  );
}
