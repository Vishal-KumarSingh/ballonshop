import React from "react";

const SlideShow = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/slideshow.jpg"
            alt="Card"
            height={300}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
