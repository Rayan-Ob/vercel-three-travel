import BoxPackage from "../../Components/BoxPackage/BoxPackage"
import Hero from "../../Components/Hero/Hero"
import "./PackagePageStyle.css"

import heroimg from "../../../public/images/packagePage.png"

import maldive from "../../../public/images/maladive.png"
import swith from "../../../public/images/swith.png"
import berlin from "../../../public/images/berlin"
import torrento from "../../../public/images/torronto.png"
import baku from "../../../public/images/baku.png"
import chiense from "../../../public/images/chiense.png"


const PackagesPage = () => {
    return (
        <div>
            <Hero background={heroimg} title="Travel With Us" classTitle="title-white"></Hero>

            <div className="boxs-package-container">
                <BoxPackage image={maldive} date="27, September 2022" people="30+ People" country="Maldives" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="3000 $" rate="5.0" />
                <BoxPackage image={swith} date="13, October 2023" people="120+ People" country="Switzerland" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1290 $" rate="4.9" />
                <BoxPackage image={berlin} date="2, November 2022" people="139+ People" country="Berlin" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="2790 $" rate="5.0" />
                <BoxPackage image={torrento}date="14, December 2022" people="50+ People" country="Torronto" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1110 $" rate="4.0" />
                <BoxPackage image={baku} date="20, September 2022" people="80+ People" country="Baku" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1220 $" rate="4.5" />
                <BoxPackage image={chiense} date="27, August 2022" people="100+ People" country="Chinese" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="2500 $" rate="5.0" />
            </div>
        </div>
    )
}

export default PackagesPage