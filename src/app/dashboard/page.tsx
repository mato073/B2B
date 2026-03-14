"use client";

import { ads, categories, formatPrice } from "@/data/mock";
import Link from "next/link";

const stats = [
  { label: "Annonces actives", value: "5", icon: "📋" },
  { label: "Vues totales", value: "1 247", icon: "👁️" },
  { label: "Contacts reçus", value: "43", icon: "✉️" },
];

const myAds = ads.slice(0, 5).map((ad, i) => ({
  ...ad,
  status: i === 3 ? ("paused" as const) : i === 4 ? ("expired" as const) : ("active" as const),
}));

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Tableau de bord</h1>
          <p className="text-gray-500 text-sm">Durand Industrie SAS</p>
        </div>
        <Link
          href="/publier"
          className="bg-[#2563EB] text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm inline-flex items-center gap-2 self-start"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Publier une annonce
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
            <span className="text-3xl">{s.icon}</span>
            <div>
              <p className="text-2xl font-bold text-[#0F172A]">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ads table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-[#0F172A]">Mes annonces</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Annonce</th>
                <th className="px-6 py-3 font-medium hidden sm:table-cell">Catégorie</th>
                <th className="px-6 py-3 font-medium">Statut</th>
                <th className="px-6 py-3 font-medium hidden md:table-cell">Vues</th>
                <th className="px-6 py-3 font-medium hidden md:table-cell">Contacts</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {myAds.map((ad) => {
                const cat = categories.find((c) => c.name === ad.category);
                const statusStyles = {
                  active: "bg-green-100 text-green-700",
                  paused: "bg-yellow-100 text-yellow-700",
                  expired: "bg-red-100 text-red-700",
                };
                const statusLabels = {
                  active: "Active",
                  paused: "En pause",
                  expired: "Expirée",
                };
                return (
                  <tr key={ad.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: (cat?.color ?? "#6B7280") + "14" }}
                        >
                          <span className="text-lg">{cat?.icon}</span>
                        </div>
                        <div>
                          <p className="font-medium text-[#0F172A] line-clamp-1">{ad.title}</p>
                          <p className="text-gray-500 text-xs">{formatPrice(ad.price)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: cat?.color }}
                      >
                        {ad.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyles[ad.status]}`}>
                        {statusLabels[ad.status]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{ad.views}</td>
                    <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{ad.contacts}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-gray-400 hover:text-[#2563EB] transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Plan card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-[#0F172A]">Plan Gratuit</h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">Actuel</span>
            </div>
            <p className="text-sm text-gray-500">2 annonces publiées sur 3 autorisées</p>
            <div className="mt-3 w-64 bg-gray-200 rounded-full h-2">
              <div className="bg-[#2563EB] h-2 rounded-full" style={{ width: "66%" }} />
            </div>
          </div>
          <Link
            href="/tarifs"
            className="border border-[#2563EB] text-[#2563EB] font-medium px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm self-start"
          >
            Passer au Pro →
          </Link>
        </div>
      </div>
    </div>
  );
}
