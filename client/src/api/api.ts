

const newGame = (player: string) => {
  const newGameInfo = fetch('http://localhost:3001/newGame', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({player: player})
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
}

export { newGame };