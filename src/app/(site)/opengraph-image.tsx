import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { getLawyerProfile, getSiteSettings } from "@/lib/content";

export const alt = "Fernando Araujo Advocacia — Previdenciário e Trabalhista";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function publicImageAsDataUrl(path: string, mime: string): Promise<string> {
  const file = await readFile(join(process.cwd(), "public", path));
  return `data:${mime};base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [settings, profile] = await Promise.all([getSiteSettings(), getLawyerProfile()]);
  const logo = await publicImageAsDataUrl(settings.logo.url, "image/png");
  const photo = profile.photos.hero ? await publicImageAsDataUrl(profile.photos.hero.url, "image/jpeg") : null;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0C1726", color: "#FFFFFF" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 64px 72px 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse só aceita <img> */}
            <img src={logo} alt="" width={50} height={88} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36 }}>{settings.siteName}</div>
              <div style={{ fontSize: 26, color: "#C9D1DC" }}>{settings.oab}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 58, lineHeight: 1.1 }}>Direito Previdenciário e Trabalhista</div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 28, color: "#C9D1DC" }}>
              <div>Atendimento em todo o Brasil</div>
              <div>Escritório em Santa Juliana-MG</div>
            </div>
          </div>
          <div style={{ width: 140, height: 6, background: "#D7C57B", borderRadius: 3 }} />
        </div>
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element -- ImageResponse só aceita <img>
          <img src={photo} alt="" width={420} height={630} style={{ objectFit: "cover", objectPosition: "top" }} />
        )}
      </div>
    ),
    size,
  );
}
