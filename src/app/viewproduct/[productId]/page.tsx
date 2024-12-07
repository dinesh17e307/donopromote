import React, { FunctionComponent } from "react";
import Styles from'./Navbar.module.css';
import TitleComponent from "@/Components/TitleComponent";
import ViewProducts from "@/Components/ViewProducts";
import { productDetails } from "@/Utils/sampleData";


type props={
    params:{
       
        productId:string
        
    }
}

const ViewProduct:FunctionComponent<props>=({params})=>{
    const id = params.productId;
    let productDetail:any = productDetails.find(item=>item.productName==id);
    return(
     <div>
       <TitleComponent heading={id} style={'trendingHeading'} hideSeeMore={true} />
       <ViewProducts id={id} productDetail={productDetail} />
     </div>
    )
}
export default ViewProduct;