import AdminHeader from "@/components/header/header";
import AdminSidebar from "@/components/sidebar/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <AdminHeader />
                <div className="flex">
                    <div className="w-[18%]">
                        <AdminSidebar />
                    </div>
                    <div className="py-4 px-5 w-[82%] absolute top-[60px] left-[18%]">{children}</div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
