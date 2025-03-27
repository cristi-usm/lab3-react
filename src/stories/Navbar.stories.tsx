import type { Meta, StoryFn } from "@storybook/react";

import Navbar from "../../components/Channels/Navbar";

const meta = {
    title: "components/Navbar",
    component: Navbar,
    argTypes: {
        variant: {
            options: ["Default", "Large"],
            control: { type: "radio" },
        },
    },
} satisfies Meta<typeof Navbar>;

export default meta;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: "Default",
};

export const Large = Template.bind({});
Large.args = {
    variant: "Large",
};
