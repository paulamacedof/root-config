import PropTypes from "prop-types";
import React, { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    const handleClick = () => {
      console.log("onNavClick foi disparado");
    };
    document.addEventListener("onNavClick", handleClick);
    return () => {
      document.removeEventListener("onNavClick", handleClick);
    };
  }, []);
  return <section>{props.name} is mounted!!!</section>;
}

Root.propTypes = {
  name: PropTypes.string.isRequired,
};
