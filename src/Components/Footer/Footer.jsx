import React from "react";
import Abouts from "./Abouts";
import "./Footer.css";
import data from "./data.json"; // Dummy Data

const Footer = () => {
  return (
    <div>
      <footer className="ecomfooter">
        <div className="aboutFooter flex">
          {data.map((item, id) => (
            <Abouts key={id} items={item.items} title={item.title} />
          ))}
        </div>
        <div className="contactFooter flex">
          <div className="ecomName">eBazaar</div>
          <div>Payments Accepted By</div>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
            alt=""
          />
        </div>
      </footer>
      <div className="developer_details flex flex-center">
        <div className="developer">Made By Prakash</div>
        <a href="https://github.com/prakash855/eBazaar" target="_blank">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
