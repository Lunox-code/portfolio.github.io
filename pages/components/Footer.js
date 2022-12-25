import React from "react";
import Wave from "react-wavify";

function Footer() {
  return (
    <div>
      <Wave
        className="wavefoot"
        fill="url(#gradient1)"
        responsive="true"
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.16,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="gradient1">
            <stop offset="90%" stopColor="#D65A31" />
            <stop offset="90%" stopColor="#D65A31" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
}

export default Footer;
