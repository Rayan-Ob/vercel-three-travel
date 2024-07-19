import "./Footer.css"
import messenger from "./FooterImages/messenger.svg"
import linked from "./FooterImages/linkedin.svg"
import twoo from "./FooterImages/twoo.svg"
import twitter from "./FooterImages/twitter.svg"
import logo from "./FooterImages/logoFooter.png"

// Arrays
let arrayCompany = ["About Us", "Careers", "Blog", "Pricing"]
let dest = ["Maldives", "Los Angelas", "Las vegas", "Torronto"]

function Footer() {
    return (
        <div className="footer-div">
            <div className="footer">
                <div id="footer-logo">
                    <img src={logo} alt="" id="logo" />
                    <p>Travel helps companies manage payments easily.</p>
                    <div className="footer-icon-div">
                        <img src={linked} alt="" className="footer-icon" />
                        <img src={messenger} alt="" className="footer-icon" />
                        <img src={twitter} alt="" className="footer-icon" />
                        <img src={twoo} alt="" className="footer-icon" />
                    </div>
                </div>

                <div>
                    <h4>Company</h4>
                    <ul>
                        {arrayCompany.map((element, index) => {
                            return (
                                <li key={index}>{element}</li>
                            )
                        })}

                    </ul>
                </div>

                <div id="footer-right">
                    <h4>Destinations</h4>
                    <ul>
                        {dest.map((element, index) => {
                            return (
                                <li key={index}>{element}</li>
                            )
                        })}

                    </ul>
                </div>
            </div>

            <p id="copyright">
                Copyright @ Xpro 2023 All Rights Reserved.
            </p>


        </div>
    )
}

export default Footer