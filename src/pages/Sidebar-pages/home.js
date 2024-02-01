import React, { useRef, useState, useEffect } from 'react';
import '../styles/home.css';
import img1 from '../../images/Caro/Fab.jpg';
import img2 from '../../images/Carbonized.jpg';
import img3 from '../../images/Yarn1.jpg';
import img4 from '../../images/Yarn2.jpg';
import img5 from '../../images/wools.jpg';
import img6 from '../../images/Caro/lineyar1.jpg';
import img7 from '../../images/Caro/Loosewool.jpg';
import img11 from '../../images/Caro/varda.jpg';
import img12 from '../../images/Caro/oswal.jpg';
import img13 from '../../images/Caro/Raw.jpg';
import img14 from '../../images/Caro/mar.jpg';
import img15 from '../../images/Caro/acc.jpg';
import img16 from '../../images/Caro/taj.jpg';
import img17 from '../../images/Caro/mark.jpg';
const Home = () => {
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const videoRef = useRef(null);

  // Array of image sources
  const images = [
    { src: img1, quote: '"Embrace the beauty of simplicity"' },
    { src: img2, quote: '"Explore the world of natural fibers"' },
    { src: img3, quote: '"Create warmth and comfort with yarn"' },
    { src: img4, quote: '"Crafting dreams with every stitch"' },
    { src: img5, quote: '"Dive into a palette of colorful wools"' },
    { src: img6, quote: '"Fashion your own unique tops"' },
    { src: img7, quote: '"Knitting memories that last a lifetime"' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  return (
    <div className="Home">
      <div className="Caro">
  <div className="quote-overlay">
    <img src={images[currentImage].src} alt={`carousel-image-${currentImage}`} />
    <p className="image-quote">{images[currentImage].quote}</p>
  </div>
</div>
      <div className="count">
        <div className="score"><span className="span"></span><p> k</p><h1>Total Products</h1></div>
        <div className="score"><span className="span"></span><p> k</p><h1>Happy Customers</h1></div>
        <div className="score"><span className="span"></span><p> k</p><h1>Sellers</h1></div>
      </div>  
      <div className="popular">
        <h1>POPULAR CATEGEORIES</h1>
        <div className="image-container">
            <div className="image-wrapper1">
                <img src={img11}/>
                <p className="description">Vardhaman<br/>26 Products</p>
            </div>
            <div className="image-wrapper1">
                <img src={img12}/>
                <p className="description">Oswal<br/>14 Products</p>
            </div>
            <div className="image-wrapper1">
                <img src={img13}/>
                <p className="description1">Raw Wool<br/>10 Products</p>
            </div>
            <div className="image-wrapper1">
            <img src={img17}/>
                <p className="description">Abc Wools<br/>7 Products</p>
            </div>
            <div className="image-wrapper1">
            <img src={img14}/>
                <p className="description">Macrame<br/>10 Products</p>
            </div>
            <div className="image-wrapper1">
            <img src={img15}/>
                <p className="description">Accessories<br/>39 Products</p>
            </div>
            <div className="image-wrapper1">
            <img src={img16}/>
                <p className="description">Taj<br/>5 Products</p>
            </div>
        </div>
    </div>
    <div className="dow">
      <div className="qu">
        <h1>"Wool, the silent artisan of warmth, wraps us in a tapestry of comfort, woven through centuries of tradition and craftsmanship"</h1>
      </div>
      <div className="player">
        <video
          ref={videoRef}
          src={process.env.PUBLIC_URL + '/Videos/woolpro.mp4'}
          controls={false}
          autoPlay={true}
          loop={true}
          onEnded={handleVideoEnd}
        />
      </div>
    </div>
    </div>
  );
};

export default Home;
