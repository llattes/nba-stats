import { storiesOf } from "@storybook/react";
import { text, number } from "@storybook/addon-knobs/react";
import React from "react";
import Leader from "./Leader";

storiesOf("Components|Leader", module).add("Default", () => {
    return (
        <Leader
            ranking={(number("Player ranking", 1))}
            name={text("Player name", "Luka Doncic")}
            teamName={text("Team name", "Dallas Mavericks")}
            statNumber={number("Stat number", 30.8123)}
            statCategory={text("Stat category", "pts")}
            image={text("Image URL", "https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10142019/6014.png")}
        />);
});
