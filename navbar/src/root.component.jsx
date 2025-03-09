import PropTypes from "prop-types";
import React from "react";

export default function Root(props) {
  const onClick = () => {
    const event = new CustomEvent("onNavClick");
    document.dispatchEvent(event);
  };
  return (
    <section>
      {props.name} is mounted!!!
      <button onClick={onClick}>botão</button>
    </section>
  );
}

Root.propTypes = {
  name: PropTypes.string.isRequired,
};
