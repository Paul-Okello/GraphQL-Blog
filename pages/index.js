import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index'

const Home = ({ posts }) => {
  return (
    <div className="container  mx-auto  h-auto scroll-smooth px-10">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className=" grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 mb-3 lg:col-span-8">
          {' '}
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 mb-3 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            {' '}
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
