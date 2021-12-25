import Container from "../components/layout/container";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Damian Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>Esto lo llene en el index.js que esta en /pages</Container>
      </Layout>
    </>
  );
}
