import React, { useState, useEffect, useContext } from 'react';
import Parse from '../../parse.js';
import ProductCard from './ProductCard.jsx';
import Outfits from './Outfits.jsx';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import styled, { ThemeProvider } from "styled-components";

const Related = ({ selectedProduct, addToOutfit, selectStyle, avgRating, starRender, trackClick }) => {

  const [relatedIds, setRelatedIds] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [leftCarousel, setLeftCarousel] = useState([]);
  const [rightCarousel, setRightCarousel] = useState([]);
  const [viewCarousel, setViewCarousel] = useState([]);

  useEffect(() => {
    Parse.getAll('products', `/${selectedProduct.id}/related`)
      .then((relatedProducts) => {
        let cleanedData = [];
        relatedProducts.data.forEach(id => {
          if (!cleanedData.includes(id) && id !== selectedProduct.id) {
            cleanedData.push(id)
          }
        })
        if (cleanedData.length > 4) {
<<<<<<< HEAD
          setCarousel(cleanedData.slice(0, 4))
          setView(cleanedData.slice(0, 4))
          setRight(cleanedData.slice(4))
=======
          setCarousel(cleanedData.slice(0,4))
          setViewCarousel(cleanedData.slice(0,4))
          setRightCarousel(cleanedData.slice(4))
>>>>>>> edea062ce7e88f4e9d1771d1081308e16464220a
        } else {
          setCarousel(cleanedData)
        }
      })
  }, [])

  const shiftCarouselLeft = () => {
    setLeftCarousel([...leftCarousel, viewCarousel[0]]);
    setCarousel([viewCarousel[1], viewCarousel[2], viewCarousel[3], rightCarousel[0]])
    setViewCarousel([viewCarousel[1], viewCarousel[2], viewCarousel[3], rightCarousel[0]]);
    setRightCarousel(rightCarousel.slice(1))
  }

<<<<<<< HEAD
  const shiftRight = () => {
    setRight([view[3], ...right])
    setCarousel([left[left.length - 1], view[0], view[1], view[2]]);
    setView([left[left.length - 1], view[0], view[1], view[2]]);
    setLeft([...left.slice(0, left.length - 1)]);
=======
  const shiftCarouselRight = () => {
    setRightCarousel([viewCarousel[3], ...rightCarousel])
    setCarousel([leftCarousel[leftCarousel.length-1], viewCarousel[0], viewCarousel[1], viewCarousel[2]]);
    setViewCarousel([leftCarousel[leftCarousel.length-1], viewCarousel[0], viewCarousel[1], viewCarousel[2]]);
    setLeftCarousel([...leftCarousel.slice(0, leftCarousel.length-1)]);
>>>>>>> edea062ce7e88f4e9d1771d1081308e16464220a
  }


  return (
    <div>
      <div className='sectionTitle'><h2>RELATED PRODUCTS</h2></div>
      <div className='carousel'>
<<<<<<< HEAD
        <div className="rightArrow" onClick={shiftLeft}>{right.length ? <RiArrowRightSLine /> : null}</div>
        <div className="leftArrow" onClick={shiftRight}>{left.length ? <RiArrowLeftSLine /> : null}</div>
=======
      <div className="rightArrow" onClick={shiftCarouselLeft}>{rightCarousel.length ? <RiArrowRightSLine /> : null}</div>
      <div className="leftArrow" onClick={shiftCarouselRight}>{leftCarousel.length ? <RiArrowLeftSLine /> : null}</div>
>>>>>>> edea062ce7e88f4e9d1771d1081308e16464220a
        <div className='related'>
          {carousel.map((ids, index) => {
            return <ProductCard
              key={ids}
              product_id={ids}
              addOutfit={addToOutfit}
              select={selectStyle}
              current={selectedProduct}
              avgStars={avgRating}
<<<<<<< HEAD
              starRender={starRender} />
=======
              starRender={starRender}
              carousel={carousel}
              leftCarousel={leftCarousel}
              rightCarousel={rightCarousel}
              placement={index} />
>>>>>>> edea062ce7e88f4e9d1771d1081308e16464220a
          })}
        </div>
      </div>
    </div>
  )
}

export default Related;