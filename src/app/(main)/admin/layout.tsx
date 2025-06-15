import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
    title: {
        template: "Back Office TShop",
        default: "Back Office TShop",
    },
    description: "Back Office TShop",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main id="dashboard">{children}</main>;
}
