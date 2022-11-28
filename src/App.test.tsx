import React from 'react';
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { SignUp } from './pages/authentication/signup/sign-up.component';
import { Provider } from 'react-redux';
import { store } from './store/store';
describe("sign up", () => {
    beforeEach(() => {
        cleanup();
        
    })
    test("reset", () => {
        render(
            <Provider store={store}>
                <SignUp />
            </Provider>
        );
        const button = screen.getByLabelText("reset");
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        ["Filled Name", "Filled Email", "Filled Password", "Confirm Password"].forEach(label => {
            const element = screen.getByLabelText(label);
            expect(element).toHaveValue("");
        })
    });
    test("sign up", () => {
        render(
            <Provider store={store}>
                <SignUp />
            </Provider>
        );
        const button = screen.getByLabelText("signup");
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        ["Filled Name", "Filled Email", "Filled Password", "Confirm Password"].forEach(label => {
            const element = screen.getByLabelText(label);
            expect(element).not.toBe("")
        })
    });
});