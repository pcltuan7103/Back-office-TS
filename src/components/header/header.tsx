import React from "react";
import { Button } from "../ui/button";
import { AlignLeft, Bell, LogOut } from "lucide-react";

const AdminHeader = () => {
    return (
        <header className="fixed top-0 left-[18%] right-0 z-20 h-[60px] pl-8 pr-7 flex items-center justify-between bg-white shadow-sm shadow-shop-light_blue">
            <div>
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] bg-[#fff] hover:bg-shop-light_blue group shadow-none">
                    <AlignLeft
                        className="text-shop-light_blue group-hover:text-white"
                        size={18}
                    />
                </Button>
            </div>
            <div className="w-[40%] flex items-center justify-end gap-3">
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] bg-[#fff] hover:bg-shop-light_blue group shadow-none">
                    <Bell
                        className="text-shop-light_blue group-hover:text-white"
                        size={18}
                    />
                </Button>
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] bg-[#fff] hover:bg-shop-light_blue group shadow-none">
                    <LogOut
                        className="text-shop-light_blue group-hover:text-white"
                        size={18}
                    />
                </Button>
            </div>
        </header>
    );
};

export default AdminHeader;
