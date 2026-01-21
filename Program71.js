/*
Program-71: Form Data Stored as Object
=====================================
Notes:
1. Entire form data stored in one state object.
2. Spread operator preserves old values.
3. Cleaner than multiple useState calls.
4. Easy to submit whole object.
5. Useful for APIs.
6. Controlled inputs.
7. Scalable approach.
8. Prevents state overwrite.
9. Preferred in real projects.
10. Shows live state preview.
*/

import React, { useState } from "react";

export default function Program71() {
  const [user, setUser] = useState({ fname: "sachin", lname: "tendulkar" });

  return (
    <div>
      <h2>Program-71: Form Object State</h2>
      <input
        value={user.fname}
        onChange={(e) => setUser({ ...user, fname: e.target.value })}
      />
      <br />
      <input
        value={user.lname}
        onChange={(e) => setUser({ ...user, lname: e.target.value })}
      />
      <p>{user.fname} {user.lname}</p>
    </div>
  );
}
