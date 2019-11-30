import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('<Header />', () => {
    it('should render with text content', () => {
        const { getByTestId } = render(<Header content={'Header through props'} />);
        expect(getByTestId('heading').textContent).toBe('Header through props');
    });
});
