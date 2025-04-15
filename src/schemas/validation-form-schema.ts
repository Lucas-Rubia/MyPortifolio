import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(20, {
    message: "Mensagem precisa conter pelo menos 20 caracteres",
  }),
});
