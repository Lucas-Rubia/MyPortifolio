import { ContactFormSchema } from "@/schemas/validation-form-schema";
import { z } from "zod";

export type ContactSchemaType = z.infer<typeof ContactFormSchema>;
