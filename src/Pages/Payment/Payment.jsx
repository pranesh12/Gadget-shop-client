import { Button } from "@mui/material";
import { placeOrder } from "../../redux/actions/orderAction";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
const Payment = ({ total, itemOrder }) => {
  const dispatch = useDispatch();
  const handlePayment = (token) => {
    dispatch(placeOrder(total, token));
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51LFFU0IzfmS7pHpEZVUrGbrlxPeXbBHn1oTiIFqjJIre34eBTYpkRkssTCELE92hUkRI7BScpPZtKNvaoiRaejVQ008Q0shYqZ"
      token={handlePayment}
      shippingAddress
      billingAddress={true}
    >
      <Button variant="contained" color="primary">
        Pay Now
      </Button>
    </StripeCheckout>
  );
};

export default Payment;
