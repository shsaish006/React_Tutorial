/*
Program-84: Axios Response Interceptor
Notes:
1. Response interceptor calculates request duration.
2. Useful for logging and performance metrics.
3. Can handle both success and error responses.
4. Global interceptor applies to all axios calls.
5. Avoid repeating code in multiple API calls.
6. Shows best practices in axios usage.
7. Can extend to log errors centrally.
8. No UI needed, works in background.
9. Improves debugging and monitoring.
10. Enhances maintainability in large projects.
*/

import axios from "axios";

// Response interceptor
axios.interceptors.response.use(
  res => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    console.log(`Request to ${res.config.url} took ${res.durationInMs} ms`);
    return res;
  },
  err => {
    err.durationInMs = new Date().getTime() - err.config.meta.requestStartedAt;
    console.log(`Error in request to ${err.config.url}, duration ${err.durationInMs} ms`);
    throw err;
  }
);
