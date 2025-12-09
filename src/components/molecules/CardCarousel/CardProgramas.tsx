import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Prepa02 from "../../../assets/icons/prepa02.svg?react";
import { FlexColumn } from "../../../styles/styles";

type CardProgramasProps = {
    item: { text: string, name: string, grade: string };
    cardStyles: any;
}

export const CardProgramas: React.FC<CardProgramasProps> = ({ item, cardStyles }) => {
    return(
        <Card sx={cardStyles}>
            <Box sx={{...FlexColumn, alignItems: 'center', justifyContent: 'center'}}>
                <Box
                    sx={{
                        fontSize: { xs: 32, md: 40 },
                        mb: 1,
                    }}
                >
                    <Prepa02 />
                </Box>

                <Typography variant="body1" sx={{ mb: 3 }}>
                    {item.text}
                </Typography>
            </Box>
            
        </Card>
    );
}