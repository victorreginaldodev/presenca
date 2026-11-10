import { SiteChrome } from "@/components/shared/SiteChrome";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
