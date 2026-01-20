import type { NivelInterface } from "../../../types/NivelInterface";
import { SectionFichaTecnica } from "../../molecules/SectionFichaTecnica/SectionFichaTecnica";

import fichaPrepa from '../../../assets/fichas_tecnicas/ficha_prepa.pdf';
import fichaLic from '../../../assets/fichas_tecnicas/ficha_licenciatura.pdf';
import fichaIng from '../../../assets/fichas_tecnicas/ficha_ingenieria.pdf';
import fichaMaestria from '../../../assets/fichas_tecnicas/ficha_maestria.pdf';

import planPrepa from '../../../assets/plan_estudios/plan_prepa.pdf';
import planLic from '../../../assets/plan_estudios/plan_lic.pdf';
import planIng from '../../../assets/plan_estudios/plan_ing.pdf';
import planMaestria from '../../../assets/plan_estudios/plan_maestria.pdf';

import { useMemo } from "react";
import { NivelTypes } from "../../../types/NivelTypes";

export const FichaTecnica: React.FC<NivelInterface> = ({type}) => {
    const fichaTecnica = useMemo(() => {
        switch (type) {
            case NivelTypes.PREPA: return fichaPrepa;
            case NivelTypes.LIC: return fichaLic;
            case NivelTypes.ING: return fichaIng;
            case NivelTypes.MAESTRIA: return fichaMaestria;
            default: return null;
        }
    }, [type]);

    const planEstudio = useMemo(() => {
        switch (type) {
            case NivelTypes.PREPA: return planPrepa;
            case NivelTypes.LIC: return planLic;
            case NivelTypes.ING: return planIng;
            case NivelTypes.MAESTRIA: return planMaestria;
            default: return null;
        }
    }, [type]);


    const handleVerMasFT = () => {
        if (fichaTecnica) {
            window.open(fichaTecnica, '_blank', 'noopener,noreferrer');
        }
    };

    const handleVerMasPE = () => {
        if (planEstudio) {
            window.open(planEstudio, '_blank', 'noopener,noreferrer');
        }
    };

    return <SectionFichaTecnica 
        handleVerMasFT={handleVerMasFT}        
        handleDescargarFT={handleVerMasFT}
        handleVerMasPE={handleVerMasPE}
        handleDescargarPE={handleVerMasPE}
    />
}
