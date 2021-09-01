

function JoinExistingGame ({handleJoin}: any) {
  return (
    <div id="panel">
      <form onSubmit={(event) => {
        handleJoin();
      }}>
        <label className="text">Enter your game id below:
          <input type="text" name="id" id="id" />
        </label>
        <button type="submit" className="button is-fullwidth panel-item">Play Bagh Chal</button>
      </form>
    </div>
  )
}

export { JoinExistingGame };