import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

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
        local = {
            firstname: "test",
        }
        localStorage.setItem(JSON.stringify(local))
        elem = screen.getByRole("heading")
        expect(elem).toBeInTheDocument()

    })


})
