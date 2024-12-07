import React, { FunctionComponent } from 'react';
import TitleComponent from './TitleComponent';
import styles from './Navbar.module.css'
import ProductCard from './productCard';
import {productDetails} from '../Utils/sampleData'
type props={
    productCount?:number,
    hideSeeMore?:boolean
}
const BeautyProducts: FunctionComponent<props> = ({productCount,hideSeeMore}) => {
    let updatedProductList=[];
    if(productDetails)
        updatedProductList = productDetails.slice(0,productCount);
    else
    updatedProductList = productDetails;
    return (
        <div>
            <TitleComponent heading={'Beauty Products'} hideSeeMore={hideSeeMore} style={'trendingHeading'} seeMoreLink={'/beauty'} />
           <div className={productCount?styles.TrendingProductListNowarp:styles.TrendingProductList}>
            {
                updatedProductList.map(item => {
                    return (
                        <ProductCard
                            key={item.productName}
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
    );
}

export default BeautyProducts;