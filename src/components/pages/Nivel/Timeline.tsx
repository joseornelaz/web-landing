import React from "react";
import type { NivelInterface } from "../../../types/NivelInterface";
import { NivelTypes } from "../../../types/NivelTypes";
import { SectionProcesoInscripcion } from "../../molecules/SectionProcesoInscripcion/SectionProcesoInscripcion";

const descripcion = 'Los expedientes electrónicos se recibirán del 1 al 25 de cada mes. De esta manera, podrás iniciar tus estudios en el periodo próximo.';

const infoArray = [
    {
        type: NivelTypes.PREPA,
        values: {
            descripcion: descripcion,
            info: [
                { text: 'Correo:', value: 'bachillerato@academiaglobal.mx'},
                { text: 'Whatsapp:', value: '(55) 3902 6308'},
            ]
        }        
    },
    {
        type: NivelTypes.LIC,
        values: {
            descripcion: descripcion,
            info: [
                { text: 'Correo:', value: 'licenciatura@academiaglobal.mx'},
                { text: 'Whatsapp:', value: '(55) 3902 6308'},
            ]
        }
    },
    {
        type: NivelTypes.ING,
        values: {
            descripcion: descripcion,
            info: [
                { text: 'Correo:', value: 'ingenieria@academiaglobal.mx'},
                { text: 'Whatsapp:', value: '(55) 3902 6308'},
            ]
        }
    },  
    {
        type: NivelTypes.MAESTRIA,
        values: {
            descripcion: descripcion,
            info: [
                { text: 'Correo:', value: 'maestria@academiaglobal.mx'},
                { text: 'Whatsapp:', value: '(55) 3902 6308'},
            ]
        }
    },
];

export const Timeline: React.FC<NivelInterface> = ({type}) => {
    const [info, setInfo] = React.useState<any>(undefined);

    const steps: any[] = [
        {
            number: '01.',
            title: 'Escanea',
            description: 'Tus documentos por ambos lados, a color y en formato PDF',
        },
        {
            number: '02.',
            title: 'Envía',
            description: 'Tus documentos por correo electrónico o por WhatsApp',
        },
        {
            number: '03.',
            title: 'Llena el formulario',
            description: 'Electrónico de admisión con todos tus datos',
        },
        {
            number: '04.',
            title: 'Recibe Confirmación',
            description: 'Una vez inscrito recibirás un correo eléctronico y un mensaje de WhatsApp.',
        },
        {
            number: '05.',
            title: 'Inducción',
            description: 'Recibe la plática de inducción para iniciar tus estudios. Un asesor de atención a alumnos te contactará del 01 al 10 del mes posterior a tu inscripción para brindarte tus credenciales.',
        },
        {
            number: '06.',
            title: 'Inicia Estudios',
            description: 'Con tus credenciales asignadas, entra en tu Campus Digital y accede a tus primeras dos materias.',
        },
    ];

    React.useEffect(() => {
        setInfo(infoArray.find(item => item.type.toLowerCase() === type?.toLowerCase())?.values || undefined);
    },[type]);

    return(
        info && <SectionProcesoInscripcion 
            item={info}            
            steps={steps}
        />
    );
}