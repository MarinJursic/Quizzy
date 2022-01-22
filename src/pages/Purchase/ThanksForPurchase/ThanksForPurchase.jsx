import React from "react";
import "./ThanksForPurchase.scss";

import { useDispatch, useSelector } from "react-redux";

function ThanksForPurchase() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan.plan);
  const pricing = useSelector((state) => state.plan.pricing);

  const price = pricing === "yearly" ? plan.priceYearly : plan.priceMonthly;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let future = new Date();
  if (pricing === "yearly") {
    future.setFullYear(future.getFullYear() + 1);
  } else {
    future.setDate(future.getDate() + 30);
  }

  return (
    <div className="thanks_for_purchase">
      <div className="top">
        <img src="/images/purchase/top.svg" alt="Icon of top graphic" />
        <div className="text">
          <h1>Quizzy+</h1>
          <p>{"Congratulations! You're all set to get that A+!"}</p>
        </div>
      </div>

      {/* Main Block */}

      <div className="main">
        <div className="main_row">
          <div className="details">
            <div className="success">
              <h2>Success!</h2>
              <div className="line" />
              <img src="/images/purchase/check.svg" />
            </div>
            <div className="thanks_details">
              <h3>Thanks for your purchase!</h3>
              <p>
                Please allow up to 5 minutes for the new Quizzy+ changes to be
                applied onto your account. We've packed a ton of features into
                Quizzy+ already, and there are even more coming soon. We hope
                this purchase is worthwhile for you and helps you achieve your
                desired grades and test results.
                <br />
                <br /> Your order details can be found on the right side of this
                page. Additionally, an order confirmation has been automatically
                emailed to you at <span>you*******@provider.com</span>.
                <br />
                <br /> Please contact <span>support@quizzynow.com</span> via
                email if there are any concerns regarding your subscription.
                <br />
                <br /> Thanks again, The Quizzy Team.
              </p>
              <h4>Admire that new badge of yours some more</h4>
              <div className="big_user">
                <img src="/images/user/pfp.svg" alt="Your profile icon" />
                <h5>Script Ing</h5>
                <p>
                  Student - <span>Online</span>
                </p>
                <p className="user_plan">PLUS</p>
              </div>
              <div className="mid_user">
                <img src="/images/user/pfp.svg" alt="Your profile icon" />
                <p>script_ing</p>
                <p className="user_plan">PLUS</p>
              </div>
              <div className="small_user">
                <img src="/images/user/pfp.svg" alt="Your profile icon" />
                <p className="user_plan">PLUS</p>
              </div>
            </div>
          </div>

          {/* Complete order */}
          <div className="order">
            <div className="title">
              <img
                src="/images/purchase/order_details.svg"
                alt="Order Details icon"
              />
              <h2>Order Receipt</h2>
            </div>
            <div className="product_details">
              <h3>
                Quizzy+ {plan.plan} ({pricing})
              </h3>
              <h3 className="price">${price}</h3>
            </div>
            <p>
              Next payment is due on {monthNames[future.getMonth()]}{" "}
              {future.getDate()} {future.getFullYear()}. You may cancel at any
              time.
            </p>
            <div className="coupon">
              <h3>Coupon "Test"</h3>
              <h3 className="discount">-$2.50</h3>
            </div>
            <div className="total">
              <h3 className="totalText">Total</h3>
              <h3 className="price">${price - 2.5}</h3>
            </div>
            <div className="total_savings">
              <p>Your total savings amount:</p>
              <h3 className="price">$2.50</h3>
            </div>
            <div className="paid">
              <h3 className="totalText">Paid</h3>
              <h3 className="price">-${price - 2.5}</h3>
            </div>
            <div className="total_due">
              <h3 className="totalText">Total Due</h3>
              <h3 className="price">$0.00</h3>
            </div>
            <p>
              Thanks for your purchase! We will also email a copy of this to you
              shortly for your convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksForPurchase;
