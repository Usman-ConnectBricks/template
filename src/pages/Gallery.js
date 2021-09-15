import React from "react";
import galleryimg01 from "../assets/images/galleryimg01.jpg";
import galleryimg02 from "../assets/images/galleryimg02.jpg";
import galleryimg03 from "../assets/images/galleryimg03.jpg";
import galleryimg04 from "../assets/images/galleryimg04.jpg";
import galleryimg05 from "../assets/images/galleryimg05.jpg";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          image: galleryimg01,
          description: "Julia dances in the deep dark image 1",
        },
        {
          image: galleryimg02,
          description: "Julia dances in the deep dark image 2",
        },
        {
          image: galleryimg03,
          description: "Julia dances in the deep dark image 3",
        },
        {
          image: galleryimg04,
          description: "Julia dances in the deep dark image 4",
        },
        {
          image: galleryimg05,
          description: "Julia dances in the deep dark image 5",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="m-5 position-relative gallery-container">
          <div className="circle intro-circle-1" />
          <div className="circle intro-circle-2" />
          <div className="mx-auto tm-border-top gallery-slider">
            {this.state.data.map((item, index) => {
              return (
                <figure key={index} className="effect-julia item">
                  <img src={item.image} alt="Image" />
                  <figcaption>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
        <li data-page-no={3} className="px-3"></li>
      </div>
    );
  }
}

export default Gallery;
