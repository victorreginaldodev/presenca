import { Icon } from "@/components/ui/Icon";

export function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-4 z-50 flex size-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_20px_rgba(12,23,38,0.3)] transition-transform hover:scale-105 hover:text-white motion-reduce:transition-none motion-reduce:hover:scale-100 sm:right-5 sm:bottom-5"
    >
      <Icon name="whatsapp" size={32} />
    </a>
  );
}
