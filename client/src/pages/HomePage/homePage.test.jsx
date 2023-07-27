import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Home from "./index";

describe("SignupForm component", () => {
    beforeEach(() => {
        render(<Home />)
    })

    afterEach(() => {
        cleanup()
    })

    it("test", () => {
        

    })


})
