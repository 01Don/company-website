import React from "react";
import X from "../images/simple-icons_x.png";
import Face from "../images/facebook.png";
import Insta from "../images/ant-design_instagram-outlined.png";
import { Link } from "react-router-dom";
import "./footer.css";

function footer(n) {
  return (
    <div className="footer-all">
      <div className="footer-u">
        <div className="footer-text">
          <h1>Trust-One</h1>
          <p>
            Discover your ideal home effortlessly with our intuitive real

            estate platform. Explore detailed property listings, financing

            options, and easy scheduling. Stay informed with our

            newsletter and social media updates. Your dream home

            journey begins here.
          </p>
          <div className="socialmedia">
            <Link>
              <img src={X} alt="twiter" />{" "}
            </Link>
            <Link>
              <img src={Face} alt="twiter" />
            </Link>
            <Link>
              <img src={Insta} alt="twiter" />
            </Link>
          </div>
        </div>
        <div>
          <ul className="quicklink">
            <h1>Customer Support</h1>
            <Link className="quicklink-link1">
              {" "}
              <li>Property listings</li>
            </Link>
            <Link className="quicklink-link2">
              {" "}
              <li>Financing Options</li>
            </Link>
            <Link className="quicklink-link3">
              {" "}
              <li>Schedule a viewing</li>
            </Link>
            <Link className="quicklink-link4">
              {" "}
              <li>Sell Your</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="customer">
            <h1>Customer Support</h1>
            <Link className="customer-link1">
              <li>FAQs</li>
            </Link>
            <Link className="customer-link2">
              <li>Contact Us</li>
            </Link>
            <Link className="customer-link3">
              <li>Customer Testimo nials</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="customer">                                                                                                                                                                                                                                         
            <Link className7;;="customer-link2">
              <li>Contact Us</li>
            </Link>
            <Link className="customer-link3">
              <li>Customer Testimo nials</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
bet



e}

export default footer;
