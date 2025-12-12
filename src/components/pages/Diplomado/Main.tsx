import React from 'react';
import Prepa from '../../../assets/diplomado/diplomado.png';

import { SectionMain } from "../../molecules/SectionMain/SectionMain";

import { NivelTypes } from '../../../types/NivelTypes';

const NivelArray = 
    {
        nivel: NivelTypes.DIPLOMADO,
        values: {
            logoPrograma: 'Inteligencia Artificial, Liderazgo y Cultura Digital',
            imagenPrograma: Prepa,
            descripcion: 'Desarrollar en las y los participantes la capacidad de comprender, integrar y aplicar tecnologías de inteligencia artificial en su entorno laboral, fortaleciendo su cultura digital, su adaptación al cambio y su liderazgo en procesos de transformación tecnológica orientados al dato y la innovación.',
            duracion: [
                {text: 'Duración del programa:', value: '50 horas.'},
                {text: 'Meses de apertura', value: 'Febrero, junio y Octubre.'},
            ]
        }
    };

export const Main: React.FC = () => {
    return(
        <SectionMain item={NivelArray.values} hasLogoText={true} />
    )
}