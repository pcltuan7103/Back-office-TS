import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
    className,
    spanDesign,
}: {
    className?: string;
    spanDesign?: string;
}) => {
    return (
        <h2
            className={cn(
                "text-2xl text-shop-blue_100 font-black tracking-wider uppercase hover:text-shop-blue_50 hoverEffect group font-sans",
                className,
            )}
        >
            TSho
            <span
                className={cn(
                    "text-shop-blue_50 group-hover:text-shop-blue_100 hoverEffect",
                    spanDesign,
                )}
            >
                p
            </span>
        </h2>
    );
};

export default Logo;
