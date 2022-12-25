import React from "react";
import Wave from "react-wavify";

function Footer() {
  return (
    <div>
      <Wave
        className="wavefoot"
        fill="#D65A31"
        transform="rotate(360)"
        responsive="true"
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.16,
          points: 4,
        }}
      ></Wave>
    </div>
  );
}

export default Footer;
