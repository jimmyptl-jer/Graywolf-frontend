import Hero from "../Components/Hero"

import CheckOutMyWork from "../Components/CheckWork"
import AboutMe from "../Components/AboutMe"
import RecentProjects from "../Components/RecentProjects"
import LatestBlogPosts from "../Components/Blog/LastestBlog"
import Tiles from "../Components/Tiles"
const Home = () => {

  return (
    <div className="m-5 md:m-0 lg:m-0">
      <Hero />
      <AboutMe />
{/*       <Tiles /> */}
      <RecentProjects />
      <CheckOutMyWork />
      <LatestBlogPosts />
    </div>

  )
}

export default Home
