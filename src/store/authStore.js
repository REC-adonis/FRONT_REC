import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:4006/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;