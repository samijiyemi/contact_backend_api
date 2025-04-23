const { constants } = require("./constants");

const res =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoib2diZW5pc2FtdSIsImVtYWlsIjoic2FtaWppeWVtaUBnbWFpbC5jb20iLCJpZCI6IjY4MDkxODVhMGVjYjhlOTllNjFiYWM1OSJ9LCJpYXQiOjE3NDU0NDU4MDYsImV4cCI6MTc0NTQ0OTQwNn0._WBYlT5mwyJGFw3wgK8j7oPlO3ugmOIeLWLWYkrjHlE";

if (res.startsWith("Bearer")) {
  console.log(res.split(" ")[1]);
} else {
  console.log(constants.UNAUTHORIZED);
}
