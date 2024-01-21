import { ENVIRONMENT } from "./env-helper";

// For Making Log on Develop Mode
export const logOnDev = (message: any, isError?: boolean) => {
  return null
  if (ENVIRONMENT === "dev") {
    if (isError) {
      console.error(`🧑‍💻 ${message}`)
    } else {
      console.log(`🧑‍💻 ${message}`);
    }
  }
};