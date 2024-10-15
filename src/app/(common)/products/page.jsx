import { PageHeader } from '@/components/page-header'
import { ProductList } from '@/components/product-list';
import React from 'react'

export const metadata = {
	title: "Products",
	description: "Cheap electronic devices",
};


export const revalidate = 30;

const Page = async () => {

  const res = await fetch("https://66c395ffd057009ee9c0b957.mockapi.io/products");
  const data = await res.json();

  return (
    <>
      <PageHeader title= "Products" />
      <ProductList products={data}/>
    </>
  )
}

export default Page