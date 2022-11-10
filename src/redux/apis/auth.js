import axios from 'axios'
const url = "http://localhost:5000/users/auth"

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const registerUserApi = async (fname, lname, email, phone, password) =>
  await axios.post(`${url}/idpswd`, { fname, lname, email, phone, password }, config)

export const loginUserApi = async (email, password) =>
  await axios.post(`${url}/login`, { email, password }, config)

