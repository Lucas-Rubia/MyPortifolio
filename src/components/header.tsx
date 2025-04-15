import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
          <DropdownMenuItem>Início</DropdownMenuItem>
          <DropdownMenuItem>Experiências</DropdownMenuItem>
          <DropdownMenuItem>Projetos</DropdownMenuItem>
          <DropdownMenuItem>Certificações</DropdownMenuItem>
          <DropdownMenuItem>Educação</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <nav className="hidden min-[900px]:block">
        <ul className="flex items-center text-sm gap-4">
          <li>
            <Button size="sm" variant="secondary">
              Início
            </Button>
          </li>
          <li>
            <Button size="sm" variant="ghost">
              Experiências
            </Button>
          </li>
          <li>
            <Button size="sm" variant="ghost">
              Projetos
            </Button>
          </li>
          <li>
            <Button size="sm" variant="ghost">
              Certificações
            </Button>
          </li>
          <li>
            <Button size="sm" variant="ghost">
              Educação
            </Button>
          </li>
        </ul>
      </nav>

      <Button className="hidden min-[900px]:flex shadow-2xl shadow-white/40 hover:shadow-white/60 transition-all" variant="outline">
        Entre em contato
      </Button>
    </header>
  );
}
