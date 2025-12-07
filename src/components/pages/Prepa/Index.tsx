import Box from "@mui/material/Box";
import { PrepaMain } from "./PrepaMain";
import { PrepaFomentar } from "./PrepaFomentar";
import { PrepaOfrece } from "./PrepaOfrece";
import { PrepaFichaTecnica } from "./PrepaFichaTecnica";
import { PrepaTimeline } from "./PrepaTimeline";
import { PrepaLograras } from "./PrepaLograras";
import { SectionAlgunaDuda } from "../../molecules/SectionAlgunaDuda/SectionAlgunaDuda";
import { SectionRequisitos } from "../../molecules/SectionRequisitos/SectionRequisitos";

const Prepa: React.FC = () => {
    return(
        <Box
            sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
            <Box sx={{height: { xs: 'auto', md: 'calc(100vh - 200px)'}, mt: { xs: 0, md: '30px' }}}>
                <PrepaMain />
            </Box>
            <PrepaLograras />
            <PrepaFomentar />
            <PrepaOfrece />
            <Box sx={{
                pt: {xs: '24px', md: '80px'},
                pb: {xs: '24px', md: '40px'}
            }}>
                <PrepaFichaTecnica />
            </Box>
            <PrepaTimeline />
            <SectionAlgunaDuda />
            <Box sx={{pt: {xs: '24px', md: '60px'}}}>
                <SectionRequisitos />
            </Box>
        </Box>
    );
}

export default Prepa;