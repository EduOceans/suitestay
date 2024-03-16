import "./Anouncement.css";
import Image from "../image/Image";

function Anouncement() {
    return (
    <div className="anouncement-container">
                <Image
                imgUrl={"https://www.whatsonnetwork.co.uk/uploads/800x600/953c40411cf5099f7a7050033575e0d4.jpg"} className="eagles-img"/>
                <div>
                   <p className="anouncement-title">We're hosting: Tribute to Eagles!</p>
                   <p className="anouncement-txt">Hotel California, a seven piece ensemble of musicians will perform their spectacular new critically acclaimed show that gives you a concert experience of 100 minutes of pure Eagles nostalgia. You’ll return to a dark desert highway, cool wind in your hair, or stand on that street corner in Winslow, Arizona when you join Hotel California as they faithfully re-create The Eagles and their Californian Sunshine Rock sound. Expect a set that includes tracks from the outstanding Long Road Out Of Eden album. The Eagles’ music is timeless, appealing to audiences of every age, bringing back memories and touching the hearts and souls of each new generation. This concert promises to be a fantastic night to remember for all Eagles fans, young and old, new or long-standing.</p> 
                </div>
            </div>
)}

export default Anouncement;