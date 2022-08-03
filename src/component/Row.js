import React, { useState, useEffect } from "react";
function Row({ index, remove, itemValue, itemOperator, onUpdateRow }) {
  const [operator, setOperator] = useState(itemOperator);
  const [isDisable, setDisable] = useState(false);
  const [value, setValue] = useState(itemValue);

  useEffect(() => {
    onUpdateRow(index, { value, operator, disabled: isDisable });
  }, [operator, value, isDisable]);

  useEffect(() => {
    setValue(itemValue);
  }, [itemValue]);

  useEffect(() => {
    setOperator(itemOperator);
  }, [itemOperator]);

  const handleOperatorChange = (operator) => {
    if (operator) {
      setOperator(operator);
    }
  };

  const handleDisable = () => {
    if (isDisable) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const removeRow = (index) => {
    console.log("inside ROW : removeRow ", index);
    remove(index);
  };
  const handleInputChange = (value) => {
    console.log("inside ROW : handleInputChange ", value);
    setValue(value);
  };

  return (
    <>
      <li key={index}>
        <select onChange={(e) => handleOperatorChange(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>

        <input
          type="number"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          disabled={isDisable}
        />
        <button onClick={() => removeRow(index)}>Delete</button>
        <button onClick={handleDisable}>
          {isDisable ? "Enable" : "Disable"}
        </button>
      </li>
    </>
  );
}

export default Row;
