import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import { ApplicantProvider, IGetApplicantInfo } from '../../contexts/ApplicantProvider';
import { DUMMY_APPLICANT_EMPTY } from '../../services/DummyService';
import { ApplicantInfo } from './ApplicantInfo';
import { g_etEE } from '../../translations/et-EE';
import userEvent from '@testing-library/user-event';
import { IApplicantInfo } from '../../models/IApplicantInfo';
import { Gender } from '../../models/Gender';
import { Translations } from '../../translations/Translations';

afterEach(() => {
    cleanup();
});

function getStringRegEx(str:string):RegExp {
    return new RegExp(`${str}`);
}

test('ApplicantInfo Integration Test', () => {

    const getApplicantInfo:IGetApplicantInfo = {};

    render(
        <Translations>
            <ApplicantProvider 
                defaultValue={DUMMY_APPLICANT_EMPTY}
                getInfo={getApplicantInfo}
            >
                <ApplicantInfo />
            </ApplicantProvider>
        </Translations>
    );

    const firstName:HTMLInputElement = screen.getByLabelText(getStringRegEx(g_etEE.IPersonBase_firstName));
    const lastName:HTMLInputElement = screen.getByLabelText(getStringRegEx(g_etEE.IPersonBase_lastName));
    const code:HTMLInputElement = screen.getByLabelText(getStringRegEx(g_etEE.IPerson_nationalIdentityNumber));

    expect(firstName.value === DUMMY_APPLICANT_EMPTY.applicant.firstName || '');
    expect(lastName.value === DUMMY_APPLICANT_EMPTY.applicant.lastName || '');
    expect(code.value === DUMMY_APPLICANT_EMPTY.applicant.nationalIdentityNumber || '');

    act(() => {
        userEvent.type(code, '60809252291');        
    });
    expect(screen.getByText(g_etEE.notEstNationalCodeErrorMessage)).toBeInTheDocument();

    act(() => {
        userEvent.clear(code);
        userEvent.type(code, '60809252290');
    });
    expect(screen.queryByText(g_etEE.notEstNationalCodeErrorMessage) === null);

    const firstNameText:string = 'Test';
    const lastNameText:string = 'Woman';
    act(() => {
        userEvent.type(firstName, firstNameText);
        userEvent.type(lastName, lastNameText);
    })
    
    let applicant:IApplicantInfo|null = null;
    if(getApplicantInfo.getValue) {
        applicant = getApplicantInfo?.getValue() || null;
    }    
    
    const birthDayDate:Date = new Date(2108, 8, 25);
    expect(birthDayDate.toISOString() === applicant?.applicant.nationalIdentityNumber);
    expect(applicant?.applicant.gender === Gender.Female);

    expect(applicant?.applicant.firstName === firstNameText);
    expect(applicant?.applicant.lastName === lastNameText);
});