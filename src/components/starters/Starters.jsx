import React from "react";
import { connect } from "react-redux";
import style from "./starters.module.css"
import field from "../../cancha (1).svg"

const Starters = ({starters, removeStarter}) => (
    <section>
        <h2>Starters</h2>
        <div className={style.field}>
            {
                starters.map(p => (
                    <article className={style.starter} key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name} />
                            <button onClick={()=>removeStarter(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
            <img src={field} alt="field of tootball" />
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