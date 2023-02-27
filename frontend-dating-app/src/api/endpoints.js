const BASE_URL = "http://localhost:4000";

export const ENDPOINT = {
  LIST_USERS: (pageNo) => `${BASE_URL}/users?page=${pageNo}`,
  SINGLE_USER: (id) => `${BASE_URL}/users/${id}`,
  CREATE: `${BASE_URL}/users`,
  UPDATE: `${BASE_URL}/users/2`,
  REGISTER: `${BASE_URL}/api/register-account`,
  LOGIN: `${BASE_URL}/login`,
};
