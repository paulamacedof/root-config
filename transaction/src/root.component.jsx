import { fetchTransaction } from "@bytebank/util";
import PropTypes from "prop-types";
import React from "react";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!!!
      <button onClick={fetchTransaction}>Fetch Transaction</button>
    </section>
  );
}

Root.propTypes = {
  name: PropTypes.string.isRequired,
};
