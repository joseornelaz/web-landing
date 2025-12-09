import type { SvgIconProps } from "@mui/material/SvgIcon";
import { BoxContainer } from "../../atoms/BoxContainer/BoxContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type MetricCardProps = {
    icon?: React.ComponentType<SvgIconProps>;
    title: string;
    value: string | number;
    subtitle?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {   

    return (
        <BoxContainer
            backgroundColor="light"
            sxProps={{
                p: 3,
                minHeight: '190px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '280px',
                minWidth: '280px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '10px',
                opacity: 1

            }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyItems: 'center'}}>
                <Typography variant="h1" color="primary">{value}</Typography>
                <Typography variant="body2" sx={{textAlign: 'center'}}>{title}</Typography>
            </Box>
        </BoxContainer>
    );
}