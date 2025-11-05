import React from 'react'

const Card = () => {
    const age = 19;

    const fun = () =>{
        if(age > 18) return 'Watch Now'
        else return 'Not available'
    }
  return (
    <div className='main-container'>
        <div className='container'>
            <div className='image-container'>
                <img src="https://ntvb.tmsimg.com/assets/p17580186_b_h8_ak.jpg?w=960&h=540" alt="witcher" />
            </div>

            <div className='about-container'>
                <h1>The Witcher</h1>
                <p>The Witcher is a fantasy drama television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series[a] by Polish author Andrzej Sapkowski. Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg, and Princess Ciri. It stars Henry Cavill and Liam Hemsworth as Geralt, with Anya Chalotra and Freya Allan.
                </p>
                <p>Rating: <span>7.9</span></p>
                <button>{fun()}</button>
            </div>
        </div>

        
    </div>
  )
}

export default Card