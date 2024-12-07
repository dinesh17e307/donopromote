import React, { FunctionComponent } from "react";
import TopBrands from "@/Components/TopBrands";
import { brandDetails } from "@/Utils/sampleData";
const TopBrand: FunctionComponent = () => {
    return (
        <div >
            <TopBrands brandDetails={brandDetails} hideSeeMore={true}/>

        </div>
    )
}
export default TopBrand;