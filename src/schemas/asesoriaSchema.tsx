import { z } from "zod";

const isValidPhone = (val: string) => val.replace(/\D/g, "").length === 10;
const messageTelefono = "Deben ser 10 dígitos";

export const asesoriaSchema = (programas: number[]) => 
    z.object({
        nombre: z.string().nonempty("Nombre Completo es requerido"),
        matricula: z.string().nonempty("Nombre Completo es requerido"),
        correo: z.email().nonempty("Email es requerido"),
        // correo: z.string().nonempty("Email es requerido").email("Debe ser un email válido"),
        telefono: z.string().nonempty("Teléfono es requerido").refine(isValidPhone, {
            message: messageTelefono,
        }),
        id_programa: z
            .number()
            .min(1, { message: "Programa de interes es requerido" })
            .refine((id) => programas.includes(id), {
                message: "Programa de interes es requerido",
            }),
});

export type AsesoriaFormData = z.infer<ReturnType<typeof asesoriaSchema>>;