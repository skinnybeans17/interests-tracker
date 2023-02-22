import { useSelector, useDispatch } from "react-redux";
import { deleteInterest } from "./interests/interestsSlice";

function InterestsList() {
    const interests = useSelector(state => state.interests.value)
    const dispatch = useDispatch()
    return (
        <ul>
            {interests.map((interest, i) => (
                <li key={`${i}-item`}>{interest.name} : {interest.food} : {interest.sport} : {interest.object} : {interest.subject} : {interest.show} : {interest.character} : {interest.movie} : {interest.game} : {interest.book} : {interest.place} : {interest.artist} : {interest.song} : {interest.genre} : {interest.hobby} : {interest.date}
                <button onClick={()=>{
                    console.log("delete", i)
                    dispatch(deleteInterest(i))
                }}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default InterestsList