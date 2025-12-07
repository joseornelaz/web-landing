import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

type SectionAzulProps = {
    children: React.ReactNode;
    height?: number;
}

export const SectionAzul: React.FC<SectionAzulProps> = ({children, height = 400}) => {
    const theme = useTheme();

    return(
        <Card
            sx={{
                width: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #0F172A 100%)`,
                    alignItems: "center",
                    justifyContent: 'center',
                    p: { xs: 3, md: 6 },
                    minHeight: height,
                    // position: "relative",
                    // pl: { xs: 3, md: "48%" },
                }}
            >
                {children}
            </Box>
        </Card>
    );
}