import Prepa2 from '../../../assets/prepa/prepa2.png';
import { SectionFomentar } from "../../molecules/SectionFomentar/SectionFomentar";

export const PrepaFomentar: React.FC = () => {
    const puntos = ['Trabajo en equipo y colaborativo.', 'Aprendizaje autónomo.', 'Comunicación efectiva.', 'Pensamiento crítico y reflexivo.', 'Participación responsable en la sociedad.', 'Organización y gestión del tiempo.'];

    return(
        <SectionFomentar
            title="Prepa Coppel fomentará en ti:"
            image={Prepa2}
            puntos={puntos}
        />
    );
}