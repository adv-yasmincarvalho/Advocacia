import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl font-semibold mb-1">Yasmin Carvalho</p>
      <p className="text-sm text-primary-foreground/60 font-body mb-6">
        Advocacia & Consultoria Jurídica
      </p>
      <a
        href="https://instagram.com/adv.yasmincarvalho_"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors duration-300 font-body text-sm"
      >
        <Instagram size={16} />
        @adv.yasmincarvalho_
      </a>
      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/40 font-body">
        © {new Date().getFullYear()} Yasmin Carvalho — Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
