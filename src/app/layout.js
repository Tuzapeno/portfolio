import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource-variable/inter/wght.css";
import { SiteFooter, SiteHeader } from "./site-chrome";
import "./globals.css";

export const metadata = {
  title: {
    default: "Arthur Neumann Salerno — Developer",
    template: "%s — Arthur Neumann Salerno",
  },
  description:
    "Arthur Neumann Salerno’s portfolio of web applications, game jam projects, and experiments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
