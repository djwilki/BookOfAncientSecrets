import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import ContentTile from '../components/ContentTile'
import {setUserAdventures} from '../store/adventures'

function CreateAdventurePage(props) {
    const userId = useSelector(state => state.session.userId)

    const dispatch = useDispatch()

    useEffect(() => {
        const getAdventures = async () => {
            await dispatch(setUserAdventures(userId));
        }
        getAdventures()




    }, [dispatch, userId])

    return (
        <>
            <h1>Your Adventures</h1>
            <ContentTile title={"bob"} />
            <div>
                <button>Create New Adventure</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.user_id,
        notebooks: state.entities.adventures,
    }
};

export default connect(mapStateToProps)(CreateAdventurePage);
