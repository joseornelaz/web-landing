import Box from "@mui/material/Box";
import { FlexColumn } from "../../../styles/styles";
import { Typography } from "../../atoms/Typography/Typography";
import CardCarousel from "../CardCarousel/CardCarousel";

type SectionLograrasProps = {
    item: { title: string, itemsCarousel: { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, text: string }[]};
    carouselType?: 'prepa' | 'testimonios';
};

export const SectionLograras: React.FC<SectionLograrasProps> = ({item, carouselType = 'prepa'}) => {
    return(
        <Box
            sx={{
                ...FlexColumn,                
                alignItems: 'center',
                justifyItems: 'center',
                gap: '58px',
                width: '100%'
            }}
        >
            <Typography component="h3" variant="h3" sxProps={{ textAlign: 'center'}}>
                {item.title}
            </Typography>
            <CardCarousel items={item.itemsCarousel} type={carouselType} />
        </Box>
    );
}