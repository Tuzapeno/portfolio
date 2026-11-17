import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <Link href="/" className="text-link">
        <LuArrowLeft aria-hidden="true" /> Back to home
      </Link>
    </section>
  );
}
