import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 450px;
  background-color: gray;
  text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Picture = styled.div`
  margin: 10px 0;
  width: 250px;
  height: 350px;
  background-color: white;
`;

const Title = styled.h4`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 14px;
  color: yellow;
`;

const heartIcon = <FontAwesomeIcon className="social-network-icon" icon={faHeart} />;

const Heart = styled.div`
  position: absolute;
  right: 20px;
  bottom: 30px;
`;

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = false;
  }

  render() {
    return (
      <div className="content__container">
        <Container>
          <Wrapper>
            <Picture />
            <Heart>{heartIcon}</Heart>
          </Wrapper>
          <Title>Product</Title>
          <Price>$23</Price>
        </Container>
      </div>
    );
  }
}

export default ProductItem;
