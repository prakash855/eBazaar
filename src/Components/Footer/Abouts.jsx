import React from "react";

const Abouts = ({ title, items }) => {
  return (
    <div className="aboutContainer flex">
      <div className="aboutHead left_aligned">{title}</div>
      <div className="aboutList">
        {items.map((item) => (
          <p className="footer_lists left_aligned">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Abouts;
