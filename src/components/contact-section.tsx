import { ContactFormSchema } from "@/schemas/validation-form-schema";
import { ContactSchemaType } from "@/types/schema-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flame } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  function handleSendEmail(_: ContactSchemaType) {
    toast("E-mail enviado com sucesso ✅", {
      description: "Verifique sua caixa de entrada.",
    });
  }

  return (
    <div className="scroll-mt-40" id="contact">
      <section className="relative border rounded-[1.25rem] overflow-hidden px-6 py-10">
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#d08700aa_100%)]"></div>
        <div className="max-w-lg sm:max-w-xl space-y-4 mx-auto text-center">
          <Badge variant="secondary" className="relative">
            <span className="bg-white rounded-full size-5 flex items-center justify-center px-px">
              <Flame className="text-black fill-black" />
            </span>
            <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
            Contato
          </Badge>

          <h1 className="text-2xl font-light sm:text-4xl">
            Tem um projeto{" "}
            <span className="italic text-yellow-600">dos sonhos</span>?
          </h1>
          <p className="text-sm text-muted-foreground font-light sm:text-base">
            Vamos transformar sua visão em uma realidade impressionante. Entre
            em contato hoje mesmo e juntos iremos nos diferencias dos concorrentes.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSendEmail)}
              className="space-y-4 text-start"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Sua mensagem"
                        className="h-30 resize-none [&::-webkit-scrollbar-track]:rounded-md"
                        rows={2}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="outline"
                className="w-full max-w-70 flex mx-auto"
              >
                Entre em contato
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <footer className="flex flex-wrap justify-center gap-4 items-center text-center mx-auto mt-10 text-sm text-muted-foreground">
        <p>Desenvolvido por Lucas Rubia 😎</p>
      </footer>
    </div>
  );
}
