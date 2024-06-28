"use client"
import styled from "styled-components";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { DefaultPagelayout } from "@/components/defaul-page-layout";


const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;  
`


export default function Home() {
  return (
    <DefaultPagelayout>
    <PageWrapper>
      <FilterBar></FilterBar>
      <ProductsList />
    </PageWrapper>
    </DefaultPagelayout>
  );
}
