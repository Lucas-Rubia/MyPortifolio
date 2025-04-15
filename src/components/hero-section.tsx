import { IMAGES } from "@/constants/images";
import { ArrowDownLeft, ArrowDownRight, BriefcaseBusiness } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="text-center">
      <div className="max-w-lg sm:max-w-xl space-y-4 mx-auto">
        <div className="border-6 rounded-full size-25 mx-auto">
          <img className="rounded-full" src={IMAGES.Profile} alt="Lucas" />
        </div>
        <div className="text-xs text-muted-foreground">
          <p>Gestor de TI | Técnico em Redes | Dev FullStack</p>
        </div>
        <Badge variant="secondary" className="relative">
          <BriefcaseBusiness />
          <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
          Disponível para trabalhos
        </Badge>

        <h1 className="text-2xl font-light sm:text-4xl">
          <span className="italic text-yellow-600">Criando experiências</span>{" "}
          digitais inovadoras como{" "}
          <span className="italic text-yellow-600">Web Designer</span>
        </h1>
        <p className="text-sm text-muted-foreground font-light sm:text-base">
          Olá, meu nome é Lucas, bem-vindo ao meu mundo. Adoro criar sites
          lindos e atemporais e experiências digitais.
        </p>
        <Button variant="outline" className="shadow-2xl shadow-white">
          Entre em contato
        </Button>
        <p className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <ArrowDownRight /> Veja mais sobre mim <ArrowDownLeft />
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="secondary">
            <img src={IMAGES.Github} alt="Github" className="size-5" />
            GitHub
          </Badge>
          <Badge variant="secondary">
            <img src={IMAGES.Linkedin} alt="Linkedin" className="size-5" />
            Linkedin
          </Badge>
        </div>
      </div>
      <section className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project01} alt="Project01" />
        </div>
        <div className="rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project02} alt="Project02" />
        </div>
        <div className="rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project03} alt="Project03" />
        </div>
      </section>
    </section>
  );
}
