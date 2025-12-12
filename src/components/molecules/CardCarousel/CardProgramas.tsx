import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FlexColumn } from "../../../styles/styles";

type CardProgramasProps = {
    item: { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, text: string };
    cardStyles: any;
}

export const CardProgramas: React.FC<CardProgramasProps> = (props) => {
    const { Icon, text } = props.item;
    
    return(
        <Card sx={props.cardStyles}>
            <Box sx={{...FlexColumn, alignItems: 'center', justifyContent: 'center'}}>
                <Box
                    sx={{
                        fontSize: { xs: 32, md: 40 },
                        mb: 1,
                    }}
                >
                    <Icon />
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {text}
                </Typography>
            </Box>
            
        </Card>
    );
}