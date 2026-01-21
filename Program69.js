/*
Program-69: Checkbox Handling (Controlled Component)
====================================================
Notes:
1. Checkbox is handled as a controlled input.
2. useState stores boolean checked value.
3. checked attribute is bound to state.
4. onChange toggles checkbox value.
5. e.target.checked gives true/false.
6. Useful for terms & conditions acceptance.
7. Prevents uncontrolled checkbox behavior.
8. State always reflects checkbox UI.
9. Can be extended to multiple checkboxes.
10. Common interview and real-world example.
*/

import React, { useState } from "react";

export default function Program69() {
  const [agree, setAgree] = useState(false);

  const changeHandler = (e) => {
    setAgree(e.target.checked);
  };

  return (
    <div>
      <h2>Program-69: Checkbox Example</h2>
      <input type="checkbox" checked={agree} onChange={changeHandler} />
      I agree to the terms
      <br /><br />
      <button disabled={!agree}>Submit</button>
    </div>
  );
}
