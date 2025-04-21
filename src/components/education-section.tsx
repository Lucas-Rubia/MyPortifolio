import { Flame } from "lucide-react";
import { Badge } from "./ui/badge";

export function EducationSection() {
  return (
    <section>
      <div
        className="max-w-lg sm:max-w-xl space-y-4 mx-auto text-center scroll-mt-40"
        id="education"
      >
        <Badge variant="secondary" className="relative">
          <span className="bg-white rounded-full size-5 flex items-center justify-center px-px">
            <Flame className="text-black fill-black" />
          </span>
          <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
          Educação
        </Badge>

        <h1 className="text-2xl font-light sm:text-4xl">
          Minha <span className="italic text-yellow-600">educação</span>
        </h1>
        <p className="text-sm text-muted-foreground font-light sm:text-base">
          Demonstrando a minha jornada até conseguir os conhecimentos que possuo hoje.
        </p>
      </div>
      <div className="relative rounded-[1.25rem] border overflow-hidden p-6 text-primary/90 mt-6">
        <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
        <div className="flex items-center flex-wrap gap-4 justify-between border-b pb-4">
          <h4>
            Gestão da Tecnologia da Informação -{" "}
            <strong className="italic">FATEC</strong>
          </h4>
          <Badge variant="secondary" className="h-6 px-2">
            01/01/2022 - 10/12/2024
          </Badge>
        </div>
        <p className="text-xs sm:text-sm mt-4">
          Graduado na Fatec de Franco da Rocha, desenvolvi e apromorei
          habilidades de gestão de pessoas e gestão de equipamentos, sem contar
          a habilidades de relações interpessoais, também desenvolvi e apromorei
          habilidades tecnologicas como criar e moldar sites Webs e Banco de
          Dados.
        </p>
      </div>
      <div className="relative rounded-[1.25rem] border overflow-hidden p-6 text-primary/90 mt-6">
        <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <h4>
            Técnico em Redes de Computadores -{" "}
            <strong className="italic">SENAI</strong>
          </h4>
          <Badge variant="secondary" className="h-6 px-2">
            01/06/2023 - 31/08/2023
          </Badge>
        </div>
        <p className="text-xs sm:text-sm mt-4">
          Formado no Senai de São Caetano do Sul, me aprofundei ainda mais na
          infraestrutura de rede que fazia as empresas funcionarem, apredendo e
          criando um infraestrutura de redes desde a parte cabeada até a parte
          de configuração de equipamentos, e as vezes indo mais além e montando tudo em Nuvem.
        </p>
      </div>
    </section>
  );
}
