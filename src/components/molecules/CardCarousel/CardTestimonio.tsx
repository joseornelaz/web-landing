import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Comillas from "../../../assets/icons/comillas.svg?react";
import { useTheme } from "@mui/material";
import { FlexColumn } from "../../../styles/styles";

type CardTestimonioProps = {
    item: { text: string, name: string, grade: string };
    cardStyles: any;
}

export const CardTestimonio: React.FC<CardTestimonioProps> = ({ item, cardStyles }) => {
    const theme = useTheme();

    return(
        <Card sx={cardStyles}>
            <Box sx={{...FlexColumn, alignItems: 'center', justifyContent: 'center'}}>
                <Box
                    sx={{
                        color: theme.palette.secondary.main,
                        fontSize: { xs: 32, md: 40 },
                        mb: 1,
                    }}
                >
                    <Comillas />
                </Box>

                <Typography variant="body1" sx={{ mb: 3 }}>
                    {item.text}
                </Typography>

                <Typography variant="h4" sx={{ mb: 0.5 }}>
                    {item.name}
                </Typography>

                <Typography variant="body2" color="primary">
                    {item.grade}
                </Typography>
            </Box>
            
        </Card>
    );
}