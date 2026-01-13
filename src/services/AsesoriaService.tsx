import axios from "axios";
import type { AsesoriaPayload } from "../types/Asesoria.interface";


export const useAsesoria = async (payload: AsesoriaPayload): Promise<any> => {
    const response = await axios.post(
        `https://administrador.academiaglobal.mx/plataformas/api/php/services/ucc/enviarCorreo.service.php`,
        { data: payload },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return response;
};