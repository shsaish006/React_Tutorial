/*
Program-38: Selected Value from Dropdown
Notes:
1. useState hook tracks currently selected option.
2. Array of stateNames used to populate <option> elements dynamically.
3. onChange event updates state using setSelectedState.
4. selected value displayed below dropdown.
5. key prop used in map for unique identification.
6. Can be extended for country/state/city selectors.
7. Functional component automatically re-renders on selection change.
8. Using map ensures scalable code for many options.
9. State updates are synchronous in hooks but cause re-render asynchronously.
10. Can combine multiple select boxes using multiple useState hooks.
11. placeholder text can guide user selection.
12. React controlled components help manage form values efficiently.
*/

import React, { useState } from "react";

export default function StateDropDown() {
  const stateNames = ["Karnataka", "Odisha", "Tamilnadu", "Kerala", "Bihar", "UP"];
  const [selectedState, setSelectedState] = useState(stateNames[0]);

  const stateChanged = (e) => setSelectedState(e.target.value);

  return (
    <div>
      <h2>Select a State</h2>
      <select onChange={stateChanged} value={selectedState}>
        {stateNames.map((state, idx) => (
          <option key={idx} value={state}>
            {state}
          </option>
        ))}
      </select>
      <h3>You have Selected: {selectedState}</h3>
    </div>
  );
}
