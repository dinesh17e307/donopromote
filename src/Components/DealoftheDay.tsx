import React from "react";
import Styles from'./Navbar.module.css';
import CarouselSlider from "./CarouselSlider";
import { imageDetails } from "@/Utils/sampleData";
import profilepic from '../../public/specialoffer.png'
import Image from "next/image";
import {productDetails} from '../Utils/sampleData'
import ProductCard from "./productCard";
const DealOftheDay=()=>{
    const updatedProductList = productDetails.slice(0,4);
    return(
     <div className={Styles.dailyDealsBox}>
        <div className={Styles.d_flex}>
        {/* <Image width={200} height={200} src={profilepic} alt="specialoffer"/> */}
        <p className={Styles.dailydeals}>Daily Deals</p>
        </div>
        <p className={Styles.dailydealscontent}>Grab your daily Deals with 10% off !.</p>

        <div className={Styles.d_flex}>
        {
                updatedProductList.map(item => {
                    return (
                        <ProductCard
                            key={item.productName}
                            hoverEffect={true}
                            productImg={item.productImg}
                            description={item.description}
                            buttonText={item.buttonText}
                            link={item.link}
                            productName={item.productName} />
                    )
                })
            }
        </div>
     </div>
    )
}
export default DealOftheDay;