import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TodoListItemForm from "./index";

describe("TodoListItemForm component", () => {
    beforeEach(() => {
        render(<TodoListItemForm />)
    })

    afterEach(() => {
        cleanup()
    })

    it("test", () => {
        const elem = screen.getByLabelText("Task Title")
        expect(elem).toBeInTheDocument()

    })


})
