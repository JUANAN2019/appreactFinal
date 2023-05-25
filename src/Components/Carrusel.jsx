import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.css';
import animegafas from '../assets/img/animegafas.jpg';
import logorick from '../assets/img/logorick.jpg'
import vortice from '../assets/img/vorticeverde.jpg'

export default function Carrusel() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logorick}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={animegafas}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        href=''
          className="d-block w-100"
          src={vortice}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

