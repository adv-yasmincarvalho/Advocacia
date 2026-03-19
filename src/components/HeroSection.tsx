import heroImg from "@/assets/yasmin-portrait.jpeg";
import { useFadeIn } from "@/hooks/useFadeIn";

const HeroSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="inicio"
      ref={ref}
      // overflow-hidden impede o "deslize" lateral
      className={`relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden flex items-center transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Background split - O fundo dividido (35/65 no desktop, tela cheia no mobile) */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="h-[45vh] lg:h-full lg:w-[35%] bg-foreground" />
        <div className="flex-1 bg-background" />
      </div>

      {/* Conteúdo Principal */}
      <div className="w-full relative z-10 flex flex-col lg:flex-row min-h-[90vh] lg:min-h-screen">
        
        {/* Lado da Imagem: 45% da altura no mobile, 35% da largura no desktop */}
        <div className="relative flex items-center justify-center overflow-hidden h-[45vh] lg:h-auto lg:w-[35%] w-full bg-foreground">
          <img
            src={heroImg}
            alt="Yasmin Carvalho - Advogada"
            className={`w-full h-full object-cover object-top transition-all duration-700 ease-out delay-150
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          />
        </div>

        {/* Lado do Texto: Ocupa o restante do espaço (65%) */}
        <div className="flex items-center px-6 sm:px-12 lg:px-40 py-10 lg:py-0 lg:w-[65%] w-full">
          <div className="max-w-2xl w-full space-y-5 lg:space-y-6">

            <p className={`text-sm sm:text-lg tracking-[0.3em] uppercase text-muted-foreground font-body transition-all duration-700 delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>
              Advocacia & Consultoria Jurídica
            </p>

            <h1 className={`font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground leading-[1.1] transition-all duration-700 delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>
              Yasmin<br />
              <span className="text-primary">Carvalho</span>
            </h1>

            <p className={`text-lg sm:text-xl text-muted-foreground leading-relaxed font-body max-w-xl transition-all duration-700 delay-400
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>
              Defesa estratégica, atendimento personalizado e compromisso com a justiça.
            </p>

            <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a
                href="#contato"
                className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-lg font-body font-medium tracking-wide text-lg transition-all hover:bg-wine-dark hover:shadow-elevated hover:scale-[1.02] active:scale-95"
              >
                Agende uma Consulta
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
