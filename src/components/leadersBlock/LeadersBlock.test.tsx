import { render } from '@testing-library/react';
import React from 'react';
import LeadersBlock from './LeadersBlock';

describe('<LeadersBlock />', () => {
    it('should render a block', () => {
        const { getByTestId } = render(<LeadersBlock />);
        expect(getByTestId('leaders-block')).toBeTruthy();
    });

    it('should have a title corresponding to the stat block', () => {
        const { getByTestId } = render(<LeadersBlock title={'Scoring'} />);
        expect(getByTestId('leaders-block-title').textContent).toBe('Scoring');
    });

    it('should render a block with specifically 5 leaders', () => {
        const leaders = [
            {
                image: 'string',
                name: 'string-1',
                statCategory: 'string',
                statNumber: 10,
                teamName: 'string'
            },
            {
                image: 'string',
                name: 'string-2',
                statCategory: 'string',
                statNumber: 9,
                teamName: 'string'
            },
            {
                image: 'string',
                name: 'string-3',
                statCategory: 'string',
                statNumber: 8,
                teamName: 'string'
            },
            {
                image: 'string',
                name: 'string-4',
                statCategory: 'string',
                statNumber: 7,
                teamName: 'string'
            },
            {
                image: 'string',
                name: 'string-5',
                statCategory: 'string',
                statNumber: 6,
                teamName: 'string'
            }
        ];
        const { getAllByTestId } = render(<LeadersBlock title={'Scoring'} leaders={leaders} />);
        const allLeadersByTestId = getAllByTestId('leader');
        expect(allLeadersByTestId).toHaveLength(5);
        expect(allLeadersByTestId[4].innerHTML).toContain('string-5');
    });
});
