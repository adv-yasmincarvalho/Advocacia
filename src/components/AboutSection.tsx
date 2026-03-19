import { useFadeIn } from "@/hooks/useFadeIn";
import aboutImg from "@/assets/yasmin-about.jpeg";

const AboutSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="sobre" className="marble-bg pt-8 pb-10 lg:pt-16 lg:pb-16" ref={ref}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGEM */}
        <div
          className={`relative transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
            <img
              src={aboutImg}
              alt="Yasmin Carvalho"
              className="w-full h-[500px] object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* detalhe decorativo mais sutil */}
          <div className="absolute -bottom-6 -right-4 w-28 h-28 border border-primary/20 rounded-lg -z-10" />
        </div>

        {/* TEXTO */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-5x1 tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Sobre
          </p>

          <h2 className="font-display text-4xl lg:text-5x1 font-bold text-foreground mb-6 leading-tight">
            Compromisso com a <span className="text-primary">justiça</span> e com você
          </h2>

          {/* LINHA DE DESTAQUE (novo) */}
          <div className="w-20 h-[2px] bg-primary mb-6" />

          <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
            <p>
              Atuação pautada pela ética, dedicação e atendimento personalizado, 
              oferecendo assessoria jurídica nas áreas criminal, familiar e Direito das mulheres.
            </p>

            <p>
              Cada caso é tratado com sigilo e profundidade, buscando estratégias sólidas 
              para proteger os interesses do cliente.
            </p>
            <p>
            
            </p>
          </div>

          {/* CTA leve (MELHORIA IMPORTANTE) */}
          <a
              href="https://api.whatsapp.com/send?phone=559185309796&text=Olá,%20Dra.%20Yasmin.%20Gostaria%20de%20agendar%20uma%20consulta."
	      target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-primary text-primary-foreground px-6 sm:px-4 py-3 sm:py-4 rounded-lg font-body font-medium tracking-wide text-sm transition-all duration-700 delay-500 hover:bg-wine-dark hover:shadow-elevated hover:scale-[1.02]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
