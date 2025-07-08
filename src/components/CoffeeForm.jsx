import { coffeeOptions } from "../utils";
import Modal from "./Modal";
import Auth from "./Auth";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function CoffeeForm(props) {
  const { isAuthenticated } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState("null");
  const [showCoffeeList, setShowCoffeeList] = useState(false);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const { globalData, setGlobalData, globalUser } = useAuth();

  async function handleSubmitForm() {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }
    if (!selectedCoffee) return;

    try {
      const newGlobalData = {
        ...(globalData || {}),
      };
      const nowTime = Date.now();
      const timeToSubstract = hour * 60 * 60 * 1000 + min * 60 * 1000;
      const timeStamp = nowTime - timeToSubstract;
      const newData = {
        name: selectedCoffee,
        cost: coffeeCost,
      };

      newGlobalData[timeStamp] = newData;
      console.log(timeStamp, selectedCoffee, coffeeCost);
      setGlobalData(newGlobalData);
      const userRef = doc(db, "users", globalUser.uid);
      const res = await setDoc(
        userRef,
        {
          [timeStamp]: newData,
        },
        { merge: true },
      );
      setSelectedCoffee(null);
      setMin(0);
      setHour(0);
      setCoffeeCost(0);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={() => setShowModal(false)}>
          <Auth handleCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
      <div className="section-hearder">
        <h2>Start traking today</h2>
      </div>
      <h4>Select Coffee Type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button
              onClick={() => {
                setSelectedCoffee(option.name);
                setShowCoffeeList(false);
              }}
              className={
                "button-card" +
                (option.name === selectedCoffee
                  ? " coffee-button-selected"
                  : "")
              }
              key={optionIndex}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine}mg</p>
            </button>
          );
        })}
        <button
          onClick={() => {
            setShowCoffeeList(true);
            setSelectedCoffee("null");
          }}
          className={
            "button-card" + (showCoffeeList ? " coffee-button-selected" : "")
          }
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeeList && (
        <select
          onChange={(e) => {
            setSelectedCoffee(e.target.value);
            setShowCoffeeList(false);
          }}
          name=""
          id="coffee-list"
          className="coffee-list"
        >
          <option value="null">Select option</option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option value={option.name} key={optionIndex}>
                {option.name} ({option.caffeine}mg)
              </option>
            );
          })}
        </select>
      )}
      <h4>Add the cost</h4>
      <input
        type="number"
        value={coffeeCost}
        onChange={(e) => setCoffeeCost(e.target.value)}
        placeholder="4.5"
        className="w-full"
      />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select
            id="hours-select"
            onChange={(e) => {
              setHour(e.target.value);
            }}
          >
            <option value="0">0</option>
            {[...Array(24).keys()].map((hour) => (
              <option value={hour} key={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h6>Minutes</h6>
          <select
            id="minutes-select"
            onChange={(e) => {
              setMin(e.target.value);
            }}
          >
            <option value="0">0</option>
            {[0, 5, 10, 15, 30, 45].map((minute) => (
              <option value={minute} key={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={handleSubmitForm}>
        <p>Add Entry</p>
      </button>
    </>
  );
}
