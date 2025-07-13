import React from 'react';
import { HoverBorderGradient } from '../../ui/HoverBorderGradient/HoverBorderGradient';

const GradientButton = ({buttonText, icon, children}) => {
    return (
        <div>
            <HoverBorderGradient containerClassName="rounded-xl" as="button" className="btn border-none">
                {children || buttonText || icon}
            </HoverBorderGradient>
        </div>
    );
};

export default GradientButton;