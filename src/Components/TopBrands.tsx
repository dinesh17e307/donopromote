
import React, { FunctionComponent,useEffect,useState } from "react";
import Styles from './Navbar.module.css';
import CarouselSlider from "./CarouselSlider";
import { imageDetails } from "@/Utils/sampleData";
import profilepic from '../../public/specialoffer.png'
import Image from "next/image";
import TitleComponent from "./TitleComponent";
import { useRouter } from "next/navigation";
import { Button, Card, CardActions, CardContent } from "@mui/material";

type props = {
    brandDetails: {
        imgSrc: string, link: string
    }[],
    hideSeeMore?:boolean
}
const TopBrands: FunctionComponent<props> = async({ brandDetails,hideSeeMore }) => {
    const route = useRouter();
    const navigate = (link: string) => {
        route.push(link)
    }
    const [topBrand, settopBrand] = useState([]);

    useEffect(() => {
      // Call the local API route
      const fetchMessage = async () => {
        const response = await fetch('/api/mongo');
        const data = await response.json();
        console.log(data,'datattaat')
        settopBrand(data);
      };
  
      fetchMessage();
    }, []);
  
    return (
        <div >
            <TitleComponent heading={'Shop With Our Top Brands'} style={'trendingHeading'} hideSeeMore={hideSeeMore} seeMoreLink={'/topbrands'} />

            <div className={Styles.d_flex_overflow}>
                {
                    brandDetails.map((brand,index) => {
                        return (
                            
                            <Card key={`${brand.imgSrc}_${index}`} className={Styles.topbrandCard}>
                                <CardContent>
                                    <Image width={100} height={100} key={brand.imgSrc} src={brand.imgSrc} alt="product-brand" onClick={() => navigate(brand.link)} />
                                    <Button className={Styles.shopmore} variant="text">Shop More</Button>
                                </CardContent>
                               
                            </Card>
                        )
                    })
                }

            </div>

        </div>
    )
}
export default TopBrands;