import React, { FunctionComponent } from "react";
import Styles from './Navbar.module.css'
import Image from "next/image";
import { socialMedia } from "@/Utils/sampleData";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
type props = {
    socialMedia: {
        imgSrc: string,
        link: string
    }[];
}
const SocialMediaPage: FunctionComponent = () => {

    return (
        <div>
            <div className={Styles.trendingHeadingInvert}>
                Happy Shopping With Us!
            </div>
            <div className={Styles.para_text_invert}>
                Follow us on :
            </div>
        <div className={Styles.d_flex}>
         
            <YouTubeIcon color="white" className={Styles.socialMedia}  />
            <InstagramIcon color="white" className={Styles.socialMedia} />
            <LinkedInIcon color="white" className={Styles.socialMedia} />
            <FacebookIcon color="white" className={Styles.socialMedia} />

        </div>
        <div className={Styles.para_text_copy}>
            Copyrights donopromote @2024
        </div>
        </div>
    );
}

export default SocialMediaPage;