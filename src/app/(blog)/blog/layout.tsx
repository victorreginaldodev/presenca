import { BlogFooter } from "@/components/blog/BlogFooter";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";
import { getBlogPage, getLawyerProfile, getSiteSettings } from "@/lib/content";
import { contactWhatsappUrl } from "@/lib/links";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const [settings, profile, blog] = await Promise.all([getSiteSettings(), getLawyerProfile(), getBlogPage()]);
  const whatsappHref = contactWhatsappUrl(settings);

  return (
    <>
      <BlogHeader
        name={profile.name}
        oab={settings.oab}
        logo={settings.logo}
        navigation={blog.navigation}
        whatsappHref={whatsappHref}
        contact={settings.contact}
      />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <BlogFooter settings={settings} name={profile.name} disclaimer={blog.disclaimer} whatsappHref={whatsappHref} />
      <FloatingWhatsApp href={whatsappHref} />
    </>
  );
}
