import Link from "next/link";
import { tools } from "@/lib/tools";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="card-md grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:py-6">
      {tools.map((value, index) => (
        <Link
          key={index}
          href={value.route}
          className="flex h-20 items-center gap-4 rounded-md border border-neutral-content/50 px-5 font-medium shadow transition hover:scale-[1.02] hover:bg-base-200/90 hover:shadow-md"
        >
          <img
            src={value.image}
            className="h-8"
            alt={value.name}
            draggable={false}
          />
          {value.name}
          <span className="flex-1" />
          <ExternalLink size={20} strokeWidth={1.8} />
        </Link>
      ))}
    </main>
  );
}
