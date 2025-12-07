import { Typography } from "../../atoms/Typography/Typography";

type DescripcionPaginaProps = {
    children: React.ReactNode;
}

export const DescripcionPagina: React.FC<DescripcionPaginaProps> = ({children}) => {
    return(
        <Typography variant="body1" component="span" sxProps={{ mt: 3 }}>
            {children}                  
        </Typography>
    );
}