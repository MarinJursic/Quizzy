import React, { useState, useEffect } from "react";
import "./Purchase.scss";

import Card from "../../components/Card/Card";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Purchase() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan.plan);

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
  future.setDate(future.getDate() + 30);

  const [cards, setCards] = useState([
    {
      id: 0,
      number: "1234123412341234",
      expMonth: 12,
      expDate: 1,
      cvv: 456,
      zip: 123,
      imgUrl: "/images/purchase/card/visa.svg",
      imgHeight: "1rem",
    },
    {
      id: 1,
      number: "1234123412340987",
      expMonth: 12,
      expDate: 31,
      cvv: 123,
      zip: 456,
      imgUrl: "/images/purchase/card/mastercard.svg",
      imgHeight: "2rem",
    },
  ]);

  const paymentMethods = [
    {
      id: 0,
      title: "Card/Debit card",
    },
    {
      id: 1,
      title: "Paypal",
    },
    {
      id: 2,
      title: "Redeem Quizzy Card",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [addingCard, setAddingCard] = useState(false);

  const [creditNum, setCreditNum] = useState(null);
  const [expMonth, setExpMonth] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const [zip, setZip] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [card, setCard] = useState(null);

  const validateCardNumber = () => {
    // If user didn't enter anything, return null to prevent errors
    if (!creditNum) return null;

    const num = creditNum.toString();

    // All visa and mastercard cards are 16 digits
    if (num.length !== 16) return null;

    const visaRe = new RegExp("^4[0-9]{6,}$");
    const mastercardRe = new RegExp(
      "^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$"
    );

    if (visaRe.test(num)) {
      return "visa";
    } else if (mastercardRe.test(num)) {
      return "mastercard";
    } else {
      return null;
    }
  };

  const addCard = () => {
    if (!card || !zip || !cvv || !expMonth || !expDate) return;

    const newCard = {
      id: cards.length,
      number: creditNum ? creditNum.toString() : "",
      zip,
      cvv,
      expMonth: parseInt(expMonth),
      expDate: parseInt(expDate),
      imgUrl: `/images/purchase/card/${card || "visa"}.svg`,
      imgHeight: card === "mastercard" ? "2rem" : "1rem",
    };

    setCards([...cards, newCard]);

    setCreditNum(null);
    setZip(null);
    setCvv(null);
    setExpMonth(null);
    setExpDate(null);
    setAddingCard(false);
  };

  useEffect(() => {
    setCard(validateCardNumber());
    console.log(card);
  }, [creditNum]);

  return (
    <div className="purchase">
      <div className="top">
        <img src="/images/purchase/top.svg" alt="Icon of top graphic" />
        <div className="text">
          <h1>Quizzy+</h1>
          <p>
            Imagine the look on your friends' faces when they see your brand new
            Quizzy+ logo.
          </p>
        </div>
      </div>

      {/* Main Block */}

      <div className="main">
        <h2>{"You're almost there"}</h2>
        <div className="payment_row">
          <div className="details">
            {/* Payment Details */}

            <div className="payment_details">
              <img
                className="card_img"
                src="/images/purchase/payment_details.svg"
                alt="Payment Details icon"
              />
              <div className="payment_details_main">
                <h3>Payment details</h3>

                {/* Card inputs */}

                <div className="inputs">
                  {paymentMethods.map((paymentMethod) => (
                    <div className="input" key={paymentMethod.id}>
                      <input
                        type="radio"
                        id={paymentMethod.title}
                        checked={selectedMethod === paymentMethod.id}
                        onChange={(e) =>
                          e.target.value === "on" &&
                          setSelectedMethod(paymentMethod.id)
                        }
                      />
                      <label htmlFor={paymentMethod.title}>
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Card Graphics */}
                {selectedMethod === 0 && (
                  <div className="cards">
                    {cards.map((card) => {
                      return (
                        <Card
                          card={card}
                          selected={selectedCard === card.id}
                          setSelected={(isSelected) =>
                            setSelectedCard(isSelected ? card.id : null)
                          }
                          key={card.id}
                        />
                      );
                    })}

                    {/* Add New Card */}
                    <div
                      className={`add_card ${addingCard && "add_card_adding"}`}
                      onClick={() =>
                        addingCard ? addCard() : setAddingCard(true)
                      }
                    >
                      <img
                        src={`/images/purchase/add_card_${
                          addingCard ? "" : "un"
                        }active.svg`}
                        alt="Add Card icon"
                      />
                      <p>Add New Card</p>
                    </div>
                  </div>
                )}

                {/* Adding Card Input */}

                {addingCard && (
                  <div className="adding_card_input">
                    <h3>Add New Card</h3>
                    <div className="adding_card_cards">
                      <div className="back_card">
                        <div className="dark_line" />
                        <div className="cvv_input">
                          <label htmlFor="cvv">CVV</label>
                          <div className="input">
                            <img
                              src="/images/purchase/lock.svg"
                              alt="Icon of a lock"
                            />
                            <input
                              id="cvv"
                              onChange={(e) => setCvv(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="front_card">
                        <img
                          className="card_image"
                          src={`/images/purchase/card/${card || "visa"}.svg`}
                          alt="Icon of card"
                          style={{
                            height: card === "mastercard" ? "1.8rem" : "1rem",
                          }}
                        />

                        <div className="number_input">
                          <label htmlFor="number">Card number</label>
                          <div className="input">
                            <input
                              id="number"
                              onChange={(e) => setCreditNum(e.target.value)}
                            />
                            <img
                              src={`/images/purchase/${
                                card ? "legit" : "error"
                              }.svg`}
                              alt="Icon of error"
                            />
                          </div>
                        </div>
                        <div className="bottom_inputs">
                          <div className="expiration_input">
                            <label htmlFor="expiration">Expiration date</label>
                            <div className="expiration_inputs">
                              <input
                                id="expiration"
                                onChange={(e) => setExpMonth(e.target.value)}
                              />
                              <input
                                onChange={(e) => setExpDate(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="zip_input">
                            <label htmlFor="zip">Zip Code</label>
                            <input
                              id="zip"
                              onChange={(e) => setZip(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="remember_card">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">
                        Save this card for easy future purchases.
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}

            <div className="order_summary">
              <img
                className="order_summary_img"
                src="/images/purchase/order_summary.svg"
                alt="Order Summary icon"
              />
              <div className="order_summary_main">
                <h3>Order Summary</h3>
                <div className="order_summary_row">
                  <div className="order_summary_bill">
                    <h4>Quizzy+ {plan.plan} (monthly)</h4>
                    <p>@script_ing will receive Quizzy+</p>
                    <h3>${plan.priceMonthly}</h3>
                    <Link to="/quizzyplus" className="change">
                      CHANGE
                    </Link>

                    {selectedMethod === 2 && (
                      <div className="quizzy_card_redeem">
                        <p>Redeem your Quizzy Card in the box below</p>
                        <div className="redeem_input">
                          <input />
                          <button>Redeem</button>
                        </div>
                        <p>Current Credit: $13.49</p>
                        <p>Balance after payment: $0.00</p>
                      </div>
                    )}

                    <Link to="/purchase/thanks">
                      <button>Pay now</button>
                    </Link>
                  </div>
                  <div className="order_summary_name">
                    <p>{"Here's"} how your name will appear</p>
                    <div className="user">
                      <img src="/images/user/pfp.svg" alt="Your profile icon" />
                      <p>script_ing</p>
                      <p className="user_plan">PLUS</p>
                    </div>
                  </div>
                </div>
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
              <h2>Order Details</h2>
            </div>
            <div className="product_details">
              <h3>Quizzy+ {plan.plan} (monthly)</h3>
              <h3 className="price">${plan.priceMonthly}</h3>
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
              <h3 className="price">${plan.priceMonthly - 2.5}</h3>
            </div>
            <div className="total_savings">
              <p>Your total savings amount:</p>
              <h3 className="price">$2.50</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
