import Facts from "../components/Facts"
import worldimage from '../../public/world-image.avif'

const Home = () => {
  return (
    <main className='hero-section'>
        <div className='container hero-container'>
            <div className='content-container'>
                <h1>
                  Explore the World, One Country at a Time.
                </h1>
                <p>Discover the history, culture, and beauty of every nation sort, search and filter throught country to find the details you need.</p>

                <div className='btn-container'>
                  <button>Start Exploring</button>
                </div>
            </div>

            <div className='image-container'>
                <img src={worldimage} alt="world-image" />
            </div>
        </div>

        <Facts/>
    </main>
  )
}

export default Home