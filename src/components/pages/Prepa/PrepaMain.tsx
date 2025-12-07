import Prepa from '../../../assets/prepa/prepa1.png';
import LogoPrepa from '../../../assets/prepa/logo-prepa.png';
import { SectionMain } from "../../molecules/SectionMain/SectionMain";

export const PrepaMain: React.FC = () => {
    const item = {
        logoPrograma: LogoPrepa,
        imagenPrograma: Prepa,
        descripcion: 'Bachillerato orientado a la formación para el trabajo, donde el/la estudiante desarrollará competencias específicas a través de la resolución de problemas reales desde una perspectiva crítica e integral, potenciando sus habilidades y aprendizajes para desempeñarse con éxito en su vida profesional y personal.',
        duracion: [
            {text: 'Duración del programa:', value: '2 años.'},
            {text: 'Carga de materias:', value: '2 máximo por mes.'},
            {text: 'RVOE ante la SEP:', value: 'BACH. 002-18/25PBH0189T.'},
        ]
    };

    return(
        <SectionMain item={item} />
    )
}