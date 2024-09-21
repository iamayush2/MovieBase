import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjUzMjMxOTI0NjU4YjM4NGRiN2E3OTJjYmY4OTY5OSIsIm5iZiI6MTcyNjQ4Nzg5MS4xNDEzNzcsInN1YiI6IjY2ZTdmYzZjMzc2OGE3M2Y4ZDkxYzUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DRgZC9HJI3cEiis9K-EL9wiP5XsRnFS0ZlwdSUaRJ2Q",
  },
});

export default instance;
