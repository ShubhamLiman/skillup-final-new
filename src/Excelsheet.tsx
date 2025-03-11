import axios from "axios";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyeT1VpicAGiMqbjUTA60ARcAo5tkEFCuy4UDtg-O2HHbAWxAa8GpF1kFXJ9v-iQeQIkg/exec";

interface FormData {
  email: string;
  username: string;
  phonenumber: string;
  qualification: string;
  message: string;
}
export const handleExcelsheetsubmission = async (formdata: FormData) => {
  axios
    .post(scriptURL, formdata)
    .then((response) => {
      alert("Thank you! Form is submitted");
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });
};
