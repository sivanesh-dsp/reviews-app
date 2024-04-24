import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  name,
  placeholder = "Enter information briefly",
  register,
  error,
}) => {
  return (
    <div className="space-y-4">
      <textarea
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
};

export default TextArea;
