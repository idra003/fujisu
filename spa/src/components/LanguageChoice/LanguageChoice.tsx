import * as React from 'react';
import styles from './LanguageChoice.module.scss';

import { Box, Button, Tooltip } from '@mui/material';
import { CultureContext, EE_CULTURE, EN_CULTURE, g_setLanguageParam } from '../../helpers/cultureHelper';
import { IState } from '../../react-hooks/useState';

/**
 * Renders out the language choice
 */
export function LanguageChoice(props:{}) {
    const _culture:IState<string>|null = React.useContext(CultureContext);
    
    const _isENActive:boolean = _culture?.value === EN_CULTURE;
    const _isEEActive:boolean = _culture?.value === EE_CULTURE;

    const _enButton:React.ReactNode = (
        <Button  
            onClick={() => {                
                _culture?.set(EN_CULTURE);
            }}
            className={styles.iconButton}
            sx={{
                opacity:_isENActive ? 0.3 : 1
            }}
            disabled={_isENActive}
        >
            <Box 
                className={styles.languageIconContainer}
                
            >
                <Box className={`${styles.languageIcon} ${styles.languageIconGB}`}>
                    {/* image via CSS */}
                </Box>
            </Box>
        </Button>
    );

    const _eeButton:React.ReactNode = (
        <Button
            onClick={() => {
                _culture?.set(EE_CULTURE);
            }}
            className={styles.iconButton}
            sx={{
                opacity: _isEEActive ? 0.3 : 1
            }}
            disabled={_isEEActive}
        >
            <Box 
                className={styles.languageIconContainer}                        
            >
                <Box className={`${styles.languageIcon} ${styles.languageIconET}`}>
                    {/* image via CSS */}
                </Box>
            </Box>
        </Button>
    );

    return (
        <Box
            sx={{
                textAlign: 'right',
                paddingRight: '1em',
                alignSelf: 'center'
            }}
        >
            {
                !_isENActive ? (
                    <Tooltip title='English'>
                        { _enButton }
                    </Tooltip>
                ): _enButton
            }
            {
                !_isEEActive ? (
                    <Tooltip title='Eesti keel'>
                        { _eeButton }
                    </Tooltip>
                ) : _eeButton
            }
        </Box>
    );
}