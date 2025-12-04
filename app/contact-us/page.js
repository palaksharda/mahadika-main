"use client";
import { Col, Row, Carousel } from "antd";
import React from "react";
import styles from "@/styles/contact.module.css";
import Image from "next/image";
import CarouselContact from "@/components/common/ContactCarousel";
import CustomCarousel from "@/components/common/CustomCarousel";
import ContactCarousel from "@/components/common/ContactCarousel";
import Link from "next/link";
const contentStyle = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const contactData = [
  {
    icon: "/assets/icons/location.svg",
    title: "Locations",
    text: "Gd. Ideal Business Center Lt.02, Jl Manunggal Pratama No. 08 Cipinang Melayu, Makasar",
  },
  {
    icon: "/assets/icons/phone.svg",
    title: "Phone",
    text: "+622121381821",
  },
  {
    icon: "/assets/icons/email.svg",
    title: "Email",

    text: (
      <>
        <Link href="mailto:rahultaparia@mahadika.com" target="_blank">
          rahultaparia@mahadika.com
        </Link>
        <br />
        <Link href="mailto:urvitaparia@mahadika.com">
          urvitaparia@mahadika.com
        </Link>
      </>
    ),
  },
];

const ContactUs = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Row justify="center" align="middle" className="w-100">
        <Col span={12} className={styles.contact_card_container}>
          <Row className="w-100">
            <h1 className={styles.contact_heading}>Contact Us</h1>
          </Row>
          <Row className={styles.contact_card_row}>
            {contactData.map((contact) => (
              <Col md={11} className={styles.contact_card} key={contact.title}>
                <div className={styles.contact_icon}>
                  <Image
                    src={contact.icon}
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h4 className={styles.contact_card_heading}>{contact.title}</h4>
                <p className={styles.contact_card_p}>{contact.text}</p>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={12}>
          <ContactCarousel />
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
