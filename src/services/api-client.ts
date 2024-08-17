import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e0aa8f481c514a79bb4735987bdb7692",
  },
});
