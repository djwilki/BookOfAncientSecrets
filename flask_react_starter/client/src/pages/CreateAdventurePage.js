import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AdventureTile from '../components/AdventureTile'
import NewTile from '../components/NewTile'
import { setUserAdventures } from '../store/adventures'
import styles from '../CSS_MODULES/create_adventure.module.css'


function CreateAdventurePage() {
    const userId = useSelector(state => state.session.userId)
    const adventures = useSelector(state => state.entities.adventures)
    const dispatch = useDispatch()

    useEffect(() => {
        const getAdventures = async () => {
            await dispatch(setUserAdventures(userId));
        }
        getAdventures()




    }, [dispatch, userId])


    console.log(adventures)

    const tiles = Object.values(adventures).map((ele, idx) => {
        return (
            <li  key={idx}>
            <AdventureTile title={ele.title} contentId={ele.id} path={"/adventure"} deletePath={"/adventures"}/>
            </li>
        )
    })


    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>Your Adventures</h1>
            <hr></hr>
            <h3>Available Adventures</h3>
            <div>Your published adventures are available to other users for play!</div>
            <ul className={styles.tile_list}>
            {tiles}
            <NewTile type="adventure" />
            </ul>
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         userId: state.session.user_id,
//         adventures: state.entities.adventures,
//     }
// };

// export default connect(mapStateToProps)(CreateAdventurePage);
export default CreateAdventurePage;
