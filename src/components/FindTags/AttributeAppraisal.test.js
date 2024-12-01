// AttributeAppraisal.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AttributeAppraisal from './AttributeAppraisal';
import rootReducer from '../../reducers/AttributeAppraisal';
import {
    toggleAttribute,
    setIncludeAttribute,
    setAttributeAppraisal,
    setFinalAttributeAppraisal
} from '../../actions';

// Create a custom mock store
const initialState = {
    attributeAppraisal: {
        attackActive: false,
        defenseActive: false,
        hpActive: false,
        includeAttribute: false,
        selectedButtons: []
    }
};

const renderWithRedux = (
    component,
    { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store
    };
};

describe('AttributeAppraisal Component', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer, initialState);
        store.dispatch = jest.fn();
        renderWithRedux(<AttributeAppraisal />, { store });
    });

    test('renders component correctly with initial state', () => {
        expect(screen.getByText('Attributes')).toBeInTheDocument();
        expect(screen.getByText('Include')).toBeInTheDocument();
    });

    test('handleCheckboxChange updates the state and props correctly', () => {
        const includeCheckbox = screen.getByLabelText('Include');
        fireEvent.click(includeCheckbox);

        expect(store.dispatch).toHaveBeenCalledWith(setIncludeAttribute(expect.any(Boolean)));
    });

    test('handleAttributeAppraisal updates selected buttons correctly', () => {
        const attackCheckbox = screen.getByLabelText('Attack');
        fireEvent.click(attackCheckbox);

        store.dispatch = jest.fn();  // Resetting the dispatch mock

        // Activate includeAttribute to enable buttons
        fireEvent.click(screen.getByLabelText('Include'));

        const attackButtons = screen.getAllByRole('button');
        fireEvent.click(attackButtons[0]);  // Assuming it's the attack button with value '1'

        expect(store.dispatch).toHaveBeenCalledWith(setAttributeAppraisal(['attack1']));
    });

    test('setFinalAttributeAppraisal is called with correct string', () => {
        store.dispatch = jest.fn();  // Resetting the dispatch mock

        // Activate includeAttribute and attackActive
        fireEvent.click(screen.getByLabelText('Include'));
        fireEvent.click(screen.getByLabelText('Attack'));

        const attackButtons = screen.getAllByRole('button');
        fireEvent.click(attackButtons[0]);  // Assuming it's the attack button with value '1'

        // Simulate component update
        expect(store.dispatch).toHaveBeenCalledWith(setFinalAttributeAppraisal('attack1&'));
    });
});
