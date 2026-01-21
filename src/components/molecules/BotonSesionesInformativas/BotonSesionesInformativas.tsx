import Button from "@mui/material/Button"

export const BotonSesionesInformativas: React.FC = () => {

    const handleGoToExternalLink = () => window.open(`${import.meta.env.VITE_EXTERNAL_LINK_UCC}/sesiones-virtuales-coppel.php`, '_blank', 'noopener,noreferrer');    
    
    return(
        <Button variant="outlined" onClick={handleGoToExternalLink}>Sesiones Informativas</Button>
    )
}