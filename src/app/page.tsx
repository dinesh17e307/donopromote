"use client";
import Image from "next/image";
import styles from "./page.module.css";
import profilepic from '../../public/logo.png'
import LeadComponent from "@/Components/LeadCard";
import { useEffect, useState } from "react";
import SubscribeComponent from "@/Components/SubscribeComponent";
import TrendingProducts from "@/Components/TrendingProducts";
import TravelProducts from "@/Components/TravelFashion";
import BeautyProducts from "@/Components/BeautyProducts";
import CarouselSlider from "@/Components/CarouselSlider";
import DealOftheDay from "@/Components/DealoftheDay";
import TopBrands from "@/Components/TopBrands";
import { brandDetails } from "@/Utils/sampleData";
export default function Home() {

  return (

    <main className={styles.main}>
      <div>

        <TrendingProducts productCount={5} />
        <DealOftheDay />
        <TravelProducts productCount={5} />
        <SubscribeComponent />

        <BeautyProducts productCount={5} />
        <TopBrands brandDetails={brandDetails} />
        <LeadComponent />

      </div>

    </main>


  );
}
