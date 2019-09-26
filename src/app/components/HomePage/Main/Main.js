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
        <section className="content__container content__wrapper">
          <h2 className="content__title">Popular Now</h2>
          <div>
            <ul className="filter__panel">
              <li>Trending</li>
              <li>Bestsellers</li>
              <li>New</li>
              <li>On Sale</li>
            </ul>
          </div>
          <div className="product__wrapper">
            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_1.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
            <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_2.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
            <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_3.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
            <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_4.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>
          </div>
        </section>

        <section className="content__container content__wrapper">
          <h2 className="content__title">New Winter Collection</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
          <button className="col-3 button">All collection</button>
          <div className="product__wrapper">
            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_5.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_6.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_7.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_8.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>
          </div>
        </section>

        <section className="col-12 promo__wrapper">
          <h3 className="content__title__sale">Season sale</h3>
          <h4 className="content__title__sale_message">UP TO 70% OFF</h4>
        </section>

        <section className="content__container content__wrapper">
          <form className="subscribe__form">
            <p className="col-4">Subscribe to Newsletter:</p>
            <input className="col-5" placeholder="Your Mail" />
            <button className="col-2">Subscribe</button>
          </form>
        </section>

        <section className="content__container content__wrapper">
          <h2 className="content__title">From Our Collection</h2>
          <div>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
            <div>
              <ul className="col-4 navidation__panel">
                <li>Trending</li>
                <li>Bestsellers</li>
                <li>New</li>
                <li>On Sale</li>
              </ul>
              {/* <button className="col-1">Winter</button>
              <button className="col-1">Spring</button>
              <button className="col-1">Summer</button>
              <button className="col-1">Fall</button> */}
            </div>
          </div>
          <div className="product__wrapper">
            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_9.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_10.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_11.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_12.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_13.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_14.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_15.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>

            <div className="col-3 product__item">
              <img className="product__picture" src={require('../../../styles/assets/img/products_img/product_picture_16.jpg')}/>
              <h4>PARIS JACKET</h4>
              <p>$89,99</p>
            </div>
          </div>
          <button className="col-3 button">Show me more</button>
        </section>

        <section className="story__wrapper">
          <div className="col-6 story__container_baner"></div>
          <div className="col-6 story__container">
            <div className="story__article">
              <h2 className="content__title">Story Behind</h2>
              <img className="col-3 story__picture" src={require('../../../styles/assets/img/logo_light.png')}/>
              <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
              Accumsan id imperdiet et, porttitor at sem. 
              Vestibulum ac diam sit amet quam vehisuscipit tortor eget felis.
              </p>
              <button className="button">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
