import Link from "next/link";
import { Ad, categories, formatPrice } from "@/data/mock";

export default function AdCard({ ad }: { ad: Ad }) {
  const cat = categories.find((c) => c.name === ad.category);
  const color = cat?.color ?? "#6B7280";

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Photo placeholder */}
      <div
        className="h-44 flex items-center justify-center"
        style={{ backgroundColor: color + "14" }}
      >
        <span className="text-5xl">{cat?.icon ?? "📋"}</span>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[#0F172A] text-sm leading-tight line-clamp-2 group-hover:text-[#2563EB] transition-colors">
            {ad.title}
          </h3>
        </div>

        <span
          className="inline-block text-xs font-medium px-2 py-0.5 rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          {ad.category}
        </span>

        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {ad.location}
          <span className="mx-1">·</span>
          {ad.date}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-[#0F172A]">
            {formatPrice(ad.price)}
          </span>
          <Link
            href={`/annonce/${ad.id}`}
            className="text-xs font-medium text-[#2563EB] hover:text-blue-700 transition-colors"
          >
            Voir l&apos;annonce →
          </Link>
        </div>
      </div>
    </div>
  );
}
