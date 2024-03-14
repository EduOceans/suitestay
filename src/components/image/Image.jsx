import './Image.css';

function Image ({ imgUrl }) {
    return (
        <div >
            <img src={imgUrl} className='img' alt='generic'/>
        </div>
    )
}

export default Image;