import {storiesOf} from "@storybook/react";
import {text} from "@storybook/addon-knobs/react";
import React from "react";
import LeadersBlock from "./LeadersBlock";

storiesOf("Components|LeadersBlock", module)
    .add("Default", () => {
        return (
            <LeadersBlock
                title={text("Leaders block title", "Scoring")}
            />
        );
    })
    .add("With leaders", () => {
        const leaders = [
            {
                image: "https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10112019/4563.png",
                name: "James Harden",
                statCategory: "pts",
                statNumber: 37.7,
                teamName: "Houston Rockets",
            },
            {
                image: "https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10102019/5185.png",
                name: "Giannis Antetokounmpo",
                statCategory: "pts",
                statNumber: 31.2,
                teamName: "Milwaukee Bucks",
            },
            {
                image: "https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10142019/6014.png",
                name: "Luka Doncic",
                statCategory: "pts",
                statNumber: 30.8,
                teamName: "Dallas Mavericks",
            },
            {
                image: "https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10142019/5009.png",
                name: "Bradley Beal",
                statCategory: "pts",
                statNumber: 28.3,
                teamName: "Washington Wizards",
            },
            {
                image: "https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10142019/6016.png",
                name: "Trae Young",
                statCategory: "pts",
                statNumber: 27.9,
                teamName: "Atlanta Hawks",
            },
        ];
        return (
            <LeadersBlock
                title={text("Leaders block title", "Scoring")}
                leaders={leaders}
            />
        );
    });
