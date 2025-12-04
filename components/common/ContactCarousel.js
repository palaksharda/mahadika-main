"use client";
import React from "react";
import { Carousel, Button } from "antd";
import styles from "@/app/page.module.css";
import slide1 from "@/public/assets/images/contact-1.png";
import slide2 from "@/public/assets/images/slide2.jpg";
import slide3 from "@/public/assets/images/slide3.jpg";
import Image from "next/image";

const slides = [
  {
    title: "Mahadika Office",

    description:
      "Gd. Ideal Business Center Lt.02, Jl Manunggal Pratama No. 08 Cipinang Melayu, Makasar",
    btnText: "Beli Sekarang",
    imgUrl: slide1, // ensure this file lives in /public/images/
  },
  // {
  //   title: "Mahadika Office",
  //   description:
  //     "Gd. Ideal Business Center Lt.02, Jl Manunggal Pratama No. 08 Cipinang Melayu, Makasar",
  //   btnText: "Beli Sekarang",
  //   imgUrl: slide1, // ensure this file lives in /public/images/
  // },
  // {
  //   title: "Mahadika Office",
  //   description:
  //     "Gd. Ideal Business Center Lt.02, Jl Manunggal Pratama No. 08 Cipinang Melayu, Makasar",
  //   btnText: "Beli Sekarang",
  //   imgUrl: slide1, // ensure this file lives in /public/images/
  // },
  // add more slides with correct imgUrl paths
];

function ContactCarousel() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel dots={false} autoplay>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className={styles.slideItem}
              style={{
                backgroundImage: `linear-gradient(12.77deg, rgba(39, 39, 39, 0.9) 28.12%, rgba(39, 39, 39, 0) 74.46%), url(${slide.imgUrl.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "calc(100vh - 30px)",
                width: "100%",
              }}
            >
              <div className={styles.logoContainer}>
                <Image
                  src="/assets/icons/banner_logo.svg"
                  alt="logo"
                  width={85}
                  height={50}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "flex-start",
                  height: "80%",
                  padding: "48px 24px 0 24px",
                  color: "#fff",
                }}
              >
                <h1
                  className={styles.title}
                  style={{
                    fontSize: "48px",
                    fontWeight: "600",
                    lineHeight: "58px",
                  }}
                >
                  {slide.title}
                </h1>
                <p className={styles.desc}>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ContactCarousel;
