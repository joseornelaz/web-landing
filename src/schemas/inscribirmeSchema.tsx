import { z } from "zod";

const isValidPhone = (val: string) => val.replace(/\D/g, "").length === 10;
const messageTelefono = "Deben ser 10 dígitos";

export const inscribirmeSchema = (programas: number[]) => 
    z.object({
        nombre: z.string().nonempty("Nombre Completo es requerido"),
        apellido: z.string().nonempty("Apellidos es requerido"),
        // matricula: z.string().nonempty("Numero de colaborador/a es requerido"),
        correo: z.email().nonempty("Correo Eléctronico es requerido"),
        // correo: z.string().nonempty("Email es requerido").email("Debe ser un email válido"),
        telefono: z.string().nonempty("Teléfono Celular es requerido").refine(isValidPhone, {
            message: messageTelefono,
        }),
        id_programa: z
            .number()
            .min(1, { message: "Programa de interes es requerido" })
            .refine((id) => programas.includes(id), {
                message: "Programa de interes es requerido",
            }),
        mensaje: z.string(),
});

export type InscribirmeFormData = z.infer<ReturnType<typeof inscribirmeSchema>>;