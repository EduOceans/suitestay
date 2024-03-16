import ImageButton from "../imageButton/ImageButton"
import './Body.css';
import Image from "../image/Image";
import Anouncement from "../anouncement/Anouncement";

function Body() {
    return (
        <div>
            <section className="body-container">               
                    <ImageButton 
                        imgUrl={"https://www.iconsuites.com/_storageWeb_/n/17804265468969/ig/5497749322264/b/692033667068/isk/half/ZON_1994-Edit_wide.jpeg"}
                        heading={"Gallery"}
                        subHeading={"You can browse our wonderful suites"}
                        btnTxt={"View suites"}/>
                    <ImageButton
                        imgUrl={"https://webrezpro.com/wp-content/uploads/2022/11/HoldThePhone-BeConfident.jpg"}
                        heading={"Check availability"}
                        subHeading={"Wherever you are in the world, book now one of our suites"}
                        btnTxt={"Book"}/>
            </section>
            <Anouncement />
            <section>
                <div className="intro-txt">
                    <p> Welcome to Suitestay, your premier destination for unparalleled luxury and comfort. Nestled in the heart of bustling city life or surrounded by serene natural landscapes, our collection of boutique hotels offers a distinctive blend of sophistication and warmth.
                        At Suitestay, we understand that every guest is unique, which is why we pride ourselves on providing personalized experiences tailored to your desires. Whether you're seeking a romantic escape, a family adventure, or a productive business trip, our attentive staff is dedicated to exceeding your expectations at every turn.
                        Indulge in our meticulously designed suites, each thoughtfully curated to offer the ultimate in relaxation and refinement. From plush bedding and modern amenities to panoramic views and bespoke furnishings, every detail has been carefully considered to ensure your stay is nothing short of extraordinary.
                        Beyond the comfort of your suite, Suitestay invites you to savor exquisite culinary delights at our renowned restaurants, unwind with a rejuvenating spa treatment, or explore the vibrant local culture with our expertly curated excursions.
                        Experience the epitome of luxury hospitality with Suitestay, where every moment is crafted with your utmost satisfaction in mind. Welcome to a world of elegance, where unforgettable memories await.</p>
                </div>
            </section>
            <section>
                Icons
            </section>
            <section>
                {/* <div className="map">
                    {/* <img src="https://cdn.buttercms.com/Ym1iRZNbRHOeWv0X4x3w" alt="map"> */}
                    {/* </img>
                </div> */} 
            </section>
        </div>
    )
}

export default Body;