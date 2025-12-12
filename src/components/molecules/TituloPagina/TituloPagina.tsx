import { Typography } from "../../atoms/Typography/Typography";

type TituloPaginaProps = {
    children: React.ReactNode;
    fontSize?: "h1" | "h2" | "h3";
}

export const TituloPagina: React.FC<TituloPaginaProps> = ({children, fontSize = "h1"}) => {
    return(
        <Typography variant={fontSize} component={fontSize} color="primary" sxProps={{mb: '28px'}}>
            {children}
        </Typography>
    );
}