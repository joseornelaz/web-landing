import { SectionOfrece } from "../../molecules/SectionOfrece/SectionOfrece";
import type { NivelInterface } from "../../../types/NivelInterface";

import imgLEG from '../../../assets/section_ofrece/imgLEG.png';
import imgING from '../../../assets/ingenieria/inge_cel.png';
import imgMAESTRIA from '../../../assets/maestria/maestria_celular.png';
import imgPrepa from '../../../assets/section_ofrece/imgPrepa.png';
import { NivelTypes } from "../../../types/NivelTypes";
import React from "react";

const contentArray = [
    { 
        type: NivelTypes.PREPA,
        values: {
            title: 'Prepa Coppel te ofrece',
            cards: ['Beca académica para colaboradores, colaboradoras y sus familiares con base en la Decisión 21-A.', 'Contenidos diseñados para jóvenes y adultos que trabajan.', 'Revalidación o equivalencia de materias, en caso de tener estudios inconclusos de Bachillerato.'],
            imagen: imgPrepa
        }
    },
    { 
        type: NivelTypes.LIC,
        values: {
            title: 'La Licenciatura en Gerenciamiento te ofrece',
            cards: ['Beca académica para colaboradores, colaboradoras y familiares con base en la Decisión 21-A.', 'Descuento vía nómina en pago de materias e inscripción.', 'Revalidación o equivalencia de materias, en caso de tener estudios inconclusos de Licenciatura afín.'],
            imagen: imgLEG
        }
    },
    { 
        type: NivelTypes.ING,
        values: {
            title: 'La Ingeniería en Desarrollo de Software te ofrece:',
            cards: ['Beca académica para colaboradores, colaboradoras y familiares con base en la Decisión 21-A.', 'Descuento vía nómina en pago de materias e inscripción.', 'Revalidación o equivalencia de materias, en caso de tener estudios inconclusos de Licenciatura afín.'],
            imagen: imgING
        }
    },
    { 
        type: NivelTypes.MAESTRIA,
        values: {
            title: 'La Maestría en Dirección De negocios te ofrece:',
            cards: ['Programa disponible para colaboradores con 1 año de antigüedad.','Registro de validez oficial de estudios ante la Secretaría de Educación Pública.'],
            imagen: imgMAESTRIA
        }
    },
];

export const Ofrece: React.FC<NivelInterface> = ({type}) => {
    const [info, setInfo] = React.useState<{title: string, cards: string[], imagen: any} | undefined>(undefined);
    
    React.useEffect(() => {
        setInfo(contentArray.find(item => item.type.toLowerCase() === type?.toLowerCase())?.values || undefined);
    },[type]);

    return(
        info && <SectionOfrece content={info} />
    );
}