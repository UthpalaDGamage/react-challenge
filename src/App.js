import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Row from "./component/Row";
function App() {
  const ADD_OPERATOR = '+';
  const SUBSTRACT_OPERATOR = '-';
  const [rows, setRows] = useState([{ value: 0, operator: "+" ,disabled:false}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    rows.filter(row => !row.disabled)?.forEach((row) => {
      if(row.value){
        if (row.operator === ADD_OPERATOR) {
          setTotal((newTotal = parseFloat(newTotal) + parseFloat(row.value)));
        }
        if (row.operator === SUBSTRACT_OPERATOR) {
          setTotal((newTotal = parseFloat(newTotal) - parseFloat(row.value)));
        }
      }
      
    });
    setTotal(newTotal);
  }, [rows]);

  const addRow = () => {
    const newRows = [...rows, { value: 0, operator: ADD_OPERATOR}];
    setRows(newRows);
  };
  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows([...newRows]);
  };

  const onUpdateRow = (updatedIndex, updatedRow) => {
    const newRows = rows.map((row, index) => {
      if (index === updatedIndex) {
        return {
          ...row,
          value: updatedRow.value,
          operator: updatedRow.operator,
          disabled: updatedRow.disabled,
        };
      }
      return row;
    });
    setRows(newRows);
  };

  return (
    <div className="app">
      <div class="wrapper">
        <div>
          <button onClick={addRow}>Add row</button>
        </div>

        <ul>
          {rows &&
            rows.map((row, index) => (
              <Row
                key={index}
                index={index}
                itemValue={row.value}
                itemOperator={row.operator}
                remove={removeRow}
                onUpdateRow={onUpdateRow}
                disabled={row.disabled}
              ></Row>
            ))}
        </ul>
        <div>Result: {total}</div>
      </div>
    </div>
  );
}

export default App;
