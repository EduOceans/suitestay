import { Button } from 'primereact/button';
import './ImageButton.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ImageButton ({ imgUrl, heading, subHeading, btnTxt, btnurl }) {
    return (
        <div>
            <img src={imgUrl} className='rounded-img ' alt={heading}/>
            <div className='heading-txt'>{heading}</div>
            <div className='subheading-txt'>{subHeading}</div>
            <div className='button'>
               < NavLink to = {btnurl}>
                <Button className="btn" label={btnTxt} icon="pi pi-check" />
                </NavLink>
            </div>
        </div>
    )
}

export default ImageButton;