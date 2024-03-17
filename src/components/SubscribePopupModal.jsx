import React from "react";
import { useState } from "react";
import "./SubscribePopupModal.css";
// import "../SubscribePopupModal.css";
import { ImCross } from "react-icons/im";

export const Modal = ({ openSubscribeModal, setOpenSubscribeModal }) => {
  //   const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const subscribeLetter = async ()=>{
    const response = await fetch('http://localhost:5000/api/subscribe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
    const data = await response.json();
    console.log(data);
  }

  const sendEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      subscribeLetter();
      // Send the email------------------------------------------------
      setEmailSend(true);
      setTimeout(() => {
        setOpenSubscribeModal(false);
      }, 1000);
    }
  };

  return (
    <>
      {!emailSend && (
        <div className="main-container">
          <div className="main-content-container">
            <div className="modal-container">
              <div
                className="close-icon"
                onClick={() => setOpenSubscribeModal(false)}
              >
                <ImCross size={15} />
              </div>{" "}
              {/* Close icon */}
              <div className="left-img-container">
                <img src="/signup_modal_img.jpg" alt="img" effect={blur}/>
              </div>
              <div className="right-form-container">
                <p className="right-form-title">SUBSCRIBE TO OUR NEWSLETTER</p>
                <div>
                  <div className="modal-text">
                    <p>Missing out on the latest fashion trends?!
                    Subscribe to our weekly newsletter to receive concise weekly updates on Fast Fashion, Luxury Fashion, Sustainable Fashion, and the Sneaker Market.
                    Subscribe now to stay stylishly ahead!</p>
                  </div>
                </div>
                <div>
                  <div className="modal-input-label">
                    <label className="modal--input-text">Email address</label>
                    <input
                      placeholder="Email"
                      className="modal-input"
                      label={"Input"}
                      type="email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && (
                      <div className="error-message">
                        Please enter a valid email.
                      </div>
                    )}
                  </div>
                  {/* <div className="modal-input-label">
                    <label className="modal--input-text">Name</label>
                    <input
                      placeholder="Name"
                      className="modal-input"
                      label={"Input"}
                      type="text"
                      required={true}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="modal-input-label">
                    <label className="modal--input-text">Email address</label>
                    <input
                      placeholder="Email"
                      className="modal-input"
                      label={"Input"}
                      type="email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="modal-input-label">
                    <label className="modal--input-text">Password</label>
                    <input
                      placeholder="Password"
                      className="modal-input"
                      label={"Input"}
                      type="password"
                      required={true}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="error-message">
                      Please enter valid information.
                    </div>
                  )} */}
                  <div className="modal-buttons-container">
                    <button
                      className="modal-footer-button modal-button-send"
                      onClick={sendEmail}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {emailSend && (
        <div className="main-content-container">
          <div className="modal-email-sent-text">
            <div>
              <p>Subscribed to LIT Newsletter!</p>
            </div>
            <div>
              <p>Thank You..</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
