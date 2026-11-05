import Image from "next/image";
import Link from "next/link";

import type { LawyerProfile } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

interface AuthorBoxProps {
  title: string;
  profile: LawyerProfile;
}

/** Quem escreve: foto, nome, OAB e mini-bio. É o principal sinal de confiança do artigo. */
export function AuthorBox({ title, profile }: AuthorBoxProps) {
  const photo = profile.photos.about ?? profile.photos.hero;

  return (
    <aside aria-labelledby="autor-titulo" className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:mt-14 sm:p-8">
      <p id="autor-titulo" className="eyebrow">
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        {photo && (
          <Image
            src={photo.url}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="96px"
            className="size-20 flex-none rounded-full object-cover object-top sm:size-24"
          />
        )}
        <div className="flex flex-col gap-2">
          <p className="text-xl leading-tight font-bold text-navy sm:text-2xl">{profile.name}</p>
          <p className="text-sm font-semibold text-muted">Advogado · {profile.oab}</p>
          <p className="text-base text-ink sm:text-[17px]">{profile.shortBio}</p>
          <Link
            href="/#sobre"
            className="mt-1 inline-flex min-h-10 w-fit items-center gap-2 text-base font-bold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-dark"
          >
            Conheça o Fernando
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
