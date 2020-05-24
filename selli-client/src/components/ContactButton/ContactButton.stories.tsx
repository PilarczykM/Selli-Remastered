import React from "react";
import { storiesOf } from "@storybook/react";
import {ContactButton} from "./ContactButton";
storiesOf("Contact button", module)
    .add("Normal",
        () => <ContactButton >Click me</ContactButton>
    )
    .add("Inverted",
        () => <ContactButton inverted>Click me</ContactButton>
    )