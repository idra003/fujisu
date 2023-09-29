
import * as React from 'react';
import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import { IHeaderProps } from "./IHeaderProps";
import { LanguageChoice } from '../LanguageChoice/LanguageChoice';

/**
 * Renders out the header of the app
 */
export function Header(props:IHeaderProps) {

    React.useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
        <AppBar position='sticky'>
            <Box
                sx={{
                    padding: '0.5em'
                }}
            >
                <Stack
                    direction={'row'}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            flexGrow: 1,
                            alignSelf: 'center'
                        }}
                    >
                        { props.title }
                    </Typography>
                    <LanguageChoice />
                </Stack>
            </Box>
            
        </AppBar>
    );
}