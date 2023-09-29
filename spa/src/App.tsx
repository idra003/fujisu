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

/**
 * If TRUE the page will be loading
 */
export const IsLoadingContext = React.createContext<IRefState<boolean>|null>(null);
/**
 * Holds the title of the page
 */
export const TitleContext = React.createContext<IState<string>|null>(null);
/**
 * Holds the job offer loaded into the app
 */
export const JobOfferContext = React.createContext<IRefState<IJobOffer|null>|null>(null);
/**
 * Holds the applicant info loaded into the app
 */
export const ApplicantContext = React.createContext<IState<IApplicantInfo|null>|null>(null);

/**
 * Sets up the app and renders out the root component
 */
export default function App() {
	/**
     * Holds the theme of the app that is given to the Mui Theme Context so it can be updated
     */
    const _appTheme:IState<Theme>|null = useState(g_defaultAppTheme);
	
	const _isLoading:IRefState<boolean> = useRefState<boolean>(false);
    const _title:IState<string> = useState<string>('');
    const _offer:IRefState<IJobOffer|null> = useRefState<IJobOffer|null>(null);
    const _applicant:IState<IApplicantInfo|null> = useState<IApplicantInfo|null>(null);
	
	return (
		<MuiThemeContext.Provider value={_appTheme}>
			<ThemeProvider theme={_appTheme.value}>
				<IsLoadingContext.Provider value={_isLoading}>
					<TitleContext.Provider value={_title}>
						<JobOfferContext.Provider value={_offer}>
							<ApplicantContext.Provider value={_applicant}>
								<Translations>
									<BrowserRouter> 
										<PageLayout>
											<Pages />
										</PageLayout>
									</BrowserRouter>				
								</Translations>
							</ApplicantContext.Provider>
						</JobOfferContext.Provider>
					</TitleContext.Provider>
				</IsLoadingContext.Provider>
			</ThemeProvider>
		</MuiThemeContext.Provider>
	);
}
