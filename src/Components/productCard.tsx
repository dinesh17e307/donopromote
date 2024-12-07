
"use client"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useRouter } from 'next/navigation'
import Styles from './Navbar.module.css'
type props = {
    productImg: string,
    description: string,
    buttonText: string,
    link: string,
    productName: string,
    hoverEffect?:boolean

}
const ProductCard: FunctionComponent<props> = ({ hoverEffect,productImg, description, buttonText, link, productName }) => {
    const navigate = useRouter();
    const navigateToProduct = (productId: string) => {
        navigate.push(productId)
    }
    const navigateToViewProduct = (productId: string) => {
        navigate.push(`viewproduct/${productId}`)
    }
    return (
        <Card className={Styles.productCard} key={productName}>
            {productImg && <CardMedia className={hoverEffect? Styles.overEffect:""}
                sx={{ height: 140 }}
                image={productImg}
                title={productName}

            />}
            <CardContent>
                {productName && <Typography gutterBottom variant="h5" component="div">
                    {productName}
                </Typography>}
                {description && <Typography className={Styles.description} variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>}
            </CardContent>
            <CardActions className={Styles.actionButtons}>
                <Button className={Styles.productCardButton} onClick={() => navigateToViewProduct(productName)} size="small">{buttonText}</Button>
                {buttonText && <Button size="small" className={Styles.productCardButton} onClick={() => navigateToProduct(link)}>Buy Product</Button>}
            </CardActions>
        </Card>
    );
}

export default ProductCard;