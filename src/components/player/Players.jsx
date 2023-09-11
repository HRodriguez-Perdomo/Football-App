// import React from "react";
// import { connect } from "react-redux";
// import style from "./players.module.css"
// import { useEffect, createRef } from "react";
// 
// const Players = ({players, addStarters,addSubstitute})=>{   
// 
//     const gridJugadores = createRef()
// 
//   useEffect(() => {
//     setScrollContainer()
//     document.addEventListener('click', setScrollContainer)
//   }, []) 
// 
//   // Función que fija el tamaño del grid de los jugadores
//   const setScrollContainer = (desktop = true) => {
//     let container = gridJugadores.current
//     if (container) {
//       console.log('setScrollContainer ejecutándose')
//       const generatedGrid = () => {
//         let items = container.getElementsByClassName('player')
//         let itemsLength = items.length
//         let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1
// 
//         const getWidth = () => {
//           let n = bp + (itemsLength > bp ? 0.3 : 0)
//           return (itemsLength / n) * 100
//         }
//         return `
//                 display: grid;
//                 grid-template-columns: repeat(${itemsLength}, 225px);
//                 grid-gap: 1rem;
//                 width : ${getWidth()}%;
//               `
//       }
//       let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
//       container.setAttribute('style', styles)
//     }
//   }
//   console.log('Componente Players renderizado');
// 
//   return ( 
//     <section>
//         <h2>Players</h2>
//         <div className={style.container-players}>
//             <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}> 
//             {
//                 players.map(p =>(
//                 <article className={style.player} key={p.id}>
//                             <img className={style.img} src={p.photo} alt={p.name} />
//                             <h3>{p.name}</h3>
//                             <div>
//                                    <button onClick={()=> addStarters(p)}> Starters </button>
//                                    <button onClick={()=> addSubstitute(p)}> Substitutes </button>
//                             </div>
//                        </article>
//                    ))
//             }
//             </div>
//         </div>
//     </section>
// )
// }
// 
// const mapStateToProps = state =>({
//     players: state.players
// })
// const mapDispatchToProps = dispatch => ({
//     addStarters(player){
//         dispatch({
//             type: "ADD_STARTER",
//             player
//         })
//     },
//     addSubstitute(player){
//         dispatch({
//             type: "ADD_SUBSTITUTE",
//             player
//         })
//     }
// })
// 
// export default connect(mapStateToProps, mapDispatchToProps)(Players)


import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import style from "./players.module.css";

const Players = ({ players, addStarters, addSubstitute }) => {
  const gridJugadores = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setScrollContainer();
    window.addEventListener("resize", setScrollContainer);
    return () => {
      window.removeEventListener("resize", setScrollContainer);
    };
  }, []);

  const setScrollContainer = () => {
    const container = gridJugadores.current;
    if (container) {
      const items = container.getElementsByClassName(style.player);
      const itemsLength = items.length;
      const bp = window.matchMedia("(min-width: 640px)").matches
        ? window.matchMedia("(min-width: 1024px)").matches
          ? 4
          : 2
        : 1;

      const getWidth = () => {
        const n = bp + (itemsLength > bp ? 0.3 : 0);
        return (itemsLength / n) * 100;
      };

      container.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${itemsLength}, 225px);
        grid-gap: 1rem;
        width: ${getWidth()}%;
        transform: translateX(-${scrollLeft}px);
        transition: transform 0.3s ease;
      `;
    }
  };

  const handleScrollLeft = () => {
    const container = gridJugadores.current;
    if (container) {
      const itemWidth = 225; // Ancho de un elemento
      const newPosition = scrollLeft - itemWidth;
      setScrollLeft(Math.max(0, newPosition));
    }
  };

  const handleScrollRight = () => {
    const container = gridJugadores.current;
    if (container) {
      const itemWidth = 225; // Ancho de un elemento
      const containerWidth = container.clientWidth;
      const totalWidth = itemWidth * players.length;
      const newPosition = scrollLeft + itemWidth;
      setScrollLeft(Math.min(totalWidth - containerWidth, newPosition));
    }
  };

  return (
    <section>
      <h2>Players</h2>
      <div className={style.container}>
        <div className={style.scrollableContainer}>
          <button onClick={handleScrollLeft} className={style.scrollButton}>
            {"<"}
          </button>
          <div ref={gridJugadores} className={style.gridContainer}>
            {players.map((p) => (
              <article className={style.player} key={p.id}>
                <img className={style.img} src={p.photo} alt={p.name} />
                <h3>{p.name}</h3>
                <div>
                  <button onClick={() => addStarters(p)}> Starters </button>
                  <button onClick={() => addSubstitute(p)}> Substitutes </button>
                </div>
              </article>
            ))}
          </div>
          <button onClick={handleScrollRight} className={style.scrollButton}>
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  addStarters(player) {
    dispatch({
      type: "ADD_STARTER",
      player,
    });
  },
  addSubstitute(player) {
    dispatch({
      type: "ADD_SUBSTITUTE",
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
