import { Col, Divider, Row } from "antd";
import React from "react";
import styles from "@/styles/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/public/assets/icons/footer-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row className={styles.footer_container}>
      <div className={styles.circleTopLeft} />
      <div className={styles.circleBottomRight} />

      <Row className={styles.footer_content}>
        <Col xs={12} md={7}>
          <div className={styles.footer_div}>
            <h6 className={styles.footer_heading}> Mahadika Address</h6>
            <p className={styles.footer_p}>
              Gd. Ideal Business Center Lt.02, Jl Manunggal Pratama No. 08
              Cipinang Melayu, Makasar
            </p>
          </div>
          <div className={styles.footer_div}>
            <h6 className={styles.footer_heading}> Phone Number</h6>
            <p className={styles.footer_p}>+622121381821</p>
          </div>

          <div className={styles.footer_div}>
            <h6 className={styles.footer_heading}>Layanan Pengaduan Konsumen</h6>
            <p className={styles.footer_p}>
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga,
              <br />
              Kementerian Perdagangan Republik Indonesia
              <br />
              Layanan Pelanggan PKTN WhatsApp: 0853-1111-1010
            </p>
          </div>
        </Col>
        <Col xs={1} md={3}></Col>
        <Col xs={11} md={5}>
          <div className={styles.footer_div}>
            <h6 className={styles.footer_heading}>Main Menu</h6>
            <Link href={"/"}>Home</Link>
            <Link href={"/catalogues/all"}>Catalogue</Link>
            <Link href={"/contact-us"}>Contact </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.footer_div}>
            <h6 className={styles.footer_heading}>Informasi</h6>
            <Link href={"/terms-condition"}>Syarat & Ketentuan</Link>
          </div>
        </Col>
      </Row>
      <Row className={styles.footer_content}>
        <Col span={24}>
          <Divider style={{ borderColor: "#5F5F60", width: "100%" }} />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <p className={styles.footer_p}>
            Copyright @ {currentYear} PT Mahadika Reksa Impeksindo
          </p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Image src={footerLogo} alt="footer-logo" />{" "}
        </Col>
      </Row>
    </Row>
  );
};

export default Footer;
