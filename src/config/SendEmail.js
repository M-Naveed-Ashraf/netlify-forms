// Import Axios
import axios from "axios";

export default function sendEmail(emailMessage) {
    // Sending email
    axios.post("https://gaper-email-service.herokuapp.com/sendEmail", emailMessage, {headers: { key: "1eb2cy567keyoipaex-assqwe12" },})
      .then(function (response) {})
      .catch(function (error) {})
  }