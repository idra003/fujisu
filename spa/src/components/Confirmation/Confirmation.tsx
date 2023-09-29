import * as React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { IConfirmationProps } from "./IConfirmationProps";
import { IState, useState } from "../../react-hooks/useState";
import { TranslationsContext } from '../../translations/TranslationsContext';

/**
 * Renders out the contract confirmation box
 */
export function Confirmation(props:IConfirmationProps) {
    const _hasReadTheTerms:IState<boolean> = useState<boolean>(false);
    const _translations = React.useContext(TranslationsContext);

    return (
        <Box
            sx={{
                textAlign: 'right'
            }}
        >
            <Box>
                <Button
                    onClick={() => {
                        props.onConfirm?.();
                    }}
                    disabled={!_hasReadTheTerms.value}
                    variant='outlined'
                >
                    {_translations?.phrases.acceptBtnLabel}
                </Button>
            </Box>
             <FormControlLabel 
                control={
                    <Checkbox 
                        checked={_hasReadTheTerms.value}
                        onChange={(e, isChecked:boolean) => {
                            _hasReadTheTerms.set(isChecked);
                        }}
                    />
                } 
                label={_translations?.phrases.termsCheckboxLabel}
                labelPlacement='start'
            />  
            
        </Box>
    );
}