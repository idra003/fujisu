import React from 'react';
import { PageLayout } from './components/PageLayout/PageLayout';
import { Pages } from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeContext, g_defaultAppTheme } from './helpers/muiHelper';
import { IState, useState } from './react-hooks/useState';
import { Theme, ThemeProvider } from '@mui/material';

/**
 * Sets up the app and renders out the root component
 */
export default function App() {
	/**
     * Holds the theme of the app that is given to the Mui Theme Context so it can be updated
     */
    const _appTheme:IState<Theme>|null = useState(g_defaultAppTheme);
	
	return (
		<MuiThemeContext.Provider value={_appTheme}>
			<ThemeProvider theme={_appTheme.value}>
				<BrowserRouter> 
					<PageLayout>
						<Pages />
					</PageLayout>
				</BrowserRouter>				
			</ThemeProvider>
		</MuiThemeContext.Provider>
	);
}
