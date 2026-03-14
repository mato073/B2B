import { ads, categories } from "@/data/mock";
import AdCard from "@/components/AdCard";

export default function Home() {
  return (
    <div>
      {/* Hero + Search */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] text-center mb-2">
            Achetez et vendez entre professionnels
          </h1>
          <p className="text-gray-500 text-center mb-8 text-lg">
            Matériel, équipement, véhicules — la marketplace B2B de référence
          </p>

          {/* Search bar */}
          <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-2 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Rechercher un produit, une marque..."
              className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
              <option>Toutes catégories</option>
              {categories.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Ville ou département"
              className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent sm:w-44"
            />
            <button className="bg-[#2563EB] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Categories grid */}
        <h2 className="text-xl font-bold text-[#0F172A] mb-4">Catégories</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md hover:border-[#2563EB]/30 transition-all cursor-pointer"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Latest ads */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#0F172A]">Dernières annonces</h2>
          <span className="text-sm text-gray-500">{ads.length} résultats</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ads.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>
      </div>
    </div>
  );
}
