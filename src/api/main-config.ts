type EnvironmentT = "develop" | "production";

// Retrieve environment variable
const environment: EnvironmentT =
  (process.env.NEXT_PUBLIC_ENVIRONMENT as EnvironmentT) || "develop";

// Base URL based on environment
export const baseUrl: string =
  environment === "production" ? "https://jsonplaceholder.typicode.com" : "";

// API Endpoints
export const endpoints = {
  // Send contact message
  postMessage: `${baseUrl}/app_api/home_page/contact_us`,
};
