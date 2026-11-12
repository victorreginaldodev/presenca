import type { LandingPage } from "../types";

import { beneficiosPorIncapacidade } from "./beneficios-por-incapacidade";
import { rescisaoIndireta } from "./rescisao-indireta";

/**
 * Landing pages de campanha, por slug. Cada LP nova é um arquivo neste diretório
 * mais uma entrada aqui (e uma `page.tsx` em `app/(lp)/lp/<slug>/`).
 */
export const landingPages: Record<string, LandingPage> = {
  [rescisaoIndireta.slug]: rescisaoIndireta,
  [beneficiosPorIncapacidade.slug]: beneficiosPorIncapacidade,
};
