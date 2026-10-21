import {
  Armchair,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clock,
  Eye,
  HardHat,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Quote,
  RefreshCw,
  ShieldCheck,
  Star,
  Target,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";
import { siGoogle, siInstagram, siWhatsapp } from "simple-icons";

import type { IconName } from "@/content/types";

// Ícones de interface: Lucide. Marcas (WhatsApp, Instagram, Google): Simple Icons,
// com o desenho oficial de cada marca.
const lucide: Record<Exclude<IconName, BrandIcon>, LucideIcon> = {
  retirement: Armchair,
  health: HeartPulse,
  accident: HardHat,
  work: BriefcaseBusiness,
  shield: ShieldCheck,
  eye: Eye,
  refresh: RefreshCw,
  book: BookOpen,
  target: Target,
  chat: MessageCircle,
  video: Video,
  pin: MapPin,
  clock: Clock,
  phone: Phone,
  mail: Mail,
  navigation: Navigation,
  check: Check,
  quote: Quote,
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  menu: Menu,
  close: X,
  star: Star,
};

type BrandIcon = "whatsapp" | "instagram" | "google";

const brands: Record<BrandIcon, string> = {
  whatsapp: siWhatsapp.path,
  instagram: siInstagram.path,
  google: siGoogle.path,
};

function isBrand(name: IconName): name is BrandIcon {
  return name in brands;
}

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/** Ícone decorativo. O texto acessível fica sempre no elemento pai. */
export function Icon({ name, size = 24, strokeWidth = 2, className }: IconProps) {
  if (isBrand(name)) {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
      >
        <path d={brands[name]} />
      </svg>
    );
  }

  const Component = lucide[name];
  return (
    <Component
      aria-hidden="true"
      focusable="false"
      size={size}
      strokeWidth={strokeWidth}
      fill={name === "star" ? "currentColor" : "none"}
      className={className}
    />
  );
}
