import { Box, CircularProgress } from "@mui/material";

/**
 * Renders out the page loader
 */
export function Loader(props:{}) {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                padding: '3em'
            }}
        >
            <CircularProgress 
                size={'40%'}
            />
        </Box>
    );
}