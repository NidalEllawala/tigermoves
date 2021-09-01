

// const newGame = (player: string) => {
//   fetch('http://localhost:3001/newGame', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({player: player})
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
// }

const newGame = (url: string, role: string) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({player: role})
  })
  .then(response => response.json())
}

const joinGame = (url: string, id: number) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'COntent-Type': 'application/json'
    },
    body: JSON.stringify({id: id})
  })
  .then(response => response.json());
}

export { newGame, joinGame };