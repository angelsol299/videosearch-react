import axios from "axios";

const KEY = "AIzaSyDwcfnATIs2fV9vioFOPulPqXxMe2bh7Ng";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
