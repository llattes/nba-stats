import { storiesOf } from "@storybook/react";
import React from "react";
import Header from "./Header";

storiesOf("Components|Header", module).add("Default", () => {
    return (<Header content={"Example header"}/>);
});
