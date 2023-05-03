export const getApiHost = () =>
  (window.location.host === "localhost:3000"
    ? "http://localhost:1337"
    : "https://admin.motherline.app") + "/api";

export const getStaticPages = () => {
  return "test";
};
