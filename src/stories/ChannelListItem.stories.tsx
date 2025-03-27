import type { Meta, StoryFn } from "@storybook/react";

import ChannelListItem from "../../components/Channels/ChannelListItem";
import TvChannel from "../../types/TvChannel";

const meta = {
    title: "components/ChannelListItem",
    component: ChannelListItem,
    argTypes: {
        variant: {
            options: ["Default", "Large"],
        },
    },
} satisfies Meta<typeof ChannelListItem>;

export default meta;

const tvChannels: TvChannel[] = [{ id: "1", name: "Jurnal TV", icon: "/images/JurnalTV.svg" }];

export const Default: StoryFn<typeof ChannelListItem> = (args) => (
    <ChannelListItem {...args} tvChannel={tvChannels[0]} />
);
Default.args = {
    variant: "Default",
};

export const Large: StoryFn<typeof ChannelListItem> = (args) => <ChannelListItem {...args} tvChannel={tvChannels[0]} />;
Large.args = {
    variant: "Large",
};

/*export const MultipleChannels: StoryFn = () => {
    return (
        
        <div className="flex flex-col gap-4 w-[500px]">
            {tvChannels.map((channel) => (
                <ChannelListItem key={channel.id} variant="Default" tvChannel={channel} />
            ))}
        </div>
    );
};
*/
