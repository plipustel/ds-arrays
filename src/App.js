/* Sorting Algorithm in Data Structure
 * @Implemented By: Plipus Tel | www.plipustel.com
 * @Created Date: Mei 28, 2023
 * @Lastest Updated: Nov 02 2023
 * Test update
 */
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  /* State: Initial Data */
  const initialData = [9, 1, 8, 2, 5, 6, 9, 4, 5, 7];
  const [arrData, setArrData] = useState([...initialData]);
  const [crudData, setCrudData] = useState([...initialData]);

  /* State: Array informations */
  const [arrayInfo, setArrayInfo] = useState({
    arrayLength: "",
    arrayFirstIndex: "",
    arrayLastindex: "",
    arrayFirstItem: "",
    arrayLastItem: "",
    isEmpty: "",
  });
  // Create an array of the object's property names and values
  const arrayInfoItems = Object.entries(arrayInfo);

  /* State: read array */
  const [readArray, setReadArray] = useState([]);

  /* Function: get array information */
  const getArrayInfo = () => {
    setArrayInfo({
      arrayLength: arrData.length,
      arrayFirstIndex: "0",
      arrayLastindex: arrData.length - 1,
      arrayFirstItem: arrData[0],
      arrayLastItem: arrData[arrData.length - 1],
      isEmpty: arrData.isEmpty ? "True" : "False",
    });
  };

  // READ
  /* Read Array */
  const readArrayHandler = () => {
    setReadArray(arrData);
  };

  /**
   * PUSH(<n values>) -> Only insert item[s] from last of array
   * arr.push(3) -> insert item 3 to the last of array
   * arr.push(3, 4....n); -> insert item 4....n to the last of array
   *  */
  const arrayPush = () => {
    const newDataArray = [...crudData];
    newDataArray.push(8); // push (insert): insert an item in the last of the array
    setCrudData(newDataArray);
  };

  const arrayPushSomeItems = () => {
    const newDataArray = [...crudData];
    newDataArray.push(12, 14, 21); // push (insert): insert an item in the last of the array
    setCrudData(newDataArray);
  };
  /**
   * SPLICE(<startingIndex>, <lengthRemoving>, <items to be insert>) -> Insertion, Deletion and Replacing
   * arr.splice(2) -> remove all items from starting index '2' from array
   * arr.splice(2, 1) -> remove only item in index 2
   * arr.splice(2, 1, 4) -> insert '4' item in the index '2' | remove item with index '2' as much as 1 and then insert 4
   * arr.splice(2, 1, 4, 2, 8) -> insert '4', '2', '8' respectively in the index '2' | remove first item with index '2' as much as 1 and then insert 4, 2, 8
   * arr.splice(2, 3, 9, 2, 3) -> remove three elements starting from index '2' and then insert 9, 2, 3 on that index.
   *  */

  /* Insert an item in the position index '1' */
  const arrayInsertAnItem = () => {
    const newDataArray = [...crudData];
    /* Don't remove  the first item with index '1', just insert 18 in the position */
    newDataArray.splice(1, 0, 18);
    setCrudData(newDataArray);
  };

  /* Insert some items in the positions index '1' */
  const arrayInsertSomeItems = () => {
    const newDataArray = [...crudData];
    /* Don't remove  the first item with index '1', just insert 12, 13, 30 items in the position */
    newDataArray.splice(1, 0, 12, 13, 30);
    setCrudData(newDataArray);
  };

  /**
   * POP() -> Only an item from the last of array. Can't multiple items
   * arr.pop() -> remove 1 item from the last of array
   *  */
  const arrayPop = () => {
    const newDataArray = [...crudData];
    /* remove one item from the last of array */
    newDataArray.pop();
    setCrudData(newDataArray);
  };

  /* Remove all items */
  const arrayRemoveAllItems = () => {
    const newDataArray = [...crudData];
    /* Remove all items staring index from '2' */
    newDataArray.splice(2);
    setCrudData(newDataArray);
  };

  /* Remove an item */
  const arrayRemoveAnItem = () => {
    const newDataArray = [...crudData];
    /* Remove item in the index '1' with length 1 */
    newDataArray.splice(1, 1);
    setCrudData(newDataArray);
  };

  /* Remove some items */
  const arrayRemoveSomeItems = () => {
    const newDataArray = [...crudData];
    /* Remove 3 items starting from index '1' */
    newDataArray.splice(1, 3);
    setCrudData(newDataArray);
  };

  /* Replace items */
  const arrayUpdateItems = () => {
    const newDataArray = [...crudData];
    /* Remove first the elements as much as 3 starting from index 2 and then insert 100, 200, 300. We call this replace */
    newDataArray.splice(1, 3, 100, 200, 300);
    setCrudData(newDataArray);
  };

  /* Replace items */
  const resetArray = () => {
    const newDataArray = [...initialData];
    /* Remove first the elements as much as 3 starting from index 2 and then insert 100, 200, 300. We call this replace */
    setCrudData(newDataArray);
  };
  return (
    <div>
      <h1>One Dimension Arrays</h1>
      <span>
        By Plipus Tel{" "}
        <a href="https://www.plipustel.com" target="_blank">
          https://www.plipustel.com
        </a>
      </span>
      <hr></hr>
      <h3>Given Data Array</h3>
      <ul className="numbers">
        {arrData.map((rows, index) => (
          <li className="items" key={index}>
            {rows}
          </li>
        ))}
      </ul>

      <h3>1. Get Array Informations</h3>
      <button onClick={getArrayInfo}>Get Array Info</button>
      <ul>
        {arrayInfoItems.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <h3>2. Read Array</h3>
      <button onClick={readArrayHandler}>Read Data Array</button>
      <ul className="numbers">
        {readArray.map((rows, index) => (
          <li key={index}>{rows}</li>
        ))}
      </ul>
      <h3>3. CRUD Operations: Push (), Pop(), and Splice()</h3>
      <ul className="numbers">
        {crudData.map((rows, index) => (
          <li key={index}>{rows}</li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {/* Left section */}
        <div style={{ marginRight: 20 }}>
          <div>
            <button onClick={arrayPush} style={{ marginInline: 20 }}>
              Push item '8'
            </button>
            <text>
              Insert in the last of array <b>arr.push(8)</b>
            </text>
          </div>
          <div>
            <button onClick={arrayPushSomeItems} style={{ marginInline: 20 }}>
              Push Some Items
            </button>
            <text>
              Insert some items in the last of array <b>arr.push(12, 14, 21)</b>
            </text>
          </div>
          <div>
            <button onClick={arrayInsertAnItem} style={{ marginInline: 20 }}>
              Insert item '18'
            </button>
            <text>
              Insert new item in index 1 <b>arr.splice(1, 0, 18)</b>
            </text>
          </div>
          <div>
            <button onClick={arrayInsertSomeItems} style={{ marginInline: 20 }}>
              Insert items '12', '13', '30'
            </button>
            <text>
              Insert new item in index 1 <b>arr.splice(1, 0, 12, 13, 30)</b>
            </text>
          </div>
        </div>

        {/* Right section */}
        <div>
          <div>
            <button onClick={arrayPop} style={{ marginInline: 20 }}>
              Pop an item
            </button>
            <text>
              Remove an item from the last index <b>arr.pop()</b>
            </text>
          </div>
          <div>
            <button onClick={arrayRemoveAllItems} style={{ marginInline: 20 }}>
              Remove all items
            </button>
            <text>
              Remove all items start from index '2' <b>arr.splice(2)</b>
            </text>
          </div>

          <div>
            <button onClick={arrayRemoveAnItem} style={{ marginInline: 20 }}>
              Remove an item
            </button>
            <text>
              Remove new item in index 1 <b>arr.splice(1, 1)</b>
            </text>
          </div>
          <div>
            <button onClick={arrayRemoveSomeItems} style={{ marginInline: 20 }}>
              Remove some items
            </button>
            <text>
              Remove three items starting from 1 <b>arr.splice(1, 3)</b>
            </text>
          </div>
          <div>
            <button onClick={arrayUpdateItems} style={{ marginInline: 20 }}>
              Update Items
            </button>
            <text>
              Remove three items starting from 1 and then replace{" "}
              <b>arr.splice(1, 3, 100, 200, 300)</b>
            </text>
          </div>

          <div>
            <button onClick={resetArray} style={{ marginInline: 20 }}>
              Reset Array
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
