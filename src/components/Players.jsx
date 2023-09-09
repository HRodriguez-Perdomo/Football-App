import React from "react";
import { connect } from "react-redux";


const Players = ({players, addStarters,addSubstitute})=>(
    <section>
        <h2>Players</h2>
        <div className="container-players">
            {
                players.map(p =>(
                <article className="player" key={p.id}>
                            <img src={p.photo} alt={p.name} />
                            <h3>{p.name}</h3>
                            <div>
                                   <button onClick={()=> addStarters(p)}> Starters </button>
                                   <button onClick={()=> addSubstitute(p)}> Substitutes </button>
                            </div>
                       </article>
                   ))
            }
        </div>
    </section>
)

const mapStateToProps = state =>({
    players: state.players
})
const mapDispatchToProps = dispatch => ({
    addStarters(player){
        dispatch({
            type: "ADD_STARTER",
            player
        })
    },
    addSubstitute(player){
        dispatch({
            type: "ADD_SUBSTITUTE",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)
