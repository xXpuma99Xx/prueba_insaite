const axios = require("axios");

const post = async () => {
  return axios
    .get(
      "https://1er1go3qtc.execute-api.us-east-1.amazonaws.com/dev/evaluation-dev"
    )
    .then((res) => res.data.data)
    .catch((err) => err);
};

module.exports = post;
