import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../assets/carusel1.webp'
import Carousel2 from '../assets/shop3.jpg'
import Carousel3 from '../assets/carusel3.webp'
function DarkVariantExample() {
  return (
    <Carousel className='carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt='Shopping - Your Baden'
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt=""
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;