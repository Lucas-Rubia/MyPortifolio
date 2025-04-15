import { IMAGES } from "@/constants/images";
import { ArrowUpRight, Flame } from "lucide-react";
import { Badge } from "./ui/badge";

export function ProjectsSection() {
  return (
    <section>
      <div className="max-w-lg sm:max-w-xl space-y-4 mx-auto text-center">
        <Badge variant="secondary" className="relative">
          <span className="bg-white rounded-full size-5 flex items-center justify-center px-px">
            <Flame className="text-black fill-black" />
          </span>
          <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
          Projeto
        </Badge>

        <h1 className="text-2xl font-light sm:text-4xl">
          Meu Último e <span className="italic text-yellow-600">Melhor</span>{" "}
          Projeto
        </h1>
        <p className="text-sm text-muted-foreground font-light sm:text-base">
          Eu projeto soluções digitais que ressoam
        </p>
      </div>
      <section className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project01} alt="Project01" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">Site Bonsaily</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">IA</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
        <div className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project02} alt="Project02" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">AI Sass Website Template</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">Sass</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
        <div className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project03} alt="Project03" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">AI Integrations Apps</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">Sass</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
        <div className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project04} alt="Project04" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">blueai website</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">IA</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
        <div className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90">
          <img src={IMAGES.Project04} alt="Project04" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">blueai website</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">IA</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
