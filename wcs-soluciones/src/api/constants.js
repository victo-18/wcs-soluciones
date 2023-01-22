const SERVER_URL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : undefined;
export let TOKEN_AUTH = undefined;

export function setTokenDev(token) {
    TOKEN_AUTH = token;
}

export function removeTokenDev() {
    TOKEN_AUTH = undefined;
}

export default SERVER_URL;