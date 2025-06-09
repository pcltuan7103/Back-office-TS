import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: {
        template: "$s - Online Shopcart",
        default: "Online Shopcart",
    },
    description: "Online Shopcart, Have everything you need in one place",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main id="dashboard">{children}</main>;
}
