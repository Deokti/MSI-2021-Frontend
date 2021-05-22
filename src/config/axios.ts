import axios from "axios";
import { API_KEY } from "./API_KEY";

axios.defaults.headers.common["x-api-key"] = API_KEY;

export { axios }