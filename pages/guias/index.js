import Container from "../../components/layout/container";
import Layout from "../../components/layout/layout";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Angular guia con {CMS_NAME}</title>
        </Head>
        <Container>Este lo llene en el index.js de /guias</Container>
      </Layout>
    </>
  );
}