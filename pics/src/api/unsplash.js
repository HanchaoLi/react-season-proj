import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ddfd1818b73b0556ca485a65d990749d370e0f03117242275a7a852c3bf24779"
  }
});
