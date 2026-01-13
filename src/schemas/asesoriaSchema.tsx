import { z } from "zod";

const isValidPhone = (val: string) => val.replace(/\D/g, "").length === 10;
const messageTelefono = "Deben ser 10 dígitos";

export const asesoriaSchema = (programas: number[]) => 
    z.object({
        nombreContacto: z.string().nonempty("Nombre Completo es requerido"),
        numEmpleadoContacto: z.string().nonempty("Numero de colaborador/a es requerido"),
        emailContacto: z.email({ message: "Debe ser un email válido" }).nonempty("Correo Eléctronico es requerido"),
        numContacto: z.string().nonempty("Número Télefonico es requerido").refine(isValidPhone, {
            message: messageTelefono,
        }),
        pragramaContacto: z
            .number()
            .min(1, { message: "Programa de interes es requerido" })
            .refine((id) => programas.includes(id), {
                message: "Programa de interes es requerido",
            }),
});

export type AsesoriaFormData = z.infer<ReturnType<typeof asesoriaSchema>>;