import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Signup from "./index";

describe("Signup page", () => {
    beforeEach(() => {
        render(<Signup />)
    })

    afterEach(() => {
        cleanup()
    })

    it("checks to see if everything is loading", () => {
        elem = screen.getByRole("heading")
        expect(elem).toBeInTheDocument()

    })


})
