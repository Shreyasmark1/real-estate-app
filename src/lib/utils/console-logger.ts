import { ENVIRONMENT } from "../../config/env-helper";

// For Making Log on Develop Mode
export const logOnDev = (message: any, isError?: boolean) => {
  if (ENVIRONMENT === "dev") {
    if (isError) {
      console.error(`🧑‍💻 ${message}`)
    } else {
      console.log(`🧑‍💻 ${message}`);
    }
  }
};