import React, { FunctionComponent } from 'react';
import TitleComponent from './TitleComponent';
import styles from './Navbar.module.css'
import ProductCard from './productCard';
import {productDetails} from '../Utils/sampleData'
type props={
    productCount:number
}
const TravelProducts:FunctionComponent<props> = ({productCount}) => {
    const updatedProductList = productDetails.slice(0,productCount);
    return (
        <div>
            <TitleComponent heading={'Travel & Fashion Products'} style={'trendingHeading'} seeMoreLink={'/travel'} />
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

export default TravelProducts;