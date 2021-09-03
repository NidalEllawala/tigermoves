

function Gameover () {
  return (
    <div id="game-over" className="modal">
    <div className="modal-background"></div>
    <div id="dsp-winner"className="modal-content">
    <div className="box">
      <h3 id="winner"></h3>
    </div>
    </div>
    <button id="close-me" className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export { Gameover }