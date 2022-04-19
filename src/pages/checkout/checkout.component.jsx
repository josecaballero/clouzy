import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
  StripeCheckoutButtonCustom,
} from "./checkout.styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>Product</HeaderBlockContainer>
        <HeaderBlockContainer>Description</HeaderBlockContainer>
        <HeaderBlockContainer>Quantity</HeaderBlockContainer>
        <HeaderBlockContainer>Price</HeaderBlockContainer>
        <HeaderBlockContainer>Remove</HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <TestWarningContainer>
        * Please use the following test credit card for payments* <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButtonCustom price={total} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
