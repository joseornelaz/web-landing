import Box from "@mui/material/Box"
import { Typography } from "../../atoms/Typography/Typography"
import { FlexColumn } from "../../../styles/styles"
import CardCarousel from "../../molecules/CardCarousel/CardCarousel"
import { SectionLograras } from "../../molecules/SectionLograras/SectionLograras";

const testimonials = [
  {
    text: "Nunca había estudiado en línea, me gusta mucho el sistema y que la plataforma sea simple.",
    name: "José García",
    grade: "Licenciatura en Gerenciamiento",
  },
  {
    text: "Quiero desarrollarme como persona y tener mayor conocimiento, más seguridad para conversar sobre otros temas.",
    name: "María Aurora Canales",
    grade: "Bachillerato",
  },
  {
    text: "Quiero desarrollarme como persona y tener mayor conocimiento, más seguridad para conversar sobre otros temas.",
    name: "María Aurora Canales",
    grade: "Bachillerato",
  },
  {
    text: "Quiero desarrollarme como persona y tener mayor conocimiento, más seguridad para conversar sobre otros temas.",
    name: "María Aurora Canales",
    grade: "Bachillerato",
  },
];

export const PrepaLograras: React.FC = () => {
    return(
      <SectionLograras item={{ title: 'Con Prepa Coppel lograrás:', itemsCarousel: testimonials }} />
    )
}