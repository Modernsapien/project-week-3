import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Navigation from "./index";

describe("Navbar component", () => {
    beforeEach(() => {
        render(<Router><Navigation /></Router>)
    })

    afterEach(() => {
        cleanup()
    })

    it("should display all the navbar elements", () => {
        const homeLink = screen.getByText('Home')
        const calendarLink = screen.getByText('Calendar')
        const todoLink = screen.getByText('Todo')
        const pomodoroLink = screen.getByText('Pomodoro')
        const logoutLink = screen.getByText('Logout')

        expect(homeLink).toBeInTheDocument()
        expect(calendarLink).toBeInTheDocument()
        expect(todoLink).toBeInTheDocument()
        expect(pomodoroLink).toBeInTheDocument()
        expect(logoutLink).toBeInTheDocument()
    })





})
