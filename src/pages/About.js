import React  from "react";

const About = () => {
    return (
      <div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom my-5">
          <div className="circle intro-circle-1" />
          <div className="circle intro-circle-2" />
          <div className="circle intro-circle-3" />
          <div className="circle intro-circle-4" />
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">About our company</h2>
            <p className="mb-4">
              You are <span className="highlight">allowed</span> to use Astro
              Motion HTML Template for your websites. You are not allowed to
              re-distribute this template ZIP file on any Free CSS template
              collection website. Illegal redistribution is strongly prohibited.
            </p>
            <p>
              Praesent auctor rhoncus arcu, vitae blandit est vestibulum sit
              amet. Integer erat turpis, vestibulum pellentesque aliquam
              ultricies, finibus nec dui. Donec bibendum enim mi, at tristique
              leo feugiat at. Thank you for visiting Template Mo.
            </p>
          </div>
        </div>
        <li data-page-no={4}></li>
      </div>
    );
  }
export default About;