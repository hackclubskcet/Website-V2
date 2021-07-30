import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Navbar from "../../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react"

export default function Index({ allPosts }) {
  return (
    <>
    <ChakraProvider>
    <Navbar />
      <Layout>
        <Head>
          <title>Hackclub blog | Main</title>
        </Head>
        <Container>
          <Intro />
          <MoreStories posts={allPosts} />
        </Container>
        </Layout>
    </ChakraProvider>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
