/**
 * Camada de acesso ao conteúdo.
 *
 * Hoje lê os arquivos locais em `src/content/data`. Na etapa 2, cada função
 * passa a consultar o Payload (Local API), por exemplo:
 *
 *   const payload = await getPayload({ config });
 *   return payload.findGlobal({ slug: "site-settings" });
 *
 * As funções já são assíncronas para que os componentes não precisem mudar
 * quando a fonte trocar. Só este arquivo deve conhecer a origem dos dados.
 */
import { cache } from "react";

import { homePage, navigation } from "@/content/data/home";
import { practiceAreas } from "@/content/data/practice-areas";
import { lawyerProfile } from "@/content/data/profile";
import { reviewSummary, reviews } from "@/content/data/reviews";
import { siteSettings } from "@/content/data/site-settings";
import type {
  HomePage,
  LawyerProfile,
  NavItem,
  PracticeArea,
  Review,
  ReviewSummary,
  SiteSettings,
} from "@/content/types";

export const getSiteSettings = cache(async (): Promise<SiteSettings> => siteSettings);

export const getLawyerProfile = cache(async (): Promise<LawyerProfile> => lawyerProfile);

export const getHomePage = cache(async (): Promise<HomePage> => homePage);

export const getPracticeAreas = cache(async (): Promise<PracticeArea[]> =>
  [...practiceAreas].sort((a, b) => a.order - b.order),
);

export const getReviews = cache(
  async (): Promise<{ items: Review[]; summary: ReviewSummary }> => ({
    items: reviews,
    summary: reviewSummary,
  }),
);

/** Menu principal, sem itens que apontem para seções vazias. */
export const getNavigation = cache(async (): Promise<NavItem[]> => {
  const { items } = await getReviews();
  return navigation.filter((item) => item.sectionId !== "avaliacoes" || items.length > 0);
});
