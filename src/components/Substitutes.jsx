import React from "react";
import { connect } from "react-redux";

const Substitutes = ({substitutes, removeSubstitutes}) => (
    <section>
        <h2>Substitutes</h2>
        <div className="subtitutes">
            {
                substitutes.map(p => (
                    <article className="substitute" key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name} />
                            <button onClick={()=> removeSubstitutes(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
        </div>

    </section>
)

const mapStateToProps = state => ({
    substitutes: state.substitutes
})

const mapDispatchToProps = dispatch => ({
    removeSubstitutes(player){
        dispatch({
            type:"REMOVE_SUBSTITUTE",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes)