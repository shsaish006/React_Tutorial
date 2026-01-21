/*
Program-83: Axios Request Interceptor
Notes:
1. Interceptors modify requests globally.
2. Runs before request is sent.
3. Adds metadata to request.
4. Useful for logging.
5. Can add auth tokens.
6. Centralized request handling.
7. Improves debugging.
8. Runs for all axios calls.
9. No UI component required.
10. Advanced axios feature.
*/

// Program83.js
import React from "react";
import axios from "axios";

axios.interceptors.request.use((req) => {
  req.meta = req.meta || {};
  req.meta.startTime = new Date().getTime();
  console.log("Request started at: ", req.meta.startTime);
  return req;
});

export default function Program83() {
  return <h3>Axios Interceptor Loaded. Check console for logs.</h3>;
}
