import { Button } from 'primereact/button';
import './ImageButton.css';

function ImageButton ({ imgUrl, heading, subHeading, btnTxt }) {
    return (
        <div>
            <img src={imgUrl} className='rounded-img' alt={heading}/>
            <div className='heading-txt'>{heading}</div>
            <div className='subheading-txt'>{subHeading}</div>
            <Button label={btnTxt} icon="pi pi-check" />
        </div>
    )
}

export default ImageButton;