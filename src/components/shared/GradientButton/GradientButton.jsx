import React from 'react';
import { HoverBorderGradient } from '../../ui/HoverBorderGradient/HoverBorderGradient';

const GradientButton = ({ href, buttonText, icon, children }) => {
    const Component = href ? "a" : "button";

    return (
        <HoverBorderGradient
            as={Component}
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            containerClassName="rounded-xl"
            className="btn border-none flex items-center gap-1"
        >
            {icon && <span>{icon}</span>}
            {children || (buttonText && <span>{buttonText}</span>)}
        </HoverBorderGradient>
    );
};

export default GradientButton;
