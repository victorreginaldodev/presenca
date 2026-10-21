import { Icon } from "@/components/ui/Icon";

export function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex size-14 touch-manipulation items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_20px_rgba(12,23,38,0.3)] transition-transform hover:scale-105 hover:text-white motion-reduce:transition-none motion-reduce:hover:scale-100 sm:right-5 sm:bottom-5 sm:size-16"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
