import React, { FunctionComponent } from "react";
import TrendingProducts from "@/Components/TrendingProducts";
import BeautyProducts from "@/Components/BeautyProducts";

const BeautyProductPage: FunctionComponent = () => {
    return (
        <div >
            <BeautyProducts hideSeeMore={true}/>

        </div>
    )
}
export default BeautyProductPage;