/*
Program-85: Axios Request & Response Interceptor Demo
Notes:
1. Demonstrates both request & response interceptors.
2. Measures API call duration.
3. Handles errors gracefully.
4. Uses async/await syntax.
5. Logs info in console.
6. Real-world example using GitHub API.
7. Shows proper error catching (404, etc.).
8. Useful pattern for any React project.
9. Can be extended for auth tokens in request.
10. Demonstrates modern axios features.
*/

import axios from "axios";

// Request interceptor
axios.interceptors.request.use(req => {
  req.meta = req.meta || {};
  req.meta.requestStartedAt = new Date().getTime();
  return req;
});

// Response interceptor
axios.interceptors.response.use(
  res => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    return res;
  },
  err => {
    err.durationInMs = new Date().getTime() - err.config.meta.requestStartedAt;
    throw err;
  }
);

(async () => {
  try {
    const githubUserName = "abraham";
    const url = `https://api.github.com/users/${githubUserName}`;
    const { data, durationInMs } = await axios.get(url, { headers: { Accept: 'application/json' } });
    console.log(`GitHub user: ${data.name}, Company: ${data.company}`);
    console.log(`Response took ${durationInMs} ms`);

    // Attempt a failing request
    const failingUser = "thisUserDoesNotExist";
    await axios.get(`https://api.github.com/users/${failingUser}`);
  } catch(err) {
    console.log(`Error: ${err.message}, Duration: ${err.durationInMs} ms`);
  }
})();
