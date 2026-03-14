const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "",
    description: "Pour démarrer et tester la plateforme",
    features: [
      "3 annonces actives",
      "Visibilité standard",
      "Support par email",
      "Statistiques de base",
    ],
    cta: "Plan actuel",
    highlight: false,
    disabled: true,
  },
  {
    name: "Pro",
    price: "29 €",
    period: "/ mois",
    description: "Pour les entreprises actives",
    features: [
      "20 annonces actives",
      "Visibilité prioritaire",
      "Badge « Pro vérifié »",
      "Statistiques avancées",
      "Support prioritaire",
      "Mise en avant dans les résultats",
    ],
    cta: "Souscrire au Pro",
    highlight: true,
    disabled: false,
  },
  {
    name: "Premium",
    price: "79 €",
    period: "/ mois",
    description: "Pour les gros volumes et la visibilité maximale",
    features: [
      "Annonces illimitées",
      "Visibilité maximale",
      "Badge « Premium »",
      "Statistiques complètes + export",
      "Support dédié par téléphone",
      "Page entreprise personnalisée",
      "Accès API",
    ],
    cta: "Souscrire au Premium",
    highlight: false,
    disabled: false,
  },
];

export default function TarifsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Nos tarifs</h1>
        <p className="text-gray-500 text-lg">
          Choisissez le plan adapté à votre activité
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-2xl border-2 p-6 flex flex-col ${
              plan.highlight
                ? "border-[#2563EB] shadow-lg shadow-blue-100 relative"
                : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </span>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#0F172A]">{plan.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
              {plan.period && (
                <span className="text-gray-500 text-sm">{plan.period}</span>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <button
              disabled={plan.disabled}
              className={`w-full font-medium py-3 rounded-lg transition-colors text-sm ${
                plan.highlight
                  ? "bg-[#2563EB] text-white hover:bg-blue-700"
                  : plan.disabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "border border-[#2563EB] text-[#2563EB] hover:bg-blue-50"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 text-center">
        <h3 className="font-semibold text-[#0F172A] mb-2">Besoin d&apos;un plan sur mesure ?</h3>
        <p className="text-sm text-gray-500 mb-4">
          Contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques.
        </p>
        <button className="border border-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Nous contacter
        </button>
      </div>
    </div>
  );
}
