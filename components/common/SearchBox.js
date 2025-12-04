"use client";
import React, { Suspense } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
import { Catogery } from "@/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data";
const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const catogery = pathname.split("/")[2];
  const [search, setSearch] = React.useState(searchParams.get("search") || "");

  const onCatogeryChange = (value) => {
    router.push(`/catalogues/${value}${search ? `?search=${search}` : ""}`);
  };
  const selectBefore = (
    <Select
      defaultValue={catogery || "all"}
      style={{ minWidth: 160 }}
      onChange={(e) => onCatogeryChange(e)}
    >
      <Select.Option value={"all"}>All Categories</Select.Option>
      {Catogery.map((item) => (
        <Select.Option value={item.slug}>{item.name}</Select.Option>
      ))}
    </Select>
  );

  const handleSearch = (e) => {
    setSearch(e);
    console.log(e);
    if (e.length < 1 && !pathname.includes("catalogues")) return;
    router.push(`/catalogues/${catogery || "all"}${e ? `?search=${e}` : ""}`);
  };
  return (
    <Space direction="vertical" size="middle" className="w-100">
      <Space.Compact className="w-100">
        <Input.Search
          className="w-100 custom-search"
          addonBefore={selectBefore}
          placeholder="What are you looking for?"
          allowClear
          onSearch={(e) => handleSearch(e)}
          defaultValue={search}
          size="middle"
        />
        {/* <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          size="large"
        ></Button> */}
      </Space.Compact>
    </Space>
  );
};
export default SearchBox;
