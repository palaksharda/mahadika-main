import Image from "next/image";
import styles from "./page.module.css";
import contactStyle from "@/styles/contact.module.css";
import { Row, Col, Button } from "antd";
import article1 from "@/public/assets/images/article-1.jpg";
import article2 from "@/public/assets/images/article-2.jpg";
import article3 from "@/public/assets/images/article-3.jpg";
import Link from "next/link";
import CustomCarousel from "@/components/common/CustomCarousel";

export default function Home() {
  return (
    <>
      <CustomCarousel />
      <div className={styles.home_page_container}>
        <div className={styles.home_page_subcontainer}>
          {/* STORY SECTION */}

          <Row
            justify="center"
            align="middle"
            className="w-100"
            gutter={[40, 16]}
          >
            <Col xs={24} sm={24} md={12}>
              <h1 className={styles.home_page_heading}>OUR Story</h1>
              <p className={styles.home_page_description}>
                PT Mahadika Reksa Impeksindo was built on a bold vision: to
                revolutionize healthcare accessibility across Indonesia.
                Starting from Jakarta over a decade ago, we set out to deliver
                authentic, high-quality medical products — fast, reliably, and
                with a service mindset that puts people first. Today, we are the
                go-to distribution partner for leading pharmacies, hospitals,
                and healthcare providers, trusted for our commitment to quality,
                speed, and integrity.
                <br />
                <br />
                Our credentials include:{" "}
              </p>
              <ul className={styles.home_page_list}>
                <li>Licensed SIA</li>
                <li>Licensed SIPA</li>
                <li>
                  KBLI covering import and export of Medical Equipments and
                  Goods
                </li>
                <li>SDAK</li>
                <li>IDAK</li>
              </ul>
            </Col>
            <Col xs={24} sm={24} md={12} className={styles.story_img}>
              <div className={styles.home_image}>
                <Image
                  src={"/assets/images/story.png"}
                  layout="fill"
                  alt="story"
                />
              </div>
            </Col>
          </Row>
          {/* VISION SECTION */}
          <Row
            justify="center"
            align="middle"
            className="w-100 my-48"
            gutter={[40, 16]}
          >
            <Col
              xs={0}
              sm={0}
              md={12}
              className="h-100"
              style={{ height: "280px" }}
            >
              <div className={styles.home_image}>
                <Image
                  src={"/assets/images/vision.png"}
                  layout="fill"
                  alt="vision"
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h1 className={styles.home_page_heading}>Our Vision</h1>
              <p className={styles.home_page_description}>
                We envision a world where every healthcare provider has access
                to the medications and medical supplies they need to care for
                their patients effectively. Our commitment to innovation and
                excellence drives us to continuously improve our processes and
                expand our product offerings.
              </p>
              {/* <Button
                type="primary"
                size="large"
                className="mt-48 mahadika-button"
                // onClick={() => console.log("hell0")}
              >
                Pelajari Lebih Lanjut
              </Button> */}
            </Col>
          </Row>
          {/* VALUES SECTION */}
          <Row
            justify="center"
            align="middle"
            className="w-100 my-48"
            gutter={[16, 40]}
          >
            <Col span={24}>
              <h1
                className={styles.home_page_heading}
                style={{ textAlign: "center" }}
              >
                Our Values
              </h1>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <div className={styles.values_img}>
                  <Image
                    src={"/assets/icons/integrity.svg"}
                    width={60}
                    height={60}
                    alt="value"
                  />
                </div>
                <p className={styles.values_head}>Integrity</p>
                <p className={styles.values_description}>
                  We believe in transparency and honesty in all our dealings.
                  Our clients can trust us to deliver on our promises.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <div className={styles.values_img}>
                  <Image
                    src={"/assets/icons/quality.svg"}
                    width={60}
                    height={60}
                    alt="value"
                  />
                </div>
                <p className={styles.values_head}>quality</p>
                <p className={styles.values_description}>
                  We are dedicated to sourcing only the highest quality products
                  from reputable manufacturers, ensuring safety and efficacy.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <div className={styles.values_img}>
                  <Image
                    src={"/assets/icons/focus.svg"}
                    width={60}
                    height={60}
                    alt="value"
                  />
                </div>
                <p className={styles.values_head}>customer focus</p>
                <p className={styles.values_description}>
                  Our clients are at the heart of everything we do. We
                  prioritize their needs and strive to exceed their
                  expectations.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <div className={styles.values_img}>
                  <Image
                    src={"/assets/icons/collab.svg"}
                    width={60}
                    height={60}
                    alt="value"
                  />
                </div>
                <p className={styles.values_head}>Collaboration</p>
                <p className={styles.values_description}>
                  We work closely with healthcare professionals to understand
                  their challenges and provide tailored solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row
            justify="center"
            align="middle"
            className="w-100 my-48"
            gutter={[16, 40]}
          >
            <Col span={24}>
              <h1
                className={styles.home_page_heading}
                style={{ textAlign: "center" }}
              >
                Our services
              </h1>
              <p
                className={styles.home_page_description}
                style={{ textAlign: "center" }}
              >
                At Mahadika, we offer a comprehensive range of services,
                including:
              </p>
            </Col>
            <Col md={8} xs={24}>
              <div
                className={contactStyle.contact_card}
                style={{ background: "#ffffff" }}
              >
                <div>
                  <Image
                    src={"/assets/icons/product.svg"}
                    width={60}
                    height={60}
                    alt="location"
                  />
                </div>
                <h4 className={`${contactStyle.contact_card_heading} mt-24`}>
                  Product Distribution
                </h4>
                <p className={contactStyle.contact_card_p}>
                  Timely delivery of pharmaceuticals, medical devices, and
                  supplies.
                </p>
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div
                className={contactStyle.contact_card}
                style={{ background: "#ffffff" }}
              >
                <div>
                  <Image
                    src={"/assets/icons/inventory.svg"}
                    width={60}
                    height={60}
                    alt="location"
                  />
                </div>
                <h4 className={`${contactStyle.contact_card_heading} mt-24`}>
                  Inventory Management{" "}
                </h4>
                <p className={contactStyle.contact_card_p}>
                  Streamlined solutions to help healthcare providers maintain
                  optimal stock levels.{" "}
                </p>
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div
                className={contactStyle.contact_card}
                style={{ background: "#ffffff" }}
              >
                <div>
                  <Image
                    src={"/assets/icons/consult.svg"}
                    width={60}
                    height={60}
                    alt="location"
                  />
                </div>
                <h4 className={`${contactStyle.contact_card_heading} mt-24`}>
                  Consultative Support{" "}
                </h4>
                <p className={contactStyle.contact_card_p}>
                  Expert advice and insights to help clients make informed
                  purchasing decisions.{" "}
                </p>
              </div>
            </Col>
          </Row>

          <Row
            justify="center"
            align="middle"
            className="w-100 my-48"
            gutter={[16, 40]}
          >
            <div className={styles.venture}>
              <h1 className={styles.venture_heading}>New Venture</h1>
              <p className={styles.venture_description}>
                Our consortium is working on a specialty Bone & Joint Hospital
                in Indonesia, in collaboration with Shalby Hospitals in India{" "}
              </p>
            </div>
          </Row>
          <Row align="middle" className="w-100 my-48" gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <div
                className={styles.article_container}
                style={{
                  background: `url(${article1.src}), linear-gradient(12.77deg, rgba(39, 39, 39, 0.9) 28.12%, rgba(39, 39, 39, 0) 74.46%)`,
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span> Health Tips</span>
                <div>
                  <Link
                    href={
                      "https://www.technologynetworks.com/neuroscience/news/a-morning-workout-helps-power-your-brain-until-night-394180?utm_source=chatgpt.com"
                    }
                    target="_blank"
                  >
                    <h3 className={styles.article_heading}>
                      Workout Every Morning
                    </h3>
                  </Link>
                  <p className={styles.article_desc}>
                    workout can increase endurance, Imperdiet feugiat id platea
                    amet lectus augue tempor leo
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div
                className={styles.article_container}
                style={{
                  background: `url(${article2.src}), linear-gradient(12.77deg, rgba(39, 39, 39, 0.9) 28.12%, rgba(39, 39, 39, 0) 74.46%)`,
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span> Article</span>
                <div>
                  <Link
                    href={
                      "https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-management/art-20047963?utm_source=chatgpt.com"
                    }
                    target="_blank"
                  >
                    <h3 className={styles.article_heading}>
                      Steps to Fight Diabetes
                    </h3>
                  </Link>
                  <p className={styles.article_desc}>
                    Here are some ways that can be done to manage blood sugar
                    levels in diabetes sufferers:
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div
                className={styles.article_container}
                style={{
                  background: `url(${article3.src}), linear-gradient(12.77deg, rgba(39, 39, 39, 0.9) 28.12%, rgba(39, 39, 39, 0) 74.46%)`,
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span>Health</span>
                <div>
                  <Link
                    href={
                      "https://www.metropolisindia.com/blog/preventive-healthcare/hypertension"
                    }
                    target="_blank"
                  >
                    <h3 className={styles.article_heading}>
                      Hypertension (High Blood Pressure)
                    </h3>
                  </Link>
                  <p className={styles.article_desc}>
                    Hypertension or high blood pressure is a health condition
                    where the blood exerts more pressure, higher than normal.
                  </p>
                </div>
              </div>
            </Col>{" "}
          </Row>
        </div>
      </div>
    </>
  );
}
