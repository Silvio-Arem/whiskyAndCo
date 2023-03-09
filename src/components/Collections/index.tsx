import { CollectionImage,  CollectionsList, CollectionsTitle, CollectionsWrapper } from "./styles";
import { Link } from "react-router-dom";
import Jack from "../../assets/images/jack-logo.png";
import Ballantines from "../../assets/images/ballantines-logo.png";
import Johnnie from "../../assets/images/johnnie-logo.png";
import Chivas from "../../assets/images/chivas-logo.png";

interface CollectionProps {
  link: string;  
  title: string;
  image: string;
  alt: string;
}

function Collection (props: CollectionProps) {
  return (
    <Link to={props.link}>
      <CollectionImage src={props.image} alt={props.alt} />
    </Link>
  );
};

export default function CollectionSection () {
  return (
    <CollectionsWrapper>
      <CollectionsTitle>Nossos Rótulos</CollectionsTitle>
      <CollectionsList>
        <Collection link="/product" title="Jack Daniels" image={Jack} alt="Coleção Jack Daniels" />
        <Collection link="/product" title="Johnnie Walker" image={Johnnie} alt="Coleção Johnnie Walker" />
        <Collection link="/product" title="Ballantines" image={Ballantines} alt="Coleção Ballantines" />
        <Collection link="/product" title="Chivas Regal" image={Chivas} alt="Coleção Chivas Regal" />
      </CollectionsList>
    </CollectionsWrapper>
  );
};