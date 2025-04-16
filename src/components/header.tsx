import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isActiveRoute } from "@/utils/is-active-route";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-background border mb-6 rounded-2xl p-6 sticky top-3 flex items-center justify-between max-w-250 mx-auto z-10">
      <h4 className="font-semibold">Lucas Rubia</h4>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="min-[900px]:hidden">
          <Button size="icon" variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild variant={isActiveRoute("home") ? "active" : "default"}>
            <a href="#home">Início</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild variant={isActiveRoute("experiences") ? "active" : "default"}>
            <a href="#experiences">Experiências</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild variant={isActiveRoute("projects") ? "active" : "default"}>
            <a href="#projects">Projetos</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild variant={isActiveRoute("certifications") ? "active" : "default"}>
            <a href="#certifications">Certificações</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild variant={isActiveRoute("education") ? "active" : "default"}>
            <a href="#education">Educação</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild variant={isActiveRoute("contact") ? "active" : "default"}>
            <a href="#contact">Entre em contato</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <nav className="hidden min-[900px]:block">
        <ul className="flex items-center text-sm gap-4">
          <li>
            <a href="#home">
              <Button
                className="border border-transparent"
                size="sm"
                variant={isActiveRoute("home") ? "outline" : "ghost"}
              >
                Início
              </Button>
            </a>
          </li>
          <li>
            <a href="#experiences">
              <Button
                className="border border-transparent"
                size="sm"
                variant={isActiveRoute("experiences") ? "outline" : "ghost"}
              >
                Experiências
              </Button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Button
                className="border border-transparent"
                size="sm"
                variant={isActiveRoute("projects") ? "outline" : "ghost"}
              >
                Projetos
              </Button>
            </a>
          </li>
          <li>
            <a href="#certifications">
              <Button
                className="border border-transparent"
                size="sm"
                variant={isActiveRoute("certifications") ? "outline" : "ghost"}
              >
                Certificações
              </Button>
            </a>
          </li>
          <li>
            <a href="#education">
              <Button
                className="border border-transparent"
                size="sm"
                variant={isActiveRoute("education") ? "outline" : "ghost"}
              >
                Educação
              </Button>
            </a>
          </li>
        </ul>
      </nav>

      <a href="#contact" className="hidden min-[900px]:flex">
        <Button
          className="shadow-2xl shadow-white/40 hover:shadow-white/60 transition-all"
          variant="outline"
        >
          Entre em contato
        </Button>
      </a>
    </header>
  );
}
