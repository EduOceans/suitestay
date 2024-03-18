import { Button } from 'primereact/button';
import './ImageButton.css';
import { useState } from 'react';

function ImageButton ({ imgUrl, heading, subHeading, btnTxt }) {
    return (
        <div>
            <img src={imgUrl} className='rounded-img ' alt={heading}/>
            <div className='heading-txt'>{heading}</div>
            <div className='subheading-txt'>{subHeading}</div>
            <div className='button'>
                <Button className="btn" label={btnTxt} icon="pi pi-check" />
            </div>
        </div>
    )
}

export default ImageButton;