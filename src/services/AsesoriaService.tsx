import axios from "axios";
import type { AsesoriaPayload, ContactoPayload } from "../types/Asesoria.interface";


export const useAsesoria = async (payload: AsesoriaPayload): Promise<any> => {
    const response = await axios.post(
        `${import.meta.env.VITE_EXTERNAL_LINK_ADMIN_ACADEMIA}/enviarCorreo.service.php`,
        payload,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
    return response;
};

export const useContacto = async (payload: ContactoPayload): Promise<any> => {
    const response = await axios.post(
        `${import.meta.env.VITE_EXTERNAL_LINK_ADMIN_ACADEMIA}/enviarCorreoQuiero.php`,
        payload,{
            headers: {
                'Content-Type': 'application/json',
            },
        });

    return response;
};