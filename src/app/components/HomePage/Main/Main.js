import React, { Component } from "react";
import  "./Main.scss";
import "../../../styles/_common.scss";
import "../../../styles/_reset.scss";
import "../../../styles/_variables.scss";
import "../../../styles/_gridSystem.scss";

class Main extends Component {
  render() {
    return (
      <div>
        <section className="content__wrapper content__container">
          <h2 className="content__title">Popular Now</h2>
          <div>
            <ul className="filter__panel">
              <li>Trending</li>
              <li>Bestsellers</li>
              <li>New</li>
              <li>On Sale</li>
            </ul>
          </div>
          <div className="product__container">
            <div className="col-3 product__item">
              <img className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>
          </div>
        </section>

        <section className="content__wrapper content__container">
          <h2 className="content__title">New Winter Collection</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
          <button className="col-3 button">All collection</button>
          <div className="product__container">
            <div className="col-3 product__item">
              <div className="product__picture_small" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture_small" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture_small" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture_small" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>
          </div>
        </section>

        <section className="col-12 promo__container">
          <h3 className="content__title_sale">Season sale</h3>
          <h4 className="content__title_sale">UP TO 70% OFF</h4>
        </section>

        <section className="content__wrapper subscribe__container">
          <form className="subscribe__form">
            <p className="col-4">Subscribe to Newsletter:</p>
            <input className="col-5" placeholder="Your Mail" />
            <button className="col-2">Subscribe</button>
          </form>
        </section>

        <section className="content__wrapper">
          <h2>From Our Collection</h2>
          <div>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
            <div>
              <button className="col-1">Winter</button>
              <button className="col-1">Spring</button>
              <button className="col-1">Summer</button>
              <button className="col-1">Fall</button>
            </div>
          </div>
          <div className="product__container">
            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <div className="product__picture" />
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>
          </div>
          <button className="col-3 button">Show me more</button>
        </section>

        <section className="story__container">
          <div className="col-6">

          </div>
          <div className="col-6">
            <h2 className="content__title">Story Behind</h2>
            <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
            Accumsan id imperdiet et, porttitor at sem. 
            Vestibulum ac diam sit amet quam vehisuscipit tortor eget felis.
            </p>
            <button className="button">Contact Us</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
