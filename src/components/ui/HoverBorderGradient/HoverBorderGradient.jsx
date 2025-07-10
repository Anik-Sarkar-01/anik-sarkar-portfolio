import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    // eslint-disable-next-line no-unused-vars
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}) {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState("TOP");

    const movingMap = {
        TOP: "radial-gradient(40% 80% at 50% 0%, hsl(155, 100%, 60%) 0%, rgba(0, 255, 153, 0.4) 100%)",
        LEFT: "radial-gradient(35% 70% at 0% 50%, hsl(155, 100%, 60%) 0%, rgba(0, 255, 153, 0.4) 100%)",
        BOTTOM: "radial-gradient(40% 80% at 50% 100%, hsl(155, 100%, 60%) 0%, rgba(0, 255, 153, 0.4) 100%)",
        RIGHT: "radial-gradient(35% 70% at 100% 50%, hsl(155, 100%, 60%) 0%, rgba(0, 255, 153, 0.4) 100%)",
    };

    const highlight =
        "radial-gradient(75% 180% at 50% 50%, #00FF99 0%, rgba(255, 255, 255, 0) 100%)";

    useEffect(() => {
        if (!hovered) {
            const rotateDirection = (current) => {
                const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
                const index = directions.indexOf(current);
                return clockwise
                    ? directions[(index - 1 + directions.length) % directions.length]
                    : directions[(index + 1) % directions.length];
            };
            const interval = setInterval(() => {
                setDirection((prev) => rotateDirection(prev));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex items-center justify-center rounded-full border bg-black/20 hover:bg-black/10 dark:bg-white/20 p-px w-fit transition duration-500",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "z-10 bg-black text-white px-4 py-2 rounded-[inherit]",
                    className
                )}
            >
                {children}
            </div>

            <motion.div
                className="absolute inset-0 z-0 rounded-[inherit] pointer-events-none"
                style={{
                    filter: "blur(6px)",
                    //   boxShadow: "0 0 20px rgba(0, 255, 153, 0.3)",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration }}
            />

            <div className="absolute inset-[2px] z-1 rounded-full bg-black" />
        </Tag>
    );
}
