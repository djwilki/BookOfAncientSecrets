import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import ContentTile from '../components/ContentTile'
import NewTile from '../components/NewTile'
import { setUserAdventures } from '../store/adventures'

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
            <li key={idx}>
            <ContentTile title={ele.title} contentId={ele.id} type={"adventure"} />
            </li>
        )
    })


    return (
        <>
            <h1>Your Adventures</h1>
            <ul>
            <ContentTile title={"bob"} />
            {tiles}
            <NewTile type="adventure" />
            </ul>
        </>
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
