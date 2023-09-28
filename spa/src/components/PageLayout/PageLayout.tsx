import styles from './PageLayout.module.scss';

import { AppBar, Box, CircularProgress, Paper } from '@mui/material';
import * as React from 'react';
import { Loader } from '../Loader/Loader';
import { IState, useState } from '../../react-hooks/useState';

export const IsLoadingContext = React.createContext<IState<boolean>|null>(null);

/**
 * Renders out the main layout of the page
 */
export function PageLayout(props:React.PropsWithChildren<{}>) {
    const _isLoading:IState<boolean> = useState<boolean>(false);

    return (
        <IsLoadingContext.Provider value={_isLoading}>
            <Box className={styles.container}>
                <Box className={styles.app}>
                    {
                        _isLoading.value ? (
                            <Loader />
                        ) : (
                            <>
                                <AppBar position='sticky'>
                                    <Box
                                        className={styles.header}
                                    >
                                        JOB OFFER
                                    </Box>                    
                                </AppBar>
                                <Paper
                                    className={styles.contents}
                                > 
                                    {props.children}
                                    <Box>
                                        Footer
                                    </Box>
                                </Paper>
                            </>
                        )
                    }                                
                </Box>
            </Box>
        </IsLoadingContext.Provider>
    );
}