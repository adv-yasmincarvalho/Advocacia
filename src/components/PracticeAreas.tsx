import { useState } from "react";
import { Scale, Heart, Shield, BookOpen } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const areas = [
  {
    id: "criminal",
    icon: Scale,
    title: "Direito Criminal",
    items: [
      "Crimes contra a honra: calúnia, injúria e difamação",
      "Crimes resultantes de racismo e LGBTfobia",
      "Execução penal: saída temporária, progressão de regime, livramento condicional e outros",
    ],
  },
  {
    id: "familia",
    icon: Heart,
    title: "Direito das Famílias",
    items: [
      "Pensão alimentícia",
      "Guarda e regulamentação de visitas",
      "Divórcio consensual e litigioso",
      "Investigação de paternidade",
    ],
  },
  {
    id: "mulheres",
    icon: Shield,
    title: "Direito das Mulheres",
    items: [
      "Medidas protetivas de urgência",
      "Casos de violência doméstica",
      "Importunação sexual, assédio e ameaça",
    ],
  },
  {
    id: "consultoria",
    icon: BookOpen,
    title: "Consultoria Jurídica",
    items: [
      "Análise do caso concreto",
      "Direcionamento jurídico estratégico para resolução do conflito",
    ],
  },
];

const PracticeAreas = () => {
  const [active, setActive] = useState("criminal");
  const { ref, visible } = useFadeIn();

  const current = areas.find((a) => a.id === active)!;

  return (
    <section id="areas" className="marble-bg pt-8 pb-10 lg:pt-16 lg:pb-16" ref={ref}>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Especialidades
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Áreas de Atuação
          </h2>
        </div>

        {/* Main Grid */}
        <div
          className={`grid lg:grid-cols-[320px_1fr] gap-8 max-w-5xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          {/* Botões */}
          <div className="flex flex-col gap-3">
            {areas.map((area) => {
              const Icon = area.icon;
              const isActive = active === area.id;

              return (
                <button
                  key={area.id}
                  onClick={() => setActive(area.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg text-left font-body font-medium transition-all duration-300 hover:scale-[1.02] ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  <Icon size={20} />
                  {area.title}
                </button>
              );
            })}
          </div>

          {/* Conteúdo */}
          <div className="bg-secondary rounded-lg p-8 lg:p-10 min-h-[280px] flex items-start">
            
            <div
              key={active}
              className="transition-all duration-300 animate-fade w-full"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                {current.title}
              </h3>

              <ul className="space-y-4">
                {current.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground font-body"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
