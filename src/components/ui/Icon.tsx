import {
  Armchair,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Baby,
  Bandage,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Clock,
  Coffee,
  ExternalLink,
  Eye,
  Hand,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Hourglass,
  Info,
  Link2,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquareWarning,
  Navigation,
  Phone,
  Pointer,
  Quote,
  RefreshCw,
  Scale,
  ShieldCheck,
  Star,
  Target,
  TriangleAlert,
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
  family: HeartHandshake,
  baby: Baby,
  pointer: Pointer,
  hand: Hand,
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
  "arrow-up": ArrowUp,
  menu: Menu,
  close: X,
  star: Star,
  injury: Bandage,
  info: Info,
  link: Link2,
  external: ExternalLink,
  calendar: CalendarDays,
  banknote: Banknote,
  alert: TriangleAlert,
  "message-warning": MessageSquareWarning,
  hourglass: Hourglass,
  coffee: Coffee,
  lock: Lock,
  scale: Scale,
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
