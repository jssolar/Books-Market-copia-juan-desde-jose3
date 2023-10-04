import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Bienvenida = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <ol className="carousel-indicators tabs">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              >
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2019/05/04/14/22/woman-4178187_1280.jpg"
                    className="img-bienvenida"
                    alt=""
                  />
                </figure>
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/18/18/48/book-1836380_1280.jpg"
                    className="img-bienvenida"
                    alt=""
                  />
                </figure>
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                <figure>
                  <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </li>
            </ol>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div
              id="carouselExampleIndicators"
              data-interval="false"
              className="carousel slide"
              data-ride="carousel"
            >
              <h1>BOOKS MARKET</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="quote-wrapper">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint culpa laudantium alias dicta impedit explicabo
                      debitis ducimus nostrum in reiciendis eum tempore
                      excepturi, recusandae nulla eaque, eligendi cum quasi?
                      Dolorem?Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Non illo nostrum blanditiis. Totam
                      repudiandae vitae cupiditate expedita, beatae, excepturi
                      dolore officia id sit ut reiciendis est commodi in
                      mollitia aliquid.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="quote-wrapper">
                    <p>
                      I have tried a lot of food delivery services but Plate is
                      something out of this world! Their food is really healthy
                      and it tastes great, which is why I recommend this company
                      to all my friends!
                    </p>
                    <h3>peter lee</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="quote-wrapper">
                    <p>
                      I have tried a lot of food delivery services but Plate is
                      something out of this world! Their food is really healthy
                      and it tastes great, which is why I recommend this company
                      to all my friends!
                    </p>
                    <h3>peter lee</h3>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
