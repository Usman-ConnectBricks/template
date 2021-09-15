const Contact = () => {
  return (
    <div className="mx-auto page-width-2 my-5">
      <div className="row">
        <div className="col-md-6 me-0 ms-auto">
          <h2 className="mb-4">Contact Us</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 tm-contact-left">
          <form action="#" method="POST" className="contact-form">
            <div className="input-group tm-mb-30">
              <input
                name="name"
                type="text"
                className="form-control rounded-0 border-top-0 border-end-0 border-start-0"
                placeholder="Name"
              />
            </div>
            <div className="input-group tm-mb-30">
              <input
                name="email"
                type="text"
                className="form-control rounded-0 border-top-0 border-end-0 border-start-0"
                placeholder="Email"
              />
            </div>
            <div className="input-group tm-mb-30">
              <textarea
                rows={5}
                name="message"
                className="textarea form-control rounded-0 border-top-0 border-end-0 border-start-0"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="input-group justify-content-end">
              <input
                type="submit"
                className="btn btn-primary tm-btn-pad-2"
                defaultValue="Send"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6 tm-contact-right">
          <p className="mb-4">
            Integer erat turpis, vestibulum pellentesque aliquam ultricies,
            finibus nec dui. Donec bibendum enim mi, at tristique leo feugiat
            at.
          </p>
          <div>
            Email:{" "}
            <a href="mailto:info@company.com" className="tm-link-white">
              info@company.com
            </a>
          </div>
          <div className="tm-mb-45">
            Tel:{" "}
            <a href="tel:0100200340" className="tm-link-white">
              010-020-0340
            </a>
          </div>
          

          {/* Map */}
          <div className="map-outer">
            <div className="gmap-canvas">
              <iframe
                width="100%"
                height={400}
                id="gmap-canvas"
                src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
