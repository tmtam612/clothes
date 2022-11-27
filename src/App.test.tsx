import React from 'react';
import { render, screen, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { SignUp } from './pages/authentication/signup/sign-up.component';
describe("sign up", () => {
    test("reset", () => {
        render(<SignUp />);
        const button = screen.getByLabelText("reset");
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        ["Filled Name", "Filled Email", "Filled Password", "Confirm Password"].forEach(label => {
            const element = screen.getByLabelText(label);
            expect(element).toHaveValue("");
        })
    });
});