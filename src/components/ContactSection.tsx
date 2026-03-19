import { useState } from "react";
import { Send } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const ContactSection = () => {
  const { ref, visible } = useFadeIn();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const msg = encodeURIComponent(
    `Olá, meu nome é ${form.nome}. ${form.mensagem}`
  );

  // Alterado de wa.me para api.whatsapp.com/send
  window.open(`https://api.whatsapp.com/send?phone=559185309796&text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="marble-bg pt-8 pb-10 lg:pt-16 lg:pb-16" ref={ref}>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Fale Conosco
          </p>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>

          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Tire suas dúvidas ou agende uma consulta. Estamos prontos para ajudar você.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`max-w-xl mx-auto space-y-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full px-5 py-4 rounded-lg bg-secondary border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />

          <textarea
            placeholder="Sua mensagem"
            rows={5}
            required
            value={form.mensagem}
            onChange={(e) =>
              setForm({ ...form, mensagem: e.target.value })
            }
            className="w-full px-5 py-4 rounded-lg bg-secondary border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium tracking-wide text-sm transition-all duration-300 hover:bg-wine-dark hover:scale-[1.02] hover:shadow-elevated"
          >
            <Send size={16} />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
