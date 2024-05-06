import Hero from "../Components/Hero"

import CheckOutMyWork from "../Components/CheckWork"
import AboutMe from "../Components/AboutMe"
import PostBanner from "../Components/PostBanner"
import PostGrid from "../Components/PostGrid"
// import LatestBlogPosts from "../Components/Blog/LastestBlog"

const Home = () => {

  return (
    <div className="m-5 md:m-0 lg:m-0">
      <Hero />
      <AboutMe />
      <CheckOutMyWork />
      <PostBanner />
      <PostGrid />
      {/* <LatestBlogPosts /> */}
    </div>

  )
}

export default Home
