import { SectionProcesoInscripcion } from "../../molecules/SectionProcesoInscripcion/SectionProcesoInscripcion";

export const PrepaTimeline: React.FC = () => {
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

    const infoArray = [
        {text: 'Correo:', value: 'bachillerato@academiaglobal.mx'},
        {text: 'Whatsapp:', value: '(55) 3902 6308'},
    ];


    return(
        <SectionProcesoInscripcion 
            item={
                {
                    descripcion: 'Los expedientes electrónicos se recibirán del 1 al 25 de cada mes. De esta manera, podrás iniciar tus estudios en el periodo próximo.',
                    info: infoArray,
                    steps: steps
                }
            } 
        />
    );
}