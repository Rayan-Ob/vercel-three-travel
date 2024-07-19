import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import ServiceItem from '../../Components/ServiceItem/ServiceItem'
import ExploreSection from '../../Components/ExploreSection/ExploreSection'
import ExploreItem from '../../Components/ExploreItem/ExploreItem'
import TrendyCard from '../../Components/TrendyCard/TrendyCard'


// photos
import HeroPage1 from "../../../public/images/HeroPage1.png"
import citiesPhoto from "../../../public/images/ExploreCities.jpg"
import nature from "../../../public/images/nature.webp"
import flag from "../../../public/images/flag.svg"
import plane from "../../../public/images/plane.svg"
import hand from "../../../public/images/hand.svg"
import doctor from "../../../public/images/doctor.svg"
import swither from "../../../public/images/switherland.png"
import switherflag from "../../../public/images/switherFlag.svg"
import amazon from "../../../public/images/amazon.png"
import amazonflag from "../../../public/images/brazilFlag.svg"
import giza from "../../../public/images/giza.png"
import gizaflag from "../../../public/images/egyptFlag.svg"







function HomePage() {
  let serviceCards =
  [{ img: flag, service: "Guided Tours", desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },
  { img: plane, service: "Best Flights Options", desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },
  { img: hand, service: "Religious Tours", desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },
  { img: doctor, service: "Medical insurance", desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." }
  ]

// Array Trendy card in home page
let trendyCards =
  [
    { image: swither, flag: switherflag, daysNumber: 8, people: 30, rate: "100%", country: "Switzerland", desc: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." },
    { image: amazon, flag: amazonflag, daysNumber: 8, people: 60, rate: "88%", country: "Amazon", desc: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." },
    { image: giza, flag: gizaflag, daysNumber: 8, people: 120, rate: "100%", country: "Giza", desc: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." }
  ]
  return (
    <div>

      <Hero background={HeroPage1} title="No matter where you’re going to, 
        we’ll take you there" classTitle="title-gray">
      </Hero>

      {/* Services section */}
      <Services desc="CATEGORY" title="We Offer Best Services" gridService="grid-services-category" >
        {serviceCards.map((element, index) => {
          return (
            <ServiceItem key={index} image={element.img} service={element.service} description={element.desc} />
          )
        })}
      </Services>

      {/* Explore Section */}
      <ExploreSection>
        <ExploreItem background={nature} explore="Explore Nature" />
        <ExploreItem background={citiesPhoto} explore="Explore Cities" />
      </ExploreSection>


      {/* Trendy Section */}
      <Services desc="TRENDY" title="Our Trending Tour Packages" gridService="grid-services-trendy">
        {trendyCards.map((element, index) => {
          return (
            <TrendyCard key={index} image={element.image} flag={element.flag} days={element.daysNumber} people={element.people}
              rate={element.rate} country={element.country} description={element.desc} />
          )
        })}
      </Services>


    </div>




  )
}

export default HomePage