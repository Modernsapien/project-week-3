import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Dashboard from "./index";

describe("Dashboard page", () => {
    beforeEach(() => {
        render(<Dashboard />)
    })

    afterEach(() => {
        cleanup()
    })

    it("checks to see if everything is loading", () => {
        expect(screen.getByText("Welcome to StudyWise."))

    })


})
