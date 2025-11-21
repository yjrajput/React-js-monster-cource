

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
                <img src='https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGR8ZW58MHx8MHx8fDA%3D' alt="world-image" />
            </div>
        </div>
    </main>
  )
}

export default Home