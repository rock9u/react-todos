import React, { useState } from "react";

const useInputValue = (initValue) => {
  const [value, setValue] = useState(initValue);
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    resetValue: (e) => {
      setValue("");
    },
  };
};

export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
};
