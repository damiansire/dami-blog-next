import Container from "@layout/container";
import Layout from "@layout/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Header from "@layout/header";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Damian Blog Example with {CMS_NAME}</title>
        </Head>
        <Header />
        <Container>Esto lo llene en el index.js que esta en /pages</Container>
      </Layout>
    </>
  );
}
