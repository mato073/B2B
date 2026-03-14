"use client";

const topStats = [
  { label: "Utilisateurs", value: "247", change: "+12 cette semaine" },
  { label: "Annonces publiées", value: "1 043", change: "+38 cette semaine" },
  { label: "Nouvelles cette semaine", value: "38", change: "+8% vs semaine dernière" },
];

const users = [
  { id: 1, company: "Durand Industrie SAS", email: "contact@durand-industrie.fr", ads: 5, joined: "15/03/2024", status: "active" },
  { id: 2, company: "BTP Solutions SARL", email: "info@btp-solutions.com", ads: 3, joined: "10/01/2025", status: "active" },
  { id: 3, company: "Équip'Pro France", email: "commercial@equippro.fr", ads: 4, joined: "22/09/2024", status: "active" },
  { id: 4, company: "Métal Express", email: "direction@metalexpress.fr", ads: 7, joined: "05/06/2024", status: "suspended" },
  { id: 5, company: "Garage Lemaître", email: "atelier@lemaitre-auto.fr", ads: 2, joined: "01/02/2026", status: "active" },
];

const recentAds = [
  { id: 1, title: "Chariot élévateur Toyota 2.5T", seller: "Durand Industrie SAS", date: "12/03/2026", status: "active" },
  { id: 2, title: "Lot de 50 chaises de bureau", seller: "Équip'Pro France", date: "11/03/2026", status: "pending" },
  { id: 3, title: "Groupe électrogène 100 kVA", seller: "BTP Solutions SARL", date: "10/03/2026", status: "active" },
  { id: 4, title: "Four professionnel à convection", seller: "Durand Industrie SAS", date: "09/03/2026", status: "flagged" },
  { id: 5, title: "Palette de parpaings creux", seller: "Équip'Pro France", date: "08/03/2026", status: "active" },
  { id: 6, title: "Nacelle élévatrice articulée 16 m", seller: "BTP Solutions SARL", date: "07/03/2026", status: "active" },
];

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0F172A]">Administration</h1>
        <p className="text-gray-500 text-sm">Back-office Annoncer Pro</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {topStats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-500 mb-1">{s.label}</p>
            <p className="text-3xl font-bold text-[#0F172A]">{s.value}</p>
            <p className="text-xs text-green-600 mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Users table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-[#0F172A]">Utilisateurs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Entreprise</th>
                <th className="px-6 py-3 font-medium hidden md:table-cell">Email</th>
                <th className="px-6 py-3 font-medium hidden sm:table-cell">Annonces</th>
                <th className="px-6 py-3 font-medium hidden lg:table-cell">Inscription</th>
                <th className="px-6 py-3 font-medium">Statut</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-[#0F172A]">{u.company}</td>
                  <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{u.email}</td>
                  <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">{u.ads}</td>
                  <td className="px-6 py-4 text-gray-500 hidden lg:table-cell">{u.joined}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        u.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {u.status === "active" ? "Actif" : "Suspendu"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        u.status === "active"
                          ? "border border-red-200 text-red-600 hover:bg-red-50"
                          : "border border-green-200 text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {u.status === "active" ? "Suspendre" : "Réactiver"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ads moderation table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-[#0F172A]">Annonces récentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Titre</th>
                <th className="px-6 py-3 font-medium hidden sm:table-cell">Vendeur</th>
                <th className="px-6 py-3 font-medium hidden md:table-cell">Date</th>
                <th className="px-6 py-3 font-medium">Statut</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentAds.map((ad) => {
                const statusStyles: Record<string, string> = {
                  active: "bg-green-100 text-green-700",
                  pending: "bg-yellow-100 text-yellow-700",
                  flagged: "bg-red-100 text-red-700",
                };
                const statusLabels: Record<string, string> = {
                  active: "Active",
                  pending: "En attente",
                  flagged: "Signalée",
                };
                return (
                  <tr key={ad.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-[#0F172A]">{ad.title}</td>
                    <td className="px-6 py-4 text-gray-500 hidden sm:table-cell">{ad.seller}</td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{ad.date}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyles[ad.status]}`}>
                        {statusLabels[ad.status]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-blue-200 text-[#2563EB] hover:bg-blue-50 transition-colors">
                          Modérer
                        </button>
                        <button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors">
                          Supprimer
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
    </div>
  );
}
