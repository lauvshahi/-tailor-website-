import "../styles/Gallery.css";

import suit1 from "../assets/suit1.jpg";
import suit2 from "../assets/suit2.png";
import suit3 from "../assets/suit3.jpg";
import suit4 from "../assets/suit4.jpg";
import suit5 from "../assets/suit5.jpg";
import suit6 from "../assets/suit6.jpg";
import suit7 from "../assets/suit7.jpg";
import suit8 from "../assets/suit8.jpg";
import suit9 from "../assets/suit9.jpg";
import suit10 from "../assets/suit10.jpg";


function Gallery() {

  const images = [
    { id: 1, img: suit1 },
    { id: 2, img: suit2 },
    { id: 3, img: suit3 },
    { id: 4, img: suit4 },
    { id: 5, img: suit5 },
    { id: 6, img: suit6 },
    { id: 6, img: suit7 },
    { id: 6, img: suit8 },
    { id: 6, img: suit9 },
    { id: 6, img: suit10 },
  ];

  return (
    <section className="gallery">

      <h2>Our Work Gallery</h2>

      <div className="gallery-container">

        {images.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.img} alt="tailor work" />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;