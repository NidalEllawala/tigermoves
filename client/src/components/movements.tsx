import { placeGoat } from './helpers';
import { Board } from './interfaces';

type MovementsProps = {
  movements: Board[];
  fnc: any;
  goatPlaced: any
}

function Movements ({movements, fnc, goatPlaced}: MovementsProps) {

  // const selectPiece = (moves: number[], capture: number[], index: number) => {
  //   fnc((prev: Board[]) => {
  //     const next: Board[] = [];
  //     prev.forEach((item) => {
  //     next.push({...item})
  //   });
  //   if (moves.length) {
  //     moves.forEach((move) => {
  //       next[move].placePiece = true;
  //     });
  //   if (capture.length) {
  //     capture.forEach((move) => {
  //       next[move].capturePiece = true;
  //     });
  //   }
  //   next[index].selected = true;
  //   }
  //   })
  // }

  // const placeGoat = (index: number) => {
  //   sock.emit('goat paced', {
  //     index,

  //   })
    // fnc((prev: Board[]) => {
    //   const next: Board[] = [];
    //   prev.forEach((item) => {
    //   next.push({...item})
    // });
    //})
  //}
  const positions = movements.map((position, index) => {
    //if ismoveable true attach event handler
    /*
    function movePiece(i) {
      //access index in board
      //get array and change class property
      //attach eventhandler
      //change index at board to deselct piece
    } 
    */
    switch (position.contains) {
      case 'tiger':
        if (position.isMoveable) {
          return <div id={index.toString()} className="default highlight" /*onClick={() => {selectPiece(position.moveTo, position.capture, index)}}*/>{"\u9899"}</div>
        } else {
          return <div id={index.toString()} className="default">{"\u9899"}</div>
        }
      case 'goat':
        return <div id={index.toString()} className="default">{"\u9898"}</div>
      default:
        if (position.placePiece) {
          return <div id={index.toString()} className="highlight move-piece"></div>
        } else if (position.capturePiece) {
          return <div id={index.toString()} className="default capture"></div>
        } else if (position.placeGoat) {
          return <div id={index.toString()} className="default highlight" onClick={() => {goatPlaced(index)}}></div>
        } else {
          return <div id={index.toString()} className="default"></div>
        }
      }
    });
  
  return (
    <div id="movements">{positions}</div>
  );
}
    
export { Movements }


    //   return (
//     <div id="movements">
//       <div id="0" className="default"></div>
//       <div id="1" className="default"></div>
//       <div id="2" className="default"></div>
//       <div id="3" className="default"></div>
//       <div id="4" className="default"></div>

//       <div id="5" className="default"></div>
//       <div id="6" className="default"></div>
//       <div id="7" className="default"></div>
//       <div id="8" className="default"></div>
//       <div id="9" className="default"></div>

//       <div id="10" className="default"></div>
//       <div id="11" className="default"></div>
//       <div id="12" className="default"></div>
//       <div id="13" className="default"></div>
//       <div id="14" className="default"></div>

//       <div id="15" className="default"></div>
//       <div id="16" className="default"></div>
//       <div id="17" className="default"></div>
//       <div id="18" className="default"></div>
//       <div id="19" className="default"></div>

//       <div id="20" className="default"></div>
//       <div id="21" className="default"></div>
//       <div id="22" className="default"></div>
//       <div id="23" className="default"></div>
//       <div id="24" className="default"></div>
//       </div>
//   );
// }
