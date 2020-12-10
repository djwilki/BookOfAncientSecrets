import React from 'react'
import styles from '../CSS_MODULES/content_tile.module.css'
import { withRouter } from 'react-router-dom';


function StatTile({statName, statValue}) {

    return (
        <div className={styles.stat_modifier}>
            <div className={styles.stat_value}>
                <h1>{statName}</h1>
                {Math.floor((statValue - 10) / 2) > 0 ? "+" : ""}{Math.floor((statValue - 10) / 2)}
                <div>
                    {statValue}
                </div>
            </div>
        </div>
    )
}

export default withRouter(StatTile);
