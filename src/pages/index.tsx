import Head from "next/head";
import React from "react";
import Countries from "@/components/Countries/Countries";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta
          name="description"
          content="Info about countries around the world here!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SubTitle>Countries</SubTitle>
        <Countries />
      </main>
    </>
  );
}

const SubTitle = styled.h2`
  text-align: center;
  margin: 64px;
  font-size: 2.5rem;
`;
