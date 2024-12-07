"use client"
import React, { FunctionComponent } from 'react';
import styles from './Navbar.module.css'
import { useRouter } from 'next/navigation';
type props = {
    heading: string,
    style: any,
    hideSeeMore?: boolean,
    seeMoreLink?:string
}
const TitleComponent: FunctionComponent<props> = ({ heading, style, hideSeeMore = false,seeMoreLink }) => {
    const navigate = useRouter();
    const navigateToProduct = (productId: string) => {
        navigate.push(productId)
    }
    console.log(style, 'jhgf')
    return (
        <div className={styles.HeadingComponent}>
            <p className={styles[style]}>{heading}</p>
            {!hideSeeMore && seeMoreLink && (<p className={styles.seeMore} onClick={()=>navigateToProduct(seeMoreLink)}>{'See More>>'}</p>)}
        </div>
    );
}

export default TitleComponent;