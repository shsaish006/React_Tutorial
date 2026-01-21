/*
Program-62: useEffect Cleanup (componentWillUnmount in Functional Component)
Notes:
1. Demonstrates cleanup when functional component unmounts.
2. useEffect with return function executes cleanup.
3. useState manages dynamic state changes.
4. Console logs show mounting/updating/unmounting sequence.
5. Useful for clearing timers, unsubscribing listeners, or cancelling API calls.
6. Functional equivalent of componentWillUnmount.
7. Demonstrates stable cleanup in functional components.
8. Controlled buttons trigger state changes.
9. Cleanup function only runs on unmount due to empty dependency array.
10. Best practice for resource management in modern React.
*/

import React, { useEffect, useState } from "react";

export default function Demo3() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("useEffect called while mounting/updating");
    return () => {
      console.log("useEffect called while unmounting");
    };
  }, []);

  return (
    <div>
      <p>This is a paragraph</p>
      <button onClick={() => setColor("blue")}>Change Color</button>
      <h2>Color value is {color}</h2>
    </div>
  );
}
