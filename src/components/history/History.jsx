// import './History.css';

function History() {
    return (
        <div className='history-container'>
            <div className='history-title'>
                <h1>Infinite harmony</h1>
            </div>
            <div className="history-txt">
                <h3> Founded in the early 1900s, Suitestay has evolved from a humble guesthouse to a renowned beachfront retreat. With its iconic sea views and lush gardens, this coastal oasis offers a timeless escape into luxury. Today, Suitestay stands as a beacon of relaxation and sophistication, inviting guests to create cherished memories amidst the beauty of the Bahamas.</h3>
            </div>
            <div className='rooftop-container'>
                <div className='text-container'>
                    <h5 className='rooftop-heading'>ROOFTOP</h5>
                    <h2 className='rooftop-title'>AWARD WINNING PARADISE</h2>
                    <p className='rooftop-text'>At our Sea View Rooftop, indulge in panoramic ocean vistas. Savor drinks with the sea as your backdrop, embracing tranquility and natural beauty.</p>
                </div>
                <div className='cocktail-container'>
                <img className='cocktail' src='src/assets/cocktail.jpeg'alt='cocktail'></img>
                </div>
                <div className='cheers-container'>
                <img src='src/assets/cheers.jpeg' className='cheers' alt='cheers'></img>
                </div>
            </div>
        </div>
    )
}

export default History;