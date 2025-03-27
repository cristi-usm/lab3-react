export type Player = {
    variant: "Default" | "Large";
    url: string;
    advertisement: {
        title: string;
        image: {
            mobile: string;
            desktop: string;
        };
    };
};
