// import axios from "axios";

// let customAxios = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("token"), // Added space after "Bearer"
//     Accept: "*/*",
//     "Content-Type": "application/json",
//   },
//   timeout: 5000,
// });

// export default customAxios;
import axios from "axios";

let token = localStorage.getItem("token");
let customAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// // Add a response interceptor
// customAxios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized error
//       console.log("Unauthorized, redirecting to login...");
//       // For example, redirect to login page
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default customAxios;
