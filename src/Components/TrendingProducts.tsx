import React, { FunctionComponent } from 'react';
import TitleComponent from './TitleComponent';
import styles from './Navbar.module.css'
import ProductCard from './productCard';
import { productDetails } from '../Utils/sampleData'

type props = {
    productCount?: number,
    hideSeeMore?:boolean
}
const TrendingProducts: FunctionComponent<props> = ({ productCount,hideSeeMore }) => {
    let updatedProductList = []
    if (productCount)
        updatedProductList = productDetails.slice(0, productCount);
    else
        updatedProductList = productDetails
    return (
        <div>
            <TitleComponent heading={'Trending Products'} seeMoreLink={'/trending'} style={'trendingHeading'} hideSeeMore={hideSeeMore}/>
            <div className={productCount ? styles.TrendingProductListNowarp : styles.TrendingProductList}>
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

export default TrendingProducts;