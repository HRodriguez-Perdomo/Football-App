import React from "react";
import { connect } from "react-redux";

const Starters = ({starters, removeStarter}) => (
    <section>
        <h2>Starters</h2>
        <div className="field">
            {
                starters.map(p => (
                    <article className="starter" key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name} />
                            <button onClick={()=>removeStarter(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
        </div>

    </section>
)

const mapStateToProps = state => ({
    starters: state.starters
})

const mapDispatchToProps = dispatch => ({
    removeStarter(player){
        dispatch({
            type:"REMOVE_STARTER",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Starters)