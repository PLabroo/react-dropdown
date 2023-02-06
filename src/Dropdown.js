import { useState } from "react";

// Dropdown Component
const Dropdown = (props) => {
  const { options } = props;

  //   console.log(props);
  //  UseState hook and handlers
  const [isActive, setIsActive] = useState(false);
  const handleMouseOver = () => {
    setIsActive(true);
  };
  const handleClick = (option) => {
    let button = document.querySelector("button");
    // console.log(button);
    button.textContent = option;
    setIsActive(false);
  };
  return (
    <div className="content">
      <div className="button">
        <button onMouseOver={handleMouseOver}>
          Choose Here
          <i
            style={{ marginLeft: "1.3rem", fontSize: "1rem" }}
            class="fa-solid fa-angle-down"
          ></i>
        </button>
      </div>

      {isActive && (
        <div className="dropdown-options">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleClick(option)}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
