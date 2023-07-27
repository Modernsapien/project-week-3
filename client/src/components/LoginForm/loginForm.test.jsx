import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import LoginForm from "./index";

describe("LoginForm component", () => {
    beforeEach(() => {
        render(<LoginForm />)
    })

    afterEach(() => {
        cleanup()
    })

    it("test", () => {
        

    })


})
