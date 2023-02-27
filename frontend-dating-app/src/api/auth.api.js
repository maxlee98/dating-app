import axios from "axios";
import { ENDPOINT } from "./endpoints";

export default class AuthAPI {
  constructor() {}

  /**
   * Create a new user in the platform
   * @param {username : string, email : string, password : whatever} request
   */
  static async register(request) {
    try {
      const response = await axios.post(ENDPOINT.REGISTER, request);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async login(req) {
    const response = await axios.post(ENDPOINT.LOGIN, req);
    return response.data;
  }

  // Examples for future references
  static async listUsers(pageNo, accessToken) {
    const response = await axios.get(ENDPOINT.LIST_USERS(pageNo), {
      headers: {
        authorization: accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  static async singleUser(userId) {
    const response = await axios.get(ENDPOINT.SINGLE_USER(userId));
    console.log(response.data);
  }

  /**
   * Create a new user in the platform
   * @param {name : string, job : string} request
   */
  static async create(request) {
    const response = await axios.post(ENDPOINT.CREATE, request);
    console.log(response.data);
  }
}
