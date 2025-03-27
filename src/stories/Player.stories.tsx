// player.stories.tsx
import type { Meta, StoryFn } from "@storybook/react";
import Player from "../../components/Channels/Player";

const meta = {
    title: "components/Player",
    component: Player,
    argTypes: {
        variant: {
            options: ["Default", "Large"],
            control: { type: "radio" },
        },
    },
} satisfies Meta<typeof Player>;

export default meta;

const Template: StoryFn<typeof Player> = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: "Default",
    url: "",
    advertisement: {
        title: "Add mob",
        image: {
            mobile: "",
            desktop: "",
        },
    },
};

export const Large = Template.bind({});
Large.args = {
    variant: "Large",
    url: "",
    advertisement: {
        title: "Add",
        image: {
            mobile: "",
            desktop: "",
        },
    },
};