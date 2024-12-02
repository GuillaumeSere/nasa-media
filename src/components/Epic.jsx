import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/107321-rocket.json';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Epic = () => {
  const [epic, setEpic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 16;

  useEffect(() => {
    fetchPlanete();
    async function fetchPlanete() {
      const res = await fetch(`https://images-api.nasa.gov/search?q=apollo%2022`);
      const data = await res.json();
      setEpic(data);
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

  if (!epic) return <div />;

  const totalPhotos = epic.collection.items.length;
  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  return (
    <>
      <Player
        autoplay
        loop
        src={animation}
        style={{ height: '300px', width: '300px', marginBottom: '-5rem', paddingTop: '2rem' }}
      ></Player>
      <div className='container-post-epic'>
        {epic.collection.items.slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage).map((post, index) => {
          return (
            <div className='epic-card' key={index}>
              <div className='epic-title'>{post.data[0].title}</div>
              <img
                className='epic-image'
                src={post.links[0].href}
                alt=''
                onClick={() => openImageInNewWindow(post.links[0].href)}
              />
              <div className='epic-description'>{post.data[0].description}</div>
            </div>
          );
        })}
      </div>
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'selected' : ''}
          >
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

export default Epic;

