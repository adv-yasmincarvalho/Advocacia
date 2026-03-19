import heroImg from "@/assets/yasmin-portrait.jpeg";
import { useFadeIn } from "@/hooks/useFadeIn";

const HeroSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="inicio"
      ref={ref}
      className={`relative min-h-screen flex items-center transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      
      {/* Background split */}
      <div className="absolute inset-0 flex">
        <div className="hidden lg:block lg:w-1/2 bg-foreground" />
        <div className="w-full lg:w-1/2 bg-background" />
      </div>

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-0 min-h-screen">
        
        {/* Imagem */}
        <div className="relative flex items-end justify-center lg:justify-end overflow-hidden bg-foreground min-h-[60vh] lg:min-h-screen">
          <img
            src={heroImg}
            alt="Yasmin Carvalho - Advogada"
            className={`w-full max-w-md lg:max-w-lg object-cover object-top h-[70vh] lg:h-[85vh] transition-all duration-700 ease-out delay-150
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          />
        </div>

        {/* Texto */}
        <div className="flex items-center px-8 lg:px-16 py-16 lg:py-0">
          <div className="max-w-lg space-y-6">

            <p className={`text-sm tracking-[0.3em] uppercase text-muted-foreground font-body transition-all duration-700 delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>
              Advocacia & Consultoria Jurídica
            </p>

            <h1 className={`font-display text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] transition-all duration-700 delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>
              Yasmin<br />
              <span className="text-primary">Carvalho</span>
            </h1>

            <p className={`text-lg text-muted-foreground leading-relaxed font-body transition-all duration-700 delay-400
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>
              Defesa estratégica, atendimento humanizado e compromisso com a justiça.
            </p>

            <a
              href="#contato"
              className={`inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium tracking-wide text-sm transition-all duration-700 delay-500 hover:bg-wine-dark hover:shadow-elevated hover:scale-[1.02]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              Agende uma Consulta
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
