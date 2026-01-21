import { z } from "zod";

const isValidPhone = (val: string) => val.replace(/\D/g, "").length === 10;
const messageTelefono = "Deben ser 10 dígitos";

export const inscribirmeSchema = (programas: number[]) => 
    z.object({
        nombreQuiero: z.string().nonempty("Nombre Completo es requerido"),
        apellidosQuiero: z.string().nonempty("Apellidos es requerido"),
        correoQuiero: z.email({ message: "Debe ser un email válido" }).nonempty("Correo Eléctronico es requerido"),
        numQuiero: z.string().nonempty("Teléfono Celular es requerido").refine(isValidPhone, {
            message: messageTelefono,
        }),
        id_programa: z
            .number()
            .min(1, { message: "Programa de interes es requerido" })
            .refine((id) => programas.includes(id), {
                message: "Programa de interes es requerido",
            }),
        comentariosQuiero: z.string(),
});

export type InscribirmeFormData = z.infer<ReturnType<typeof inscribirmeSchema>>;