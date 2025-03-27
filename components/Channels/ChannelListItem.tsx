import TvChannel from "../../types/TvChannel";

interface ChannelListItemProps {
    variant: 'Default' | 'Large';
    tvChannel: TvChannel;
}

const ChannelListItem = (props: ChannelListItemProps) => {
    return (
<div 
    className={`
        flex items-center bg-white text-black font-bold 
        ${props.variant === "Default" || window.innerWidth < 1024 ? 
            "lg:w-[384px] lg:h-auto lg:py-[12px] lg:px-[16px] lg:items-center lg:gap-[12px] rounded-[12px]" 
        : 
            "lg:w-[128px] lg:h-[128px] lg:py-[31px] lg:px-[16px] lg:rounded-3xl lg:flex lg:items-center lg:justify-center"}
    `}
>
    {props.tvChannel.icon && (
        <img 
            src={props.tvChannel.icon} 
            alt={`${props.tvChannel.name} Logo`} 
            className={`object-contain
                ${props.variant === 'Large' && window.innerWidth >= 1024 ? 'w-[96px] h-[96px]' : 'w-[40px] h-[40px]'}`}
        />
    )}

    {(props.variant !== 'Large' || window.innerWidth < 1024) && (
        <span className="text-lg">{props.tvChannel.name}</span>
    )}
</div>

    );
}

export default ChannelListItem;
