/*
Program-37: Remaining Character Counter
Notes:
1. useState hook is used to track remaining characters.
2. textarea input is controlled indirectly using onKeyUp event.
3. maxLength attribute restricts maximum characters user can type.
4. e.target.value provides current value of textarea.
5. setRemaining updates state with the remaining characters: 100 - typed length.
6. State update triggers re-render to update remaining count dynamically.
7. Can be used for tweet boxes, feedback forms, and messages.
8. Using onKeyUp ensures count updates after each key press.
9. Could also use onChange instead of onKeyUp.
10. Functional components do not need constructor.
11. UI shows textarea and remaining character count.
12. Can easily extend to show warning when characters left < 10.
13. React re-renders only the affected part of DOM for performance.
14. State is preserved across re-renders in functional components.
15. No need for class components; hooks are simpler for such tasks.
*/

import React, { useState } from "react";

export default function RemainingChar() {
  const [remaining, setRemaining] = useState(100); // Initial characters left

  // Handler for textarea input
  const keyUpHandler = (e) => {
    const msg = e.target.value; // Current typed value
    setRemaining(100 - msg.length); // Update remaining characters
  };

  return (
    <div>
      <h2>Remaining Character Counter</h2>
      <textarea
        onKeyUp={keyUpHandler}
        maxLength={100}
        placeholder="Type your message..."
        rows={5}
        cols={40}
      ></textarea>
      <p>Remaining Characters: {remaining}</p>
    </div>
  );
}
