import { useState, useEffect } from "preact/hooks";
import "./style.css";

export default function Keybored() {
  // Define a state variable to keep track of the currently pressed key.
  const [pressedKey, setPressedKey] = useState(null);

  // Define a function to handle key down events.
  const handleKeyDown = (event) => {
    // Get the key that the user pressed.
    const code = event.code.toLowerCase();

    // Set the pressed key in the state.
    setPressedKey(code);
  };

  // Define a function to handle key up events.
  const handleKeyUp = () => {
    // Clear the pressed key in the state when the key is released.
    setPressedKey(null);
  };

  // Use the `useEffect` hook to add and remove event listeners for key events.
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Clean up the event listeners when the component unmounts.
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // Empty dependency array ensures that the event listeners are set up only once.

  return (
    <>
      <div class="keyboard-base">
        {/** Render your keys and apply CSS classes based on the pressedKey state */}
        <div class={`key ${pressedKey === "~" ? "active" : ""}`}>~</div>
        <div class={`key ${pressedKey === "digit1" ? "active" : ""}`}>1</div>
        <div class={`key ${pressedKey === "digit2" ? "active" : ""}`}>2</div>
        <div class={`key ${pressedKey === "digit3" ? "active" : ""}`}>3</div>
        <div class={`key ${pressedKey === "digit4" ? "active" : ""}`}>4</div>
        <div class={`key ${pressedKey === "digit5" ? "active" : ""}`}>5</div>
        <div class={`key ${pressedKey === "digit6" ? "active" : ""}`}>6</div>
        <div class={`key ${pressedKey === "digit7" ? "active" : ""}`}>7</div>
        <div class={`key ${pressedKey === "digit8" ? "active" : ""}`}>8</div>
        <div class={`key ${pressedKey === "digit9" ? "active" : ""}`}>9</div>
        <div class={`key ${pressedKey === "digit0" ? "active" : ""}`}>0</div>
        <div class={`key ${pressedKey === "minus" ? "active" : ""}`}>-</div>
        <div class={`key ${pressedKey === "equal" ? "active" : ""}`}>+</div>

        <div class={`key delete ${pressedKey === "backspace" ? "active" : ""}`}>
          Delete
        </div>
        <div class={`key tab ${pressedKey === "tab" ? "active" : ""}`}>Tab</div>
        <div class={`key ${pressedKey === "keyq" ? "active" : ""}`}>Q</div>
        <div class={`key ${pressedKey === "keyw" ? "active" : ""}`}>W</div>
        <div class={`key ${pressedKey === "keye" ? "active" : ""}`}>E</div>
        <div class={`key ${pressedKey === "keyr" ? "active" : ""}`}>R</div>
        <div class={`key ${pressedKey === "keyt" ? "active" : ""}`}>T</div>
        <div class={`key ${pressedKey === "keyy" ? "active" : ""}`}>Y</div>
        <div class={`key ${pressedKey === "keyu" ? "active" : ""}`}>U</div>
        <div class={`key ${pressedKey === "keyi" ? "active" : ""}`}>I</div>
        <div class={`key ${pressedKey === "keyo" ? "active" : ""}`}>O</div>
        <div class={`key ${pressedKey === "keyp" ? "active" : ""}`}>P</div>
        <div class={`key ${pressedKey === "bracketleft" ? "active" : ""}`}>
          [
        </div>
        <div class={`key ${pressedKey === "bracketright" ? "active" : ""}`}>
          ]
        </div>

        <div
          class={`key backslash ${pressedKey === "backslash" ? "active" : ""}`}
        >
          \
        </div>
        <div
          class={`key capslock ${pressedKey === "capslock" ? "active" : ""}`}
        >
          CapsLock
        </div>
        <div class={`key ${pressedKey === "keya" ? "active" : ""}`}>A</div>
        <div class={`key ${pressedKey === "keys" ? "active" : ""}`}>S</div>
        <div class={`key ${pressedKey === "keyd" ? "active" : ""}`}>D</div>
        <div class={`key ${pressedKey === "keyf" ? "active" : ""}`}>F</div>
        <div class={`key ${pressedKey === "keyg" ? "active" : ""}`}>G</div>
        <div class={`key ${pressedKey === "keyh" ? "active" : ""}`}>H</div>
        <div class={`key ${pressedKey === "keyj" ? "active" : ""}`}>J</div>
        <div class={`key ${pressedKey === "keyk" ? "active" : ""}`}>K</div>
        <div class={`key ${pressedKey === "keyl" ? "active" : ""}`}>L</div>
        <div class={`key ${pressedKey === "semicolon" ? "active" : ""}`}>;</div>
        <div class={`key ${pressedKey === "quote" ? "active" : ""}`}>'</div>
        <div class={`key return ${pressedKey === "enter" ? "active" : ""}`}>
          Return
        </div>
        <div
          class={`key leftshift ${pressedKey === "shiftleft" ? "active" : ""}`}
        >
          Shift
        </div>
        <div class={`key ${pressedKey === "keyz" ? "active" : ""}`}>Z</div>
        <div class={`key ${pressedKey === "keyx" ? "active" : ""}`}>X</div>
        <div class={`key ${pressedKey === "keyc" ? "active" : ""}`}>C</div>
        <div class={`key ${pressedKey === "keyv" ? "active" : ""}`}>V</div>
        <div class={`key ${pressedKey === "keyb" ? "active" : ""}`}>B</div>
        <div class={`key ${pressedKey === "keyn" ? "active" : ""}`}>N</div>
        <div class={`key ${pressedKey === "keym" ? "active" : ""}`}>M</div>
        <div class={`key ${pressedKey === "comma" ? "active" : ""}`}>,</div>
        <div class={`key ${pressedKey === "period" ? "active" : ""}`}>.</div>
        <div class={`key ${pressedKey === "slash" ? "active" : ""}`}>/</div>
        <div class={`key rightshift ${ pressedKey === "shiftright" ? "active" : ""}`}>Shift</div>
        <div class={`key leftctrl ${pressedKey === "controlleft" ? "active" : ""}`}>Ctrl</div>

        <div class={`key ${pressedKey === "altleft" ? "active" : ""}`}>Alt</div>
        <div class={`key command${pressedKey === "COMMAND" ? "active" : ""}`}>
          Command
        </div>
        <div class={`key space${pressedKey === " " ? "active" : ""}`}>
          Space
        </div>
        <div class={`key command${pressedKey === "COMMAND" ? "active" : ""}`}>
          Command
        </div>
        <div class={`key ${pressedKey === "altright" ? "active" : ""}`}>
          Alt
        </div>
        <div class={`key ${pressedKey === "controlright" ? "active" : ""}`}>
          Ctrl
        </div>
        <div class={`key ${pressedKey === "FN" ? "active" : ""}`}>Fn</div>
      </div>
    </>
  );
}
