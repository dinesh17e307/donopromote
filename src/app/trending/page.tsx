import React, { FunctionComponent } from "react";
import TrendingProducts from "@/Components/TrendingProducts";
type props = {
    brandDetails: {
        imgSrc: string, link: string
    }[];
}
const Trending: FunctionComponent<props> = ({ brandDetails }) => {
    return (
        <div >
            <TrendingProducts hideSeeMore={true}/>

        </div>
    )
}
export default Trending;