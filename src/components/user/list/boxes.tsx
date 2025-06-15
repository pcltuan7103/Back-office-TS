import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ShoppingCart, Smartphone, User } from "lucide-react";

const boxData = [
    {
        title: "Total",
        value: "1,000",
        icon: <User size={24} color="white"/>,
    },
];

const UserListBoxes = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
            >
                {boxData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-[30px] rounded-xl bg-shop-blue_15 flex items-center gap-[16px]">
                            <div className="p-[10px] bg-shop-blue_100 rounded-xl">{item.icon}</div>
                            <div className="info w-fit">
                                <h3 className="text-darkColor">{item.title}</h3>
                                <p className="text-darkColor">{item.value} users</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default UserListBoxes;
