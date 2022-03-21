export interface webSiteProp {
    name?: string;
    href?: string;
    domain?: string;
    show?: boolean;
    icon?: string;
}

export interface searchWebSit {
    href?: string;
}

export interface navProps {
    name?: string;
    icon?: string;
    href: string;
}
export type strOrReStr = string | (() => string);
