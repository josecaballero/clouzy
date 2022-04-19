import React from "react";
import { useDispatch } from "react-redux";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

import { addItem } from "./../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer onClick={() => dispatch(addItem(item))}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted>ADD TO CART</AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
