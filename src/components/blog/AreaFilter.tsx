import Link from "next/link";

import type { LegalField } from "@/content/types";
import { blogAreaPath, LEGAL_FIELDS } from "@/lib/blog";
import { fieldLabels } from "@/lib/fields";

interface AreaFilterProps {
  active: LegalField | null;
  allLabel: string;
}

const chip = "inline-flex min-h-11 touch-manipulation items-center rounded-full border-2 px-5 text-base font-bold no-underline transition-colors motion-reduce:transition-none";
const idle = "border-line bg-white text-navy hover:border-navy/40 hover:text-navy";
const current = "border-navy bg-navy text-white hover:text-white";

/** Filtro por área como links: funciona sem JavaScript e cada opção tem URL própria. */
export function AreaFilter({ active, allLabel }: AreaFilterProps) {
  const options: { label: string; href: string; field: LegalField | null }[] = [
    { label: allLabel, href: "/blog", field: null },
    ...LEGAL_FIELDS.map((field) => ({ label: fieldLabels[field], href: blogAreaPath(field), field })),
  ];

  return (
    <nav aria-label="Filtrar por área" className="mt-8 sm:mt-10">
      <ul className="flex flex-wrap justify-center gap-3">
        {options.map((option) => {
          const isActive = option.field === active;
          return (
            <li key={option.href}>
              <Link
                href={option.href}
                aria-current={isActive ? "page" : undefined}
                className={`${chip} ${isActive ? current : idle}`}
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
