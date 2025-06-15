import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
    title: {
        template: "Back Office TShop",
        default: "Back Office TShop",
    },
    description: "Back Office TShop",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main id="login">{children}</main>;
}
