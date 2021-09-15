import React from "react";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Gallery",
          link: "/Gallery",
        },
        {
          name: "About",
          link: "/About",
        },
        {
          name: "Contact",
          link: "/Contact",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <video autoPlay muted loop id="bg-video">
          <source src="video/gfp-astro-timelapse.mp4" type="video/mp4" />
        </video>

        <div className="page-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="cd-slider-nav">
                  <nav className="navbar navbar-expand-lg" id="tm-nav">
                    <a className="navbar-brand" href="#">
                      Astro Motion
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbar-supported-content"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbar-supported-content"
                    >
                      <ul className="navbar-nav mb-2 mb-lg-0">
                        {this.state.navLinks.map((item, index) => {
                          return (
                            <li key={index} className="nav-item">
                              <a className="nav-link" href={item.link}>
                                {item.name}
                              </a>
                              <div className="circle" />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
