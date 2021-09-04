import { Board } from './interfaces';

type MovementsProps = {
  movements: Board[];
}

function Movements ({movements}: MovementsProps) {
  const positions = movements.map((position, index) => {
    switch (position.contains) {
      case 'tiger': 
        return <div id={index.toString()} className="default"></div>
      case 'goat':
        return <div id={index.toString()} className="default"></div>
      default:
        return <div id={index.toString()} className="default"></div>
      }
    });
  

  return (
    <div>{positions}</div>
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
