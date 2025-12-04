"use client";
import { Col, Flex, Row } from "antd";
import React, { Suspense } from "react";
import Image from "next/image";
import SearchBox from "../common/SearchBox";
import Link from "next/link";

const Header = () => {
  return (
    <Row className="w-100">
      <Flex
        justify="space-between"
        align="middle"
        style={{
          padding: "20px 24px 12px 24px",
          backgroundColor: "#ffffff",
          width: "100%",
          position: "fixed",
          zIndex: 1000,
          top: 0,
        }}
      >
        <Col span={6}>
          <Link href="/">
            <Image
              src="/assets/icons/header-logo.svg"
              alt="logo"
              priority
              width={100}
              height={50}
            />
          </Link>
        </Col>
        <Col span={12}>
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBox />
          </Suspense>
        </Col>
        <Col span={2}></Col>
        <Col span={4}>
          {/* <Image
            src="/assets/icons/header-cart.svg"
            alt="cart"
            priority
            width={100}
            height={50}
          /> */}
        </Col>
      </Flex>
    </Row>
  );
};

export default Header;

// import React from 'react';
// import { SettingOutlined } from '@ant-design/icons';
// import { Cascader, Input, Select, Space } from 'antd';
// const { Option } = Select;

// const App = () => (
//   <Space direction="vertical">
//     <Input addonBefore={selectBefore}  defaultValue="mysite" />

//     <Input
//       addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
//       defaultValue="mysite"
//     />
//   </Space>
// );
// export default App;
