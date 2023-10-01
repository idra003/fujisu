import styles from './PageLayout.module.scss';
import { AppBar, Box, CircularProgress, Divider, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { TitleContext } from '../../contexts/PageTitleProvider';
import { IsLoadingContext } from '../../contexts/IsLoadingProvider';

/**
 * Renders out the main layout of the page
 */
export function PageLayout(props:React.PropsWithChildren<{}>) {
    const _isLoading = React.useContext(IsLoadingContext);
    const _title = React.useContext(TitleContext);

    return (
        <Box className={styles.container}>
            <Box className={styles.app}>
                {
                    _isLoading?.value ? (
                        <Loader />
                    ) : (
                        <>
                            <Header
                                title={_title?.value || ''}
                            />
                            <Paper
                                className={styles.contents}
                            > 
                                {props.children}
                                <Box>
                                    <Divider 
                                        sx={{
                                            margin: '0.5em 0'
                                        }}
                                    />
                                    <Typography 
                                        variant='body2'
                                        sx={{
                                            paddingRight: '0.5em',
                                            textAlign: 'right'
                                        }}
                                    >
                                        © Illimar Pihlamäe
                                    </Typography>
                                    
                                </Box>
                            </Paper>
                        </>
                    )
                }                                
            </Box>
        </Box>
    );
}