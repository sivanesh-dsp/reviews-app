import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

const TextArea = ({
  name,
  placeholder = "Enter information briefly",
  register,
  error,
  required,
  label,
}) => {
  return (
    <div className="space-y-4">
      <Label id={name} text={label} required />
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
        className="bg-gray-200 w-full px-4 py-2 rounded outline-none"
      ></textarea>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export default TextArea;
