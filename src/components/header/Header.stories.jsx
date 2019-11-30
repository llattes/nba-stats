import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import React from "react";
import Header from "./Header";

storiesOf("Components|Header", module).add("Default", () => {
    return (<Header content={text("Header text", "Example header")}/>);
});
