"use client";
import Link from "next/link";
import React from "react";
import Logo from "../elements/logo";
import { Button } from "../ui/button";
import { LayoutDashboard, User } from "lucide-react";
import { usePathname } from "next/navigation";

export const headerData = [
    {
        id: 1,
        title: "Dashboard",
        href: "/admin",
        icon: <LayoutDashboard size={20} />,
    },
    {
        id: 2,
        title: "Users",
        href: "/users",
        icon: <User size={20} />,
    },
];

const AdminSidebar = () => {
    const pathName = usePathname();

    return (
        <>
            <div className="fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-shop-light_blue py-2 px-4">
                <div className="py-2 w-full">
                    <Link href={"/admin"}>
                        <Logo className="text-[40px]" />
                    </Link>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                    {headerData.map((item, index) => (
                        <li key={index}>
                            <Button
                                className={`w-full !capitalize !justify-start flex items-center gap-3 bg-transparent hover:bg-shop-light_blue hover:text-white hover:font-[600] text-shop-light_blue shadow-none text-[20px] font-[500] py-6 hoverEffect ${
                                    pathName === item.href
                                        ? "!bg-shop-light_blue !text-white !font-[600]"
                                        : ""
                                }`}
                            >
                                {item.icon} {item.title}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AdminSidebar;
