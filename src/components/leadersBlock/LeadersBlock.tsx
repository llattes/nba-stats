import React, { FC, Fragment } from 'react';
import Leader, { LeaderInterface } from '../leader/Leader';
import './LeadersBlock.css';

interface LeadersBlockInterface {
    title?: string;
    leaders?: LeaderInterface[];
}

const LeadersBlock: FC<LeadersBlockInterface> = ({ title, leaders = [] }) => {
    const leaderComponents = leaders.map((leader, index) => {
        return (
            <Fragment key={`leader-${leader.name.replace(/\s+/g, '')}-${index}`}>
                <Leader
                    name={leader.name}
                    teamName={leader.teamName}
                    image={leader.image}
                    ranking={index + 1}
                    statCategory={leader.statCategory}
                    statNumber={leader.statNumber}
                />
                <hr />
            </Fragment>
        );
    });
    return (
        <div data-testid="leaders-block">
            <div data-testid="leaders-block-title" className="title">{title}</div>
            <div data-testid="leaders-block-data">{leaderComponents}</div>
        </div>
    );
};

export default LeadersBlock;
