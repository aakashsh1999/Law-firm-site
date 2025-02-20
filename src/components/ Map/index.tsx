import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14754.371850493153!2d86.97896820376788!3d25.246603101028292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049e697177ac5%3A0x41f358ac123bc4f4!2sBhikhanpur%2C%20Bhagalpur%2C%20Bihar!5e1!3m2!1sen!2sin!4v1738264713722!5m2!1sen!2sin"
        width="800"
        height="600"
        allowFullScreen={true}
        loading="lazy"
        className="w-full h-[50vh]"
      ></iframe>
    </div>
  );
}

export default Map;
