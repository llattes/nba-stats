import { render } from '@testing-library/react';
import React from 'react';
import Leader from './Leader';

describe('<Leader />', () => {
    it('should have a ranking', () => {
        const { getByTestId } = render(<Leader name={'Luka Doncic'} ranking={1} />);
        expect(getByTestId('leader-ranking').textContent).toBe('1');
    });

    it('should have a name', () => {
        const { getByTestId } = render(<Leader name={'Luka Doncic'} />);
        expect(getByTestId('leader-data-name').textContent).toBe('Luka Doncic');
    });

    it('should have a team name', () => {
        const { getByTestId } = render(<Leader name={'Luka Doncic'} teamName={'Dallas Mavericks'} />);
        expect(getByTestId('leader-data-teamName').textContent).toBe('Dallas Mavericks');
    });

    it('should have a number reflecting the stat', () => {
        const { getByTestId } = render(<Leader name={'Luka Doncic'} statNumber={30.8123} />);
        expect(getByTestId('leader-stat-number').textContent).toBe('30.8');
    });

    it('should have the stat name', () => {
        const { getByTestId } = render(<Leader name={'Luka Doncic'} statCategory={'pts'} />);
        expect(getByTestId('leader-stat-category').textContent).toBe('pts');
    });

    it('should have the leader image', () => {
        const { getByTestId } = render(<Leader name={'Luka Doncic'} image={'http://www.img.src/luka.jpg'} />);
        expect(getByTestId('leader-image').innerHTML).toContain('http://www.img.src/luka.jpg');
    });
});
