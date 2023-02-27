import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

// Definição das imagens do banner
const images = [
  {
    id: 1,
    src: 'banner1.jpg',
    alt: 'Banner 1'
  },
  {
    id: 2,
    src: 'banner2.jpg',
    alt: 'Banner 2'
  },
  {
    id: 3,
    src: 'banner3.jpg',
    alt: 'Banner 3'
  }
];

// Definição do estilo do banner
const Banner = styled.div`

  width: 100%;
  height: 300px;
`;

// Definição do estilo das imagens do banner
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;

// Definição da interface do componente
interface BannerProps {}

// Definição do componente Banner
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