import React from 'react';
import { PointerHighlight } from '../ui/PointerHighlight/PointerHighlight';

const Heading = ({heading, subheading}) => {
    return (

        <div className="text-center mb-10 space-y-5">
            <PointerHighlight
                rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block ml-1"
            >
                <h1 className="relative z-10 p-2 text-3xl md:text-4xl font-bold">{heading}</h1>
            </PointerHighlight>

            <p className="text-gray-400">{subheading}</p>
        </div>
    );
};

export default Heading;