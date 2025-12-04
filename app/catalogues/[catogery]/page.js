"use client";
import { Col, Row, Select, Breadcrumb, Collapse, Checkbox } from "antd";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/catalogue.module.css";
import { products, Catogery } from "@/data";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { usePathname, useSearchParams } from "next/navigation";

const itemsPerPageOptions = [6, 12, 18, 24];

const CataloguesList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const catogery = pathname.split("/")[2];
  const search = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);
  const [checkedList, setCheckedList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const onChange = (list) => {
    setCheckedList(list);
    setFilteredProducts(
      products.filter((item) => {
        if (list.length === 0) {
          return item;
        } else {
          return list.includes(item.Category);
        }
      })
    );
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // reset to first page when changing items per page
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const items = [
    {
      key: "1",
      label: (
        <p
          style={{
            fontFamily: " Rokkitt",
            fontWeight: " 700",
            fontSize: " 16px",
            lineHeight: " 24px",
          }}
        >
          Kategori
        </p>
      ),
      children: (
        <>
          {" "}
          <Checkbox.Group
            options={Catogery.map((item) => ({
              label: item.name,
              value: item.name,
            }))}
            value={checkedList}
            onChange={onChange}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    const filtered = products.filter((item) => {
      if (catogery === "all") {
        return item["Product Name"]
          .toLowerCase()
          .includes(search.toLowerCase());
      } else {
        const categoryName = Catogery.find((c) => c.slug === catogery)?.name;
        return (
          item.Category === categoryName &&
          item["Product Name"].toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    setFilteredProducts(filtered);
  }, [catogery, search]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.catalogue_card_container}>
        <Row justify="center" align="middle" className="w-100">
          <Col span={24}>
            <div className={styles.catalogue_banner}>
              <h1 className={styles.heading}>Our Products</h1>
              <div className={styles.catalogue_banner_image}></div>
            </div>
          </Col>
        </Row>
        <div className={styles.catalogue_sub_container}>
          <Row className="w-100 px-24 " gutter={[32, 16]}>
            <Col md={6} xs={24} className="w-100">
              <div className={styles.catalogue_filter}>
                <Breadcrumb
                  separator=">"
                  items={[
                    {
                      title: "Home",
                      href: "/",
                    },
                    {
                      title: (
                        <p style={{ color: "#5F59FF" }}>
                          {Catogery.find((item) => item.slug === catogery)
                            ?.name || "All Products"}
                        </p>
                      ),
                    },
                  ]}
                  style={{
                    marginBottom: "16px",
                  }}
                />
                <div className={styles.catalogue_filter_container}>
                  <h4 className={styles.catalogue_filter_heading}>Filters</h4>
                  <Collapse
                    items={items}
                    bordered={false}
                    defaultActiveKey={["1"]}
                    style={{
                      background: "transparent",
                    }}
                    expandIconPosition="end"
                  />
                </div>
              </div>
            </Col>
            <Col md={18} xs={24} className={`${styles.catalogue_list} w-100`}>
              {selectedProducts?.length == 0 ? (
                <Row gutter={[16, 16]} justify="center" align="middle">
                  <h1>No Items Found!</h1>
                </Row>
              ) : (
                <>
                  <Row
                    gutter={[16, 16]}
                    justify="center"
                    align="middle"
                    style={{ marginTop: "36px" }}
                  >
                    {/* <Col span={24}>
                    {" "}
                    <span>View As</span>
                  </Col> */}
                    {selectedProducts.map((item, index) => (
                      <Col key={index} md={8} xs={24} sm={12}>
                        <div className={styles.catalogue_card}>
                          <div className={styles.catalogue_card_image}>
                            <Image
                              src={`/product-image/${item.Category}/${item.Category}-${item.id}.jpg`}
                              width={230}
                              height={145}
                              alt={`${item.Category}-${item.id}`}
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <h4 className={styles.catalogue_card_heading}>
                            {item["Product Name"]}
                          </h4>
                          <p className={styles.card_icon_desc}>
                            <Image
                              src="/assets/icons/card_icon.svg"
                              width={16}
                              height={16}
                              alt="price-tag"
                            />
                            <span>Jakarta Pusat</span>
                          </p>
                          <p className={styles.card_rating_desc}>
                            <Image
                              src="/assets/icons/star.svg"
                              width={16}
                              height={16}
                              alt="rating"
                            />
                            <span>
                              {(Math.random() * (5 - 3.5) + 3.5).toFixed(1)}
                            </span>
                            <span className={styles.card_rating_desc_span}>
                              {(Math.random() * (5 - 1) + 1).toFixed(1)} rb+
                              terjual
                            </span>
                          </p>

                          {/* <p className={styles.price_stock}>
                    <span className={styles.price}>Rp 10.000</span>
                    <span className={styles.stock}>100 in Stock</span>
                  </p> */}
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Row
                    justify="space-between"
                    align="middle"
                    className="mt-4"
                    style={{ marginTop: "24px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                      }}
                    >
                      <div>
                        <span>Items per page:</span>
                        <Select
                          value={itemsPerPage}
                          onChange={handleItemsPerPageChange}
                          options={itemsPerPageOptions.map((num) => ({
                            value: num,
                            label: num,
                          }))}
                          size="small"
                          style={{ width: 80 }}
                        />
                      </div>
                      <div>
                        <span>
                          {currentPage} of {totalPages}
                        </span>

                        <LeftOutlined
                          onClick={() => handlePageChange(currentPage - 1)}
                          style={{
                            cursor: "pointer",
                            opacity: currentPage === 1 ? 0.5 : 1,
                          }}
                        />
                        <RightOutlined
                          onClick={() => handlePageChange(currentPage + 1)}
                          style={{
                            cursor: "pointer",
                            opacity: currentPage === totalPages ? 0.5 : 1,
                          }}
                        />
                      </div>
                    </div>
                  </Row>
                </>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </Suspense>
  );
};

export default CataloguesList;
