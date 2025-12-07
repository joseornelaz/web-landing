import { Typography } from "../../atoms/Typography/Typography";

type TituloPaginaProps = {
    children: React.ReactNode;
}

export const TituloPagina: React.FC<TituloPaginaProps> = ({children}) => {
    return(
        <Typography variant="h1" component="h1" color="primary" sxProps={{mb: '28px'}}>
            {children}
        </Typography>
    );
}