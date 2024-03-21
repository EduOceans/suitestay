import { Button } from 'primereact/button';
import './ImageButton.css';
import PropTypes, { useState } from 'react';

function ImageButton ({ imgUrl, heading, subHeading, btnTxt }) {
    return (
        <div className='image-wrapper'>
            <img src={imgUrl} className='rounded-img' alt={heading}/>
            <div className='text-wrapper'>
                <div className='heading-txt'>{heading}</div>
                <div className='subheading-txt'>{subHeading}</div>
            </div>
            <div className='button'>
                <Button label={btnTxt} outlined />
                {/* <Button className="btn" label={btnTxt} icon="pi pi-check" /> */}
            </div>
        </div>
    )
}

ImageButton.propTypes = {
  imgUrl: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  btnTx: PropTypes.string,
}
export default ImageButton;