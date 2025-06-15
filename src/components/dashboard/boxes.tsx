import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ShoppingCart, Smartphone, User } from "lucide-react";

const boxData = [
    {
        title: "Total Users",
        value: "1,000",
        icon: <User size={30} />,
    },
    {
        title: "Total Products",
        value: "1,000",
        icon: <Smartphone size={30} />,
    },
    {
        title: "Total Orders",
        value: "1,000",
        icon: <ShoppingCart size={30} />,
    },
];

const DashboardBoxes = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
            >
                {boxData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-4 rounded-md border border-shop-light_blue flex items-center gap-4">
                            {item.icon}
                            <div className="info w-[70%]">
                                <h3>{item.title}</h3>
                                <b>{item.value}</b>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default DashboardBoxes;
