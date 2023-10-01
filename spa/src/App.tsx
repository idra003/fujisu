import React from 'react';
import { PageLayout } from './components/PageLayout/PageLayout';
import { Pages } from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeContext, g_defaultAppTheme } from './helpers/muiHelper';
import { IState, useState } from './react-hooks/useState';
import { Theme, ThemeProvider } from '@mui/material';
import { Translations } from './translations/Translations';
import { IRefState, useRefState } from './react-hooks/useRefState';
import { IJobOffer } from './models/IJobOffer';
import { IApplicantInfo } from './models/IApplicantInfo';
import { IsLoadingProvider } from './contexts/IsLoadingProvider';
import { PageTitleProvider } from './contexts/PageTitleProvider';
import { JobOfferProvider } from './contexts/JobOfferProvider';
import { ApplicantProvider } from './contexts/ApplicantProvider';

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
				<IsLoadingProvider>
					<PageTitleProvider>
						<JobOfferProvider>
							<ApplicantProvider>
								<Translations>
									<BrowserRouter> 
										<PageLayout>
											<Pages />
										</PageLayout>
									</BrowserRouter>				
								</Translations>
							</ApplicantProvider>
						</JobOfferProvider>
					</PageTitleProvider>
				</IsLoadingProvider>
			</ThemeProvider>
		</MuiThemeContext.Provider>
	);
}
