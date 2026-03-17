import "./globals.css";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { FC } from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Hind } from "next/font/google";
import { ExternalLink } from "lucide-react";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { DocsWipBanner } from "./_components/docs-wip-banner";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const hind = Hind({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FM Skin Builder Docs",
  description: "Documentation for FM Skin Builder",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2 tracking-tight">
        <LogoIcon className="h-7 w-7" />
        <span
          className="text-[20px] font-bold text-foreground"
          style={{ fontFamily: "var(--font-poppins, 'Poppins', sans-serif)" }}
        >
          FM Skin Builder Docs
        </span>
      </div>
    }
  >
    <a
      href="https://fmskinbuilder.com"
      className="inline-flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors hover:opacity-90"
      style={{
        backgroundColor: "#4E1FAD",
        color: "white",
        fontFamily: "var(--font-hind, 'Hind', sans-serif)",
      }}
    >
      <ExternalLink className="h-3.5 w-3.5" />
      Tool Site
    </a>
  </Navbar>
);

const footer = (
  <Footer className="flex-col items-center gap-1 text-sm text-muted-foreground md:items-start">
    <span>Powered by The FM Community</span>
    <p className="mt-1 text-xs">
      &copy; {new Date().getFullYear()} Lotsgon &amp; FM Skin Builder
    </p>
  </Footer>
);

const RootLayout: FC<{ children: React.ReactNode }> = async ({ children }) => {
  let pageMap: Awaited<ReturnType<typeof getPageMap>>;
  try {
    pageMap = await getPageMap();
  } catch (error) {
    console.warn("getPageMap failed during HMR, using fallback:", error);
    pageMap = [] as unknown as Awaited<ReturnType<typeof getPageMap>>;
  }

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${poppins.variable} ${hind.variable}`}
    >
      <Head />
      <body className="bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary-foreground/80">
        <DocsWipBanner />
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          editLink=""
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
