"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import UserListBoxes from "@/components/user/list/boxes";

const AdminUsersPage = () => {
    return (
        <div className="w-[1200px] m-0 mx-auto">
            <div className="bg-white p-[20px] rounded-xl flex items-center justify-between mb-[30px]">
                <h2 className="text-[18px] font-[600] text-darkColor">
                    List Users
                </h2>
                <div className="flex items-center justify-end gap-[8px]">
                    <p className="text-[16px] font-[500] text-darkColor">
                        Dashboard
                    </p>
                    <div className="w-[8px] h-[8px] bg-darkColor rounded-full"></div>
                    <p className="text-[16px] font-[500] px-[8px] py-[4px] bg-shop-blue_15 rounded-full text-shop-blue_100 hover:bg-shop-blue_25">
                        List Users
                    </p>
                </div>
            </div>
            <div className="mb-[30px]">
                <UserListBoxes />
            </div>
            <div className="bg-white p-[30px] rounded-xl flex items-center justify-between mb-[30px]">
                <div className="relative w-[33%]">
                    <Input placeholder="Search user" className="" />
                    <Search className="absolute top-[50%] right-[10px] translate-y-[-50%]" size={18}/>
                </div>
                <Button>Create Account</Button>
            </div>
            <div className="bg-white p-[30px] rounded-xl flex items-center justify-between mb-[30px]">
                <table className="table w-full px-[20px]">
                    <thead className="table-row-group">
                        <tr className="table-row border-b border-shop-blue_15 py-[13px]">
                            <th className="table-cell text-left text-[15px] font-[600] text-darkColor p-[12px]">
                                ID
                            </th>
                            <th className="table-cell text-left text-[15px] font-[600] text-darkColor p-[12px]">
                                Name
                            </th>
                            <th className="table-cell text-left text-[15px] font-[600] text-darkColor p-[12px]">
                                Email
                            </th>
                            <th className="table-cell text-left text-[15px] font-[600] text-darkColor p-[12px]">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-row-group">
                    <tr className="table-row border-b border-shop-blue_15 py-[13px]">
                        <td className="table-cell text-left text-[15px] font-[600] text-darkColor p-[12px]">
                            1
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsersPage;
