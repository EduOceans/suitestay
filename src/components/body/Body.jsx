import MainImage from "../main-image/Main-Image";
import ImageButton from "../imageButton/ImageButton"
import './Body.css';

function Body() {
    return (
        <div>
            <section className="main-image">
                <MainImage />
            </section>
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
        </div>
    )
}

export default Body;