import { SiteChrome } from "@/components/layout/SiteChrome";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
