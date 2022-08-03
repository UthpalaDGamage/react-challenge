import React, { useState, useEffect } from "react";
function Row({
  index,
  remove,
  itemValue,
  itemOperator,
  disabled,
  onUpdateRow,
}) {
  const [operator, setOperator] = useState(itemOperator);
  const [isDisable, setDisable] = useState(disabled);
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

  useEffect(() => {
    setDisable(disabled);
  }, [disabled]);

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
    remove(index);
  };
  const handleInputChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <li
        key={index}
        className={isDisable ? "row-item row-disabled" : "row-item"}
      >
        <select
          onChange={(e) => handleOperatorChange(e.target.value)}
          disabled={isDisable}
          value={operator}
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>

        <input
          type="number"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          disabled={isDisable}
          className="row-input"
        />
        <button onClick={() => removeRow(index)} className="row-btn btn-remove">
          Delete
        </button>
        <button onClick={handleDisable}>
          {isDisable ? "Enable" : "Disable"}
        </button>
      </li>
    </>
  );
}

export default Row;
