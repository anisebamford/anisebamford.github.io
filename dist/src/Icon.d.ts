import React from "react";
declare const IconSizes: {
    sm: string;
    md: string;
    lg: string;
};
export declare function Icon({ src, alt, size }: {
    src: string;
    size: keyof typeof IconSizes;
    alt: string;
}): React.JSX.Element;
export {};
