import { ButtonPropsColorOverrides, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { amber, blue, blueGrey, deepOrange, green, indigo, lime, red, teal, yellow } from '@mui/material/colors';
import { createTheme, Theme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { DistributiveOmit, OverridableStringUnion } from '@mui/types';
import { enUS, etEE } from '@mui/material/locale';
import * as React from 'react';
import { IState } from '../react-hooks/useState';

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        informationGroup: true,
    }
}

/**
 * The MUI Theme options for AlphaPro EE
 */
export const g_appThemeOptions:ThemeOptions = {
    palette: {
        primary: blueGrey,
        secondary: blue,
        divider: '#ccc'
    },
    typography: {
        h1: {
            fontSize: '20px'
        }
    },
    components: {        
        MuiCard: {
            variants: [{
                props: { variant: 'informationGroup' },
                style: {
                    padding: '1em',
                    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
                    marginBottom: '1em'
                }
            }]
        }
    } 
};
/**
 * The theme for the application
 */
export const g_defaultAppTheme:Theme = createTheme(g_appThemeOptions, etEE);
/**
 * The english theme for the MUI
 */
export const g_enGBAppTheme:Theme = createTheme(g_appThemeOptions, enUS);

/**
 * The type used for icons in MUI
 */
export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
/**
 * The type used for the MUI button colors
 */
export type ButtonColor = OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>;
/**
 * Creates the context for the Mui Theme. 
 * NOTE! - Made so you can use the useState to build it
 */
export const MuiThemeContext = React.createContext<IState<Theme>|null>(null);