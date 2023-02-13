let apiUrl;
const expressPort = 5000;
const apiUrLs = {
  development: `http://localhost:${expressPort}/api`,
  production: `http://example.domain.com/api`,
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrLs.development;
} else {
  apiUrl = apiUrLs.production;
}

export default apiUrl;
