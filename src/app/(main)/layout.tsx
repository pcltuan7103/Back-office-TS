import AdminHeader from "@/components/header/header";
import AdminSidebar from "@/components/sidebar/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AdminHeader />
            <div className="flex">
                <div className="w-[18%]">
                    <AdminSidebar />
                </div>
                <div className="p-[30px] w-[82%] absolute top-[60px] left-[18%] bg-[#f4f7fb] h-[calc(100%-60px)] rounded-3xl">
                    {children}
                </div>
            </div>
        </>
    );
};

export default MainLayout;
