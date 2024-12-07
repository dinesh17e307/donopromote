"use client"
import React, { FunctionComponent } from "react";
import Styles from './Navbar.module.css';
import Image from "next/image";
import { Button, Hidden } from "@mui/material";
import { useRouter } from "next/navigation";
import DealOftheDay from "./DealoftheDay";

type props = {
    productDetail: {
        productImg: string,
        description: string,
        link: string,
        productName?:string,
        buttonText?:string
    },
    id: string
}
const ViewProducts: FunctionComponent<props> = ({ productDetail }) => {

    const navigate = useRouter();
    const navigateToProduct = (link: string) => {
        navigate.push(link)
    }


    return (
        <div >
            <div className={Styles.d_flex_viewProduct}>
                <div className={Styles.image_container}>
                <Image width={200} height={200} className={Styles.background} src={productDetail.productImg} alt={'view Products'} />
                <Image width={100} height={100} className={Styles.overlay} src="https://media.tenor.com/_yndIq235YwAAAAi/terrabyt-terrabyt-offer.gif" alt="discount"/>
                </div>
                <p className={`${Styles.descriptionStyle} ${Styles.para_text}`}>
                    {productDetail.description}
                </p>

            </div>
            
            <div className={Styles.D_flex_center}>
                <Button className={Styles.ViewCardButton} onClick={() => navigateToProduct(productDetail.link)} size="small">Buy Product</Button>
            </div>

            <DealOftheDay />
        </div>
    )
}
export default ViewProducts;