import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
  type,
  name,
  placeholder = "Enter Feild",
  register,
  error,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-gray-200 w-full px-4 py-2 rounded"
    />
  );
};
FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
