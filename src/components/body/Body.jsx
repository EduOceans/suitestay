import ImageButton from "../imageButton/ImageButton"
import './Body.css';
import Anouncement from "../anouncement/Anouncement";
import About from "../about/About";
import History from "../history/History";

function Body() {
    return (
        <div>
            <section className="body-container">               
                    <ImageButton 
                        imgUrl={"https://www.iconsuites.com/_storageWeb_/n/17804265468969/ig/5497749322264/b/692033667068/isk/half/ZON_1994-Edit_wide.jpeg"}
                        heading={"Gallery"}
                        btnurl={"/Gallery"}
                        subHeading={"You can browse our wonderful suites"}
                        btnTxt={"View suites"}/>
                        
                    <ImageButton
                        imgUrl={"https://webrezpro.com/wp-content/uploads/2022/11/HoldThePhone-BeConfident.jpg"}
                        heading={"Check availability"}
                        subHeading={"Wherever you are in the world, book now one of our suites"}
                        btnTxt={"Book"}/>
            </section>
            <About />
            <History />
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