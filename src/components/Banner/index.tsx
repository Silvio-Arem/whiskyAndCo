import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../assets/images/banner1.png';
import Banner2 from '../../assets/images/Banner2.png';
import Banner3 from '../../assets/images/banner3.png';

const images = [
  {
    id: 1,
    src: Banner1,
    alt: "Banner Whiskys drink"
  },
  {
    id: 2,
    src: Banner2,
    alt: "Banner Jack Daniel's"
  },
  {
    id: 3,
    src: Banner3,
    alt: "Banner Ballantine's"
  }
];

const Banner = styled.div`
  margin-left: 4%;
  margin: auto;
  /*margin-left: 5px; */
  text-align: center;
  background-color: #000000;
  width: 95%;
  /* max-height: 250px; */
`;

const BannerImage = styled.img`
  background-color: #ffffff;
  width: 100%;
  /* height: 350px; */
`;

interface BannerProps {}

const BannerComponent: React.FC<BannerProps> = () => {
  return (
    <Banner>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <BannerImage src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Banner>
  );
};

export default BannerComponent;