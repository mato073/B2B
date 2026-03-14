"use client";

import { categories } from "@/data/mock";

export default function PublierPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Publier une annonce</h1>
      <p className="text-gray-500 text-sm mb-8">
        Remplissez les informations ci-dessous pour mettre en ligne votre annonce.
      </p>

      <form
        className="bg-white border border-gray-200 rounded-xl p-6 space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Titre de l&apos;annonce
          </label>
          <input
            type="text"
            placeholder="Ex : Chariot élévateur Toyota 2.5T"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
            <option>Sélectionner une catégorie</option>
            {categories.map((c) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={6}
            placeholder="Décrivez votre produit en détail : état, caractéristiques, conditions de vente..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prix (€ HT)
            </label>
            <input
              type="number"
              placeholder="Ex : 2400"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Localisation
            </label>
            <input
              type="text"
              placeholder="Ex : Lyon (69)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Photos
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2563EB]/50 transition-colors cursor-pointer">
            <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-500">
              Glissez vos photos ici ou{" "}
              <span className="text-[#2563EB] font-medium">parcourez vos fichiers</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG jusqu&apos;à 5 Mo</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563EB] text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Publier l&apos;annonce
        </button>
      </form>
    </div>
  );
}
