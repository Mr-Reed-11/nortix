import { useState, useEffect } from "react";
import NortixLogo from "../../assets/nortix-white.jpg";
import {
  ArrowRight,
  Zap,
  Target,
  Rocket,
  Globe,
  Smartphone,
  Settings,
  Lightbulb,
  Link,
  Wrench,
  Menu,
  X,
} from "lucide-react";

const NortixLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-black/80 backdrop-blur-2xl border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <>
                <img
                  src={NortixLogo}
                  alt="Nortix Logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </>
              <span className="text-xl font-light tracking-wide">
                <span className="font-extralight">Nortix</span>
                <span className="font-medium ml-1">Code</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-12">
              {["início", "sobre", "serviços", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-sm font-light tracking-wider hover:text-slate-300 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-gray-900/50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-2xl border border-gray-800/50 rounded-2xl mb-4 p-6 space-y-4">
              {["início", "sobre", "serviços", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 capitalize font-light tracking-wide hover:bg-gray-900/50 rounded-xl transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="início"
        className="relative min-h-screen flex items-center justify-center bg-black"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-800/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <img
              src={NortixLogo}
              alt="Nortix Logo"
              className="rounded-lg object-cover w-20 h-20 mx-auto mb-8 "
            />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight leading-none mb-8 tracking-tight">
            <span className="block text-white mb-4">Transformamos</span>
            <span className="block font-light text-slate-300 mb-4">
              ideias em
            </span>
            <span className="block font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-5">
              Sistemas Inteligentes
            </span>
          </h1>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl font-light text-slate-400 leading-relaxed tracking-wide">
              Inovação e tecnologia para impulsionar o seu negócio
            </p>
            <p className="text-lg font-extralight text-slate-500 mt-4">
              Desenvolvimento ágil • Soluções sob medida • Resultados
              extraordinários
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-black px-10 py-4 rounded-2xl font-medium tracking-wide hover:bg-slate-100 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-white/10">
              <span className="flex items-center gap-3">
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="border border-slate-600 text-slate-300 px-10 py-4 rounded-2xl font-light tracking-wide hover:border-white hover:text-white hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
              Ver Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-32 bg-gradient-to-b from-black to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-extralight mb-6 tracking-tight">
              <span className="text-slate-300">Sobre a</span>
              <span className="font-light ml-3 text-white">Nortix</span>
            </h2>
            <p className="text-xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Especialistas em transformar visões em realidade digital através
              de tecnologia de ponta e design excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                icon: <Zap className="w-8 h-8" />,
                title: "Desenvolvimento Ágil",
                desc: "Metodologias modernas que garantem entregas rápidas e eficientes, mantendo a qualidade em cada etapa do processo.",
              },
              {
                number: "02",
                icon: <Target className="w-8 h-8" />,
                title: "Soluções Sob Medida",
                desc: "Cada projeto é único. Desenvolvemos soluções personalizadas que se alinham perfeitamente às suas necessidades específicas.",
              },
              {
                number: "03",
                icon: <Rocket className="w-8 h-8" />,
                title: "Tecnologia de Ponta",
                desc: "Utilizamos as mais recentes tecnologias e frameworks para garantir performance, escalabilidade e inovação.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800/50 rounded-3xl p-8 hover:border-blue-900/50 hover:bg-gradient-to-b hover:from-blue-950/20 hover:to-gray-900/20 transition-all duration-700 backdrop-blur-sm"
              >
                <div className="text-6xl font-extralight text-slate-700 mb-6 group-hover:text-blue-900/50 transition-colors duration-500">
                  {item.number}
                </div>
                <div className="text-slate-400 group-hover:text-blue-400 transition-colors duration-500 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-light mb-4 text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-extralight mb-6 tracking-tight text-white">
              Nossos <span className="font-light">Serviços</span>
            </h2>
            <p className="text-xl font-light text-slate-400 max-w-3xl mx-auto">
              Soluções completas para transformar sua visão em realidade digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-white" />,
                title: "Desenvolvimento Web",
                desc: "Aplicações web modernas, responsivas e otimizadas para performance excepcional.",
                tech: "React • Next.js • TypeScript",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-white" />,
                title: "Aplicativos Mobile",
                desc: "Apps nativos e híbridos que oferecem experiências fluidas em todas as plataformas.",
                tech: "React Native • Flutter • Swift",
              },
              {
                icon: <Settings className="w-6 h-6 text-white" />,
                title: "Sistemas Personalizados",
                desc: "Soluções sob medida que se adaptam perfeitamente ao seu modelo de negócio.",
                tech: "Node.js • Python • AWS",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-white" />,
                title: "Consultoria Técnica",
                desc: "Orientação especializada para otimizar seus processos e tecnologias existentes.",
                tech: "Arquitetura • DevOps • Segurança",
              },
              {
                icon: <Link className="w-6 h-6 text-white" />,
                title: "Integração de APIs",
                desc: "Conectamos seus sistemas de forma inteligente e segura para máxima eficiência.",
                tech: "REST • GraphQL • WebSockets",
              },
              {
                icon: <Wrench className="w-6 h-6 text-white" />,
                title: "Suporte Técnico",
                desc: "Manutenção proativa e evolução contínua para manter seus projetos sempre atualizados.",
                tech: "Monitoramento • Updates • Escalabilidade",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-black/50 border border-gray-800/50 rounded-3xl p-8 hover:border-blue-900/30 hover:bg-gradient-to-br hover:from-blue-950/10 hover:to-black/50 transition-all duration-700 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light mb-4 text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                  <div className="text-sm font-light text-slate-500 border-t border-gray-800 pt-4">
                    {service.tech}
                  </div>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-blue-900/0 opacity-0 group-hover:opacity-10 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-32 bg-gradient-to-b from-gray-950 to-black"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-extralight mb-8 tracking-tight">
            <span className="text-slate-300">Vamos</span>
            <span className="font-light ml-3 text-white">Conversar?</span>
          </h2>
          <p className="text-xl font-light text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar sua ideia em realidade? Vamos construir algo
            extraordinário juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white text-black px-10 py-4 rounded-2xl font-medium tracking-wide hover:bg-slate-100 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-white/10">
              <span className="flex items-center gap-3">
                Enviar Mensagem
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </span>
            </button>
            <button className="border border-slate-600 text-slate-300 px-10 py-4 rounded-2xl font-light tracking-wide hover:border-white hover:text-white hover:bg-white/5 transition-all duration-500">
              <span className="flex items-center gap-3">
                WhatsApp
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690" />
                </svg>
              </span>
            </button>
          </div>

          <div className="text-slate-500 font-light">
            <p className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Palmas, Tocantins - Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 sm:mb-0">
              <img src={NortixLogo} alt="Nortix Logo" className="rounded-lg object-cover w-8 h-8 mx-auto mr-1.5" />
              <span className="text-lg font-light tracking-wide">
                <span className="font-extralight text-slate-400">Nortix</span>
                <span className="font-light ml-1 text-white">Code</span>
              </span>
            </div>
            <div className="text-slate-500 text-sm font-light">
              © 2025 Nortix Code. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NortixLanding;
