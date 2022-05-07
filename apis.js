//https://jsonplaceholder.typicode.com/todos/1

// const url = (id) => `https://jsonplaceholder.typicode.com/todos/${id}`;
// fetch(url(2))
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     //error handling code here
//     console.log(e);
//   }); // it will return a promise to us

//async await
const consumeApi = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (e) {
    // error hendling code here
    console.log(e);
  }
};

//consumeApi(url('1'));

const mockApi = async (isReject) => {
  return new Promise((reslove, reject) => {
    return setTimeout(() => {
      if (isReject) {
        reject({ status: 500, message: 'There is an error' });
      } else {
        reslove({
          status: 200,
          data: {
            id: 1,
            title: 'fdfadfafaf',
          },
        });
      }
    }, 1000);
  });
};

const consumeApi2 = async () => {
  try {
    const resp = await mockApi(true);
    console.log(resp);
  } catch (e) {
    // error hendling code here
    console.log(e);
  }
};

consumeApi2();
