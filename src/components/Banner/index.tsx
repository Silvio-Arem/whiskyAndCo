import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const images = [
  {
    id: 1,
    src: 'https://images.tcdn.com.br/img/editor/up/704508/adegajackdanielstennesseewhiskeydragonkingdrinksbanner.jpg',
    alt: 'Banner 1'
  },
  {
    id: 2,
    src: 'https://s3-sa-east-1.amazonaws.com/static.standout.com.br/pernod/products/img_iQEFSaYEFWVsYnHo.jpg',
    alt: 'Banner 2'
  },
  {
    id: 3,
    src: 'https://uswhiskeyreport.com/wp-content/uploads/2020/06/Uncle_nearest_banner.jpg',
    alt: 'Banner 3'
  }
];

const Banner = styled.div`
  margin-left: 234px;
  text-align: center;
  background-color: #000000;
  width: 60%;
  height: 350px;
`;

const BannerImage = styled.img`
  background-color: #ffffff;
  width: 100%;
  height: 350px;
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