import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/28514-mars-2020-nasa-mission.json';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${currentPage}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const openImageInNewWindow = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  if (!photoData) return <div />;

  const totalPhotos = photoData.photos.length;
  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  return (
    <>
      <Player
        autoplay
        loop
        src={animation}
        className='curiosity'
        style={{ height: '400px', width: '400px', paddingTop: '5rem', marginBottom: '-14rem' }}
      ></Player>
      <div className='container-post'>
        {photoData.photos.slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage).map((post, index) => {
          return (
            <div className='post-card' key={index}>
              <span className='post-date'>Date: {post.earth_date}</span>
              <div className='post-name'>Camera: {post.camera.full_name}</div>
              <div className='post-rover'>Robot: {post.rover.name}</div>
              <img
                className='post-image'
                src={post.img_src}
                alt='illustration'
                onClick={() => openImageInNewWindow(post.img_src)}
              />
            </div>
          );
        })}
      </div>
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>
        <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
        <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default NasaPhoto;

