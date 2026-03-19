import { UserCheck, Lock, Target, MessageCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const items = [
  {
    icon: UserCheck,
    title: "Atendimento Especializado",
    text: "Cada cliente é tratado com empatia, respeito e atenção individualizada.",
  },
  {
    icon: Lock,
    title: "Sigilo e Ética",
    text: "Compromisso absoluto com a confidencialidade e os princípios éticos da advocacia.",
  },
  {
    icon: Target,
    title: "Estratégia Jurídica",
    text: "Análise aprofundada de cada caso para traçar a melhor estratégia de defesa.",
  },
  {
    icon: MessageCircle,
    title: "Atuação Diligente",
    text: "Acompanhamento pessoal e constante em todas as etapas do processo.",
  },
];

const Differentiators = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="diferenciais" className="marble-bg pt-8 pb-10 lg:pt-16 lg:pb-16" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Por quê nos escolher?
          </p>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Diferenciais
          </h2>
        </div>

        {/* Cards */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-background rounded-lg p-8 text-center shadow-soft transition-all duration-300 hover:shadow-elevated hover:scale-[1.04]"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-primary" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Differentiators;
