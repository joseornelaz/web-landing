import { NivelTypes } from "./NivelTypes";

export const PROGRAMAS_ACADEMICOS = {
    PREPA: 'Bachillerato (Prepa Coppel)',
    LICENCIATURA: 'Licenciatura en Gerenciamiento',
    INGENIERIA: 'Ingeniería en Desarrollo de Software',
    MAESTRIA: 'Maestría en Dirección de Negocios',
    DIPLOMADO: 'Diplomado Inteligencia Artificial, Liderazgo y Cultura Digital'
}

export const PROGRAMAS_ACADEMICOS_SELECT = [
    { id_programa: 2, label: PROGRAMAS_ACADEMICOS.PREPA },
    { id_programa: 62, label: PROGRAMAS_ACADEMICOS.LICENCIATURA },
    { id_programa: 18, label: PROGRAMAS_ACADEMICOS.INGENIERIA },
    { id_programa: 50, label: PROGRAMAS_ACADEMICOS.MAESTRIA },
    { id_programa: 100, label: PROGRAMAS_ACADEMICOS.DIPLOMADO },
];

export const MENU_ACCESOS = [
    { label: 'Prepa Coppel', path: `${import.meta.env.VITE_EXTERNAL_LINK_ACADEMIA_GLOBAL}/bachilleratos/ucc/login/` },
    { label: 'Licenciatura en<br>Gerenciamiento', path: `${import.meta.env.VITE_EXTERNAL_LINK_ACADEMIA_GLOBAL}/licenciaturas/ucc/login/` },
    { label: 'Ingeniería en<br>Desarrollo de Software', path: `${import.meta.env.VITE_EXTERNAL_LINK_CAMPUS_UMI}/ingenierias/coppel/software/login/` },
    { label: 'Maestría en<br>Dirección de Negocios', path: `${import.meta.env.VITE_EXTERNAL_LINK_CAMPUS_UMI}/maestrias/coppel/negocios/login/` },
]

export const MENU_HEADER = [
    { 
        id: 'lic', 
        etiqueta: 'Licenciaturas', 
        opciones: [
            { sub: 'En Gerenciamiento', path: `/nivel/${NivelTypes.LIC}` }
        ] 
    },
    { 
        id: 'ing', 
        etiqueta: 'Ingenierías', 
        opciones: [
            { sub: 'En Desarrollo de Software', path: `/nivel/${NivelTypes.ING}` }
        ] 
    },
    { 
        id: 'pos', 
        etiqueta: 'Posgrados', 
        opciones: [
            { sub: 'Maestría<br>en Dirección de Negocios', path: `/nivel/${NivelTypes.MAESTRIA}` }
        ] 
    },
    { 
        id: 'dip', 
        etiqueta: 'Diplomados', 
        opciones: [
            { sub: 'Inteligencia Artificial,<br> Liderazgo y Cultura Digital', path: `/${NivelTypes.DIPLOMADO}` }
        ] 
    },
];