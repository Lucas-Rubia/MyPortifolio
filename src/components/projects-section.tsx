import { IMAGES } from "@/constants/images";
import { ArrowUpRight, Flame } from "lucide-react";
import { Badge } from "./ui/badge";

export function ProjectsSection() {
  return (
    <section>
      <div
        className="max-w-lg sm:max-w-xl space-y-4 mx-auto text-center scroll-mt-40"
        id="projects"
      >
        <Badge variant="secondary" className="relative">
          <span className="bg-white rounded-full size-5 flex items-center justify-center px-px">
            <Flame className="text-black fill-black" />
          </span>
          <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
          Projeto
        </Badge>

        <h1 className="text-2xl font-light sm:text-4xl">
          Meus Últimos e <span className="italic text-yellow-600">Melhores</span>{" "}
          Projetos
        </h1>
        <p className="text-sm text-muted-foreground font-light sm:text-base">
          Eu projeto soluções digitais que trazem a diferença
        </p>
      </div>
      <section className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://agency-web-site-eta.vercel.app/"
          target="_blank"
          className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90 group transition-colors"
        >
          <img
            src={IMAGES.AgencyWeb}
            alt="Project01"
            className="group-hover:-mt-2 transition-all mask-x-from-70% group-hover:mask-x-from-80%"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">Agency Web Site</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">HMTL | CSS | Tailwind | Rect</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </a>
        <a
          href="https://coffe-delivery-sage.vercel.app/"
          target="_blank"
          className="relative rounded-[1.25rem] border-4 overflow-hidden bg-neutral-300/20  flex-1 min-w-75 max-w-90 group transition-colors"
        >
          <img
            src={IMAGES.CoffyDelivery}
            alt="Project02"
            className="group-hover:-mt-2 transition-all mask-x-from-70% group-hover:mask-x-from-80%"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/55 backdrop-blur-md p-3">
            <h4 className="mb-2">Coffe Delivery</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">HMTL | CSS | Tailwind | Rect</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </a>
        <a
          href="https://dt-money-gilt-mu.vercel.app/"
          target="_blank"
          className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90 group transition-colors"
        >
          <img
            src={IMAGES.DtMoney}
            alt="Project03"
            className="group-hover:-mt-2 transition-all mask-x-from-70% group-hover:mask-x-from-80%"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">DT Money</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">HMTL | CSS | Rect | JS | JSON</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </a>
        <a
          href="https://pomodoro-timer-neon-phi.vercel.app/"
          target="_blank"
          className="relative rounded-[1.25rem] border-4 overflow-hidden flex-1 min-w-75 max-w-90 group transition-colors"
        >
          <img
            src={IMAGES.PomodoroTimer}
            alt="Project04"
            className="group-hover:-mt-2 transition-all mask-x-from-70% group-hover:mask-x-from-80%"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/2 backdrop-blur-md p-3">
            <h4 className="mb-2">Pomodoro Timer</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">HMTL | CSS | Rect | JS</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/Lucas-Rubia/freelancer_platform.git"
          target="_blank"
          className="relative rounded-[1.25rem] border-4 overflow-hidden bg-neutral-300/20 flex-1 min-w-75 max-w-90 group transition-colors"
        >
          <img
            src={IMAGES.ApiFreelancerPlataform}
            alt="Project04"
            className="group-hover:-mt-2 transition-all mask-x-from-70% group-hover:mask-x-from-80%"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/35 backdrop-blur-md p-3">
            <h4 className="mb-2">API Freelancer Plataform</h4>
            <div className="flex items-center justify-between">
              <h5 className="text-muted-foreground">C# | PostgreSql | SqlServer</h5>
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </a>
      </section>
    </section>
  );
}
