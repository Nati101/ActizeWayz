import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from "./Footer";

const Result = () => {
  return (
    <p>Your message has been seccessfully sent. We will contact you soon!</p>
  );
};
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

export default function Contact() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v6kn7ig",
        "template_9vh5epc",
        e.target,
        "user_6N314qwkt1nF731yG2qvR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <body>
      <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div class="info">
              <div class="information">
                <img src="img/location.png" class="icon" alt="" />
                <p>2170 The Alameda, Ste 200 San Jose, CA 95126</p>
              </div>
              <div class="information">
                <img src="img/email.png" class="icon" alt="" />
                <p>info@ActiveWayz.Engineering</p>
              </div>
              <div class="information">
                <img src="img/phone.png" class="icon" alt="" />
                <p>408-318-5028</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form autocomplete="off" onSubmit={sendEmail}>
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input type="text" name="fullName" class="input" required />
                <label for="">Name</label>
                <span>Name</span>
              </div>
              <div class="input-container">
                <input type="reply_to" name="email" class="input" required />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div class="input-container">
                <input type="text" name="phone" class="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div class="input-container textarea">
                <textarea name="message" class="input" required></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <button type="submit" class="btn">
                Submit
              </button>
              <div className="row">{result ? <Result /> : null}</div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
