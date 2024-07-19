import aboutPagePhoto from "../../../public/images/aboutPage.png"
import TourPlanImg from "../../../public/images/tour-plan.png"
import trend from "../../../public/images/trend-tourplan-about.png"


import Hero from "../../Components/Hero/Hero"
import TourPlan from "../../Components/TourPlan/TourPlan"
import VideoComponent from "../../Components/VideoComponent/VideoComponent"


const AboutPage = () => {
  return (
    <div>
      <Hero background={aboutPagePhoto} title="About Us" classTitle="title-white"></Hero>
      
      {/* Europe Sightseeing Tours section */}
      <TourPlan subtitle="Promotion" title="We Provide You Best Europe Sightseeing Tours" desc="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
        image={TourPlanImg} direction="row" displaydiv="none" padding="70px 0 70px 70px"></TourPlan>

      {/* video part */}
      <VideoComponent />

      {/* Popular Tour Plans */}
      <TourPlan subtitle="Trend" title="Our Popular Tour Plans" desc="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium."
        image={trend} direction="row-reverse" displaybtn="none" padding="70px"></TourPlan>
    </div>

  )
}

export default AboutPage