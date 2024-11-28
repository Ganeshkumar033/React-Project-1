const Hero = () =>{
    return(
        <main className="hero">
            <div className="hero-content">
                <h1 className="heading">Ganesh-Shoes-Shops</h1>
                <p className="para1">Kotwali-Gali,Sadar-Bazar,Jagdishpur,Bhojpur,Bihar</p>

                <div className="hero-btn">
                    <button>Shop-Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="Shopping">
                   <p className="para2">All Avilaible Here</p>
                   <div className="brand-icon">
                    <img src="/images/amazon.png.png" alt="amazon-icon" className="img1"/>
                    <img src="/images/flipkart.png.png" alt="flipkart-icon"  className="img2"/>
                   </div>
                </div>

            </div>

            <div className="hero-image">
            <img src="/images/shoe_image.png.png" alt="Shoe-Image"/>
            </div>
        </main>
    );
}

export default Hero;