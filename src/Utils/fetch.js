const fetchAPI = (...req) =>
  fetch(...req)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      throw err; //에러를 밖으로 던짐 갖고있음 안되니께
    });

export default fetchAPI;
