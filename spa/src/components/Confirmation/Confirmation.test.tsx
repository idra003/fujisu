import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import { Confirmation } from './Confirmation';
import { g_etEE } from '../../translations/et-EE';
import { Translations } from '../../translations/Translations';
import userEvent from '@testing-library/user-event';


afterEach(() => {
    cleanup();
});

test('Confirmation Integration Test', () => {
    let _hasClicked:boolean = false;

    render(
        <Translations>
            <Confirmation
                onConfirm={() => {
                    _hasClicked = true;
                }}
            />
        </Translations>
    );

    const checkbox:HTMLInputElement = screen.getByLabelText(g_etEE.termsCheckboxLabel);
    const button:HTMLButtonElement = screen.getByRole('button');

    expect(!checkbox.checked);
    expect(button.innerText === g_etEE.acceptBtnLabel);
    expect(button.disabled === true);
    
    act(() => {
        userEvent.click(checkbox);        
    })
    expect(button.disabled === false);
    
    act(() => {
        userEvent.click(button);
    })
    expect((_hasClicked as any) === true);
});

