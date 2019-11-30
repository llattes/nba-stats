import React, { FC } from 'react';
import { roundWithPrecision } from '../../utils/number';
import './Leader.css';

export interface LeaderInterface {
    ranking?: number;
    name: string;
    teamName?: string;
    statNumber?: number;
    statCategory?: string;
    image?: string;
}

const Leader: FC<LeaderInterface> = ({ ranking, name, teamName, statNumber = 0, statCategory, image }) => {
    return (
        <div data-testid="leader" className="row">
            <div data-testid="leader-ranking" className="column main-text">{ranking}</div>
            <div data-testid="leader-image" className="column image-crop">
                <img src={image} alt={name} className="thumbnail"/>
            </div>
            <div data-testid="leader-data" className="column fixed-size">
                <span data-testid="leader-data-name" className="main-text">{name}</span>
                <span data-testid="leader-data-teamName" className="secondary-text uppercase">{teamName}</span>
            </div>
            <div data-testid="leader-stat" className="column">
                <span data-testid="leader-stat-number" className="main-text">{roundWithPrecision(statNumber, 1)}</span>
                <span data-testid="leader-stat-category" className="secondary-text strong">{statCategory}</span>
            </div>
        </div>
    );
};

export default Leader;
