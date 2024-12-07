"use Client"
import { Dialog, DialogContent, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FunctionComponent, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Navbar.module.css'

type props = {
    imageDetails: {
        imgsrc: string;
        link: string
    }[];
}
const CarouselSlider: FunctionComponent<props> = ({ imageDetails }) => {
    const route = useRouter();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const navigate: Function = (link: string) => {
        route.push(link)
    }
    const [openDialog, setopenDialog] = useState(true);
    useEffect(() => {
        // setTimeout(()=>{
        //     setopenDialog(false)
        // },10000)
    })
    return (

                
                 <div className={styles.outerContainer}>
                    {imageDetails.map((image, index) => {
                        console.log(image, 'jiji')
                        return (
                            <div key={image.imgsrc + index}>
                                <Image className={styles.sliderImage} width={200} height={200} src={image.imgsrc} alt="img" onClick={() => navigate(image.link)} />
                            </div>
                        )
                    })

                    }
                </div>

    )
};
export default CarouselSlider;