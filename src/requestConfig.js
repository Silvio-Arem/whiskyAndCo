import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

export const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    'Content-Type': 'application/json',
  }
});
