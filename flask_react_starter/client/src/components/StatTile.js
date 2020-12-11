import React from 'react'
import styles from '../CSS_MODULES/stat_tile.module.css'
import { withRouter } from 'react-router-dom';


function StatTile({statName, statValue}) {

    return (
        <div className={styles.stat_modifier}>
                <div>{statName}</div>
                <div className={styles.modifier}>{Math.floor((statValue - 10) / 2) > 0 ? "+" : ""}{Math.floor((statValue - 10) / 2)}</div>
                <div  className={styles.stat_value}>
                    {statValue}
                </div>
        </div>
    )
}

export default withRouter(StatTile);
