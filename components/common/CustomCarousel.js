"use client";
import React from "react";
import { Carousel, Button } from "antd";
import styles from "@/app/page.module.css";
import slide1 from "@/public/assets/images/slide-1.jpeg";
import slide2 from "@/public/assets/images/slide-2.jpeg";
import slide3 from "@/public/assets/images/slide-3.jpeg";
import slide4 from "@/public/assets/images/slide-4.jpeg";
import slide5 from "@/public/assets/images/slide-5.jpeg";
import Image from "next/image";

const slides = [
  {
    head: "Premium Healthcare. Trusted Delivery.",
    title: "A-B Vask 10 Mg",
    subtitle: "10 Tablet",
    description:
      "A-B Vask (Amlodipine Besylate 10 mg) adalah inhibitor influx kalsium (slow channel blocker atau antagonis ion kalsium).",
    btnText: "Beli Sekarang",
    imgUrl: slide1, // ensure this file lives in /public/images/
  },
  {
    head: "Mahadika, Kesehatan anda, prioritas kami setiap hari",
    title: "A-B Vask 10 Mg",
    subtitle: "10 Tablet",
    description:
      "A-B Vask (Amlodipine Besylate 10 mg) adalah inhibitor influx kalsium (slow channel blocker atau antagonis ion kalsium).",
    btnText: "Beli Sekarang",
    imgUrl: slide2, // ensure this file lives in /public/images/
  },
  {
    head: "Mahadika, Kesehatan anda, prioritas kami setiap hari",
    title: "A-B Vask 10 Mg",
    subtitle: "10 Tablet",
    description:
      "A-B Vask (Amlodipine Besylate 10 mg) adalah inhibitor influx kalsium (slow channel blocker atau antagonis ion kalsium).",
    btnText: "Beli Sekarang",
    imgUrl: slide3, // ensure this file lives in /public/images/
  },
  {
    head: "Mahadika, Kesehatan anda, prioritas kami setiap hari",
    title: "A-B Vask 10 Mg",
    subtitle: "10 Tablet",
    description:
      "A-B Vask (Amlodipine Besylate 10 mg) adalah inhibitor influx kalsium (slow channel blocker atau antagonis ion kalsium).",
    btnText: "Beli Sekarang",
    imgUrl: slide4, // ensure this file lives in /public/images/
  },
  {
    head: "Mahadika, Kesehatan anda, prioritas kami setiap hari",
    title: "A-B Vask 10 Mg",
    subtitle: "10 Tablet",
    description:
      "A-B Vask (Amlodipine Besylate 10 mg) adalah inhibitor influx kalsium (slow channel blocker atau antagonis ion kalsium).",
    btnText: "Beli Sekarang",
    imgUrl: slide5, // ensure this file lives in /public/images/
  },
  // add more slides with correct imgUrl paths
];

function CustomCarousel() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel dots autoplay={false}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <h2 className={styles.home_page_subheading}>{slide.head}</h2>
            <div
              className={styles.slideItem}
              style={{
                backgroundImage: `linear-gradient(263.22deg, rgba(39, 39, 39, 0.3) 23.64%, rgba(39, 39, 39, 0.12) 110.35%), url(${slide.imgUrl.src})`,
                // backgroundImage: ` url(${slide.imgUrl.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
              {/* <div className={styles.overlay}>
                <h1 className={styles.title}>
                  {slide.title} <br />
                  {slide.subtitle}
                </h1>
                <p className={styles.desc}>{slide.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
