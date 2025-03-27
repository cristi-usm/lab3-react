type NavbarItem = {
    id: string;
    name: string;
    icon?: string;
    link?: string;
    action?: () => void;
};

const navbarItems: NavbarItem[] = [
    { id: '1', name: 'Oferte', link: '' },
    { id: '2', name: 'Produse', link: '' },
    { id: '3', name: 'Mai multe', link: '' },
];

const rightItems: NavbarItem[] = [
    { id: '1', name: 'Payment', icon: "/images/Pay.svg", link: '' },
    { id: '2', name: 'Profile', icon: "/images/Profile.svg", link: '' },
    { id: '3', name: 'Search', icon: "/images/Search.svg", link: '' },
    { id: '4', name: 'Language', link: '' },
    { id: '5', name: 'Business', link: '' },
    { id: '6', name: 'Call', icon: "/images/Call.svg", link: '' },
];

export { navbarItems, rightItems };
export type { NavbarItem };