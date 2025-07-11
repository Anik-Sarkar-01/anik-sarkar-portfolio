import React from 'react';
import { HoverBorderGradient } from '../../ui/HoverBorderGradient/HoverBorderGradient';

const GradientButton = ({buttonText, children}) => {
    return (
        <div>
            <HoverBorderGradient containerClassName="rounded-xl" as="button" className="btn border-none">
                {children || buttonText}
            </HoverBorderGradient>
        </div>
    );
};

export default GradientButton;