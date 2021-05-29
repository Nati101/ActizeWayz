import React from "react";
import Footer from "../Footer";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <div class="container">
        <div contact="contactinfo">
          <div>
            <h2>Contact Us</h2>
            <ul class="info">
              <li>
                <span>
                  <img src="/img/location.jpeg" />
                </span>
                <span>2170 The Alameda, Ste 200 San Jose, CA 95126</span>
              </li>
              <li>
                <span>
                  <img src="/img/location.jpeg" />
                </span>
                <span>info@ActiveWayz.Engineering</span>
              </li>
              <li>
                <span>
                  <img src="/img/location.jpeg" />
                </span>
                <span>408-318-5028</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="contactForm">
            <h2>Send a Message</h2>
            <div class="formBox">
                <div class="inputBox w50">
                    <input type="text" name="" required/>
                    <span>First Name</span>
                </div>
                <div class="inputBox w50">
                    <input type="text" name="" required/>
                    <span>Last Name</span>
                </div>
                <div class="inputBox w50">
                    <input type="text" name="" required/>
                    <span>Email</span>
                </div>
                <div class="inputBox w50">
                    <input type="text" name="" required/>
                    <span>Mobile Number</span>
                </div>
                <div class="inputBox w100">
                    <textarea name="" required></textarea>
                    <span>Write your message here...</span>
                </div>
                <div class="inputBox w100">
                    <input type="submit" value="Send"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
