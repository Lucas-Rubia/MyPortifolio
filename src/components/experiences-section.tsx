import { Flame, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

export function ExperiencesSection() {
  return (
    <section>
      <div
        className="max-w-lg sm:max-w-xl space-y-4 mx-auto text-center scroll-mt-40"
        id="experiences"
      >
        <Badge variant="secondary" className="relative">
          <span className="bg-white rounded-full size-5 flex items-center justify-center px-px">
            <Flame className="text-black fill-black" />
          </span>
          <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
          Experiências
        </Badge>

        <h1 className="text-2xl font-light sm:text-4xl">
          O que me torna{" "}
          <span className="italic text-yellow-600">diferente?</span>
        </h1>
        <p className="text-sm text-muted-foreground font-light sm:text-base">
          Eu crio experiências digitais e fisicas que se alinham a suas
          necessidades e objetivos, combinando criatividade com funcionalidade.
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 mt-4 max-w-lg sm:max-w-2xl mx-auto">
        <Badge variant="secondary">CSS3 | Sass | TailwindCSS</Badge>
        <Badge variant="secondary">React | Javascript | Typescript</Badge>
        <Badge variant="secondary">C# | .NET</Badge>
        <Badge variant="secondary">SOHO | Enterprises</Badge>
      </div>
      <section className="flex flex-wrap justify-center gap-4 my-8">
        <div className="relative rounded-[1.25rem] overflow-hidden flex-1 min-w-75 max-w-90 bg-secondary/30 p-6 bg-card-image bg-cover bg-center bg-no-repeat text-primary/90">
          <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
          <div className="size-11 rounded-full border flex items-center justify-center bg-secondary/40 mb-4">
            <Zap className="fill-white size-5" />
          </div>
          <h3 className="text-sm mb-2 sm:text-base">Desenvolvedor Web</h3>
          <p className="text-xs max-w-74 sm:text-sm">
            Desenvolvendo sites web com as HMTL CSS JS e React
          </p>
        </div>
        <div className="relative rounded-[1.25rem] overflow-hidden flex-1 min-w-75 max-w-90 bg-secondary/30 p-6 bg-card-image bg-cover bg-center bg-no-repeat text-primary/90">
          <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
          <div className="size-11 rounded-full border flex items-center justify-center bg-secondary/40 mb-4">
            <Zap className="fill-white size-5" />
          </div>
          <h3 className="text-sm mb-2 sm:text-base">Desenvolvedor Backend</h3>
          <p className="text-xs max-w-74 sm:text-sm">
            Desenvolvendo APIs com C# e .NET e abordando arquiteturas e patterns escaláveis
          </p>
        </div>
        <div className="relative rounded-[1.25rem] overflow-hidden flex-1 min-w-75 max-w-90 bg-secondary/30 p-6 bg-card-image bg-cover bg-center bg-no-repeat text-primary/90">
          <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
          <div className="size-11 rounded-full border flex items-center justify-center bg-secondary/40 mb-4">
            <Zap className="fill-white size-5" />
          </div>
          <h3 className="text-sm mb-2 sm:text-base">Técnico em redes</h3>
          <p className="text-xs max-w-74 sm:text-sm">
            Análisando, moldando e remondando a infraestrutura de redes cabeas e
            Wirelles
          </p>
        </div>
      </section>
      <div className="flex items-center flex-wrap justify-center gap-4">
        <Badge variant="secondary">Git | GitHub</Badge>
        <Badge variant="secondary">HTML5</Badge>
        <Badge variant="secondary">MySql | PostgreSql | SqlServer</Badge>
      </div>

      <div className="relative rounded-[1.25rem] border overflow-hidden p-6 text-primary/90 mt-6">
        <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
        <div className="flex items-center justify-between border-b pb-4">
          <h4>Montagem de redes SOHO - Freelancer</h4>
          <Badge
            variant="secondary"
            className="h-6 px-2 bg-green-800 text-white"
          >
            Atual
          </Badge>
        </div>
        <p className="text-xs sm:text-sm mt-4">
          Montagem de redes SOHO que incluindo a análise de ambientes existentes
          para identificar pontos de melhoria, como otimização do sinal,
          substituição de equipamentos e reorganização de layout. Contanto
          também com planejamento e implementação de redes do zero, definindo
          topologia, endereçamento IP, escolha de equipamentos e configurações
          de segurança, garantindo redes estáveis e eficientes para pequenos
          escritórios e residências.
        </p>
      </div>
      <div className="relative rounded-[1.25rem] border overflow-hidden p-6 text-primary/90 mt-6">
        <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <h4>Monitor de Redes - Fundação FAT</h4>
          <Badge variant="secondary" className="h-6 px-2">
            01/06/2023 - 31/08/2023
          </Badge>
        </div>
        <p className="text-xs sm:text-sm mt-4">
          Monitoramento de rede realizado durante curso online, auxiliando o
          professor na administração da sala de aula e no suporte aos alunos.
          Atuei acompanhando o desempenho da rede, ajudando na resolução de
          problemas de conexão e tirando dúvidas técnicas dos participantes,
          garantindo o bom andamento das atividades e a estabilidade do ambiente
          virtual de aprendizagem.
        </p>
      </div>
    </section>
  );
}
