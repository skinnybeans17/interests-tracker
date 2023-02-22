import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addInterest } from './interests/interestsSlice'

function Interest() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [food, setFood] = useState('')
    const [sport, setSport] = useState('')
    const [object, setObject] = useState('')
    const [subject, setSubject] = useState('')
    const [show, setShow] = useState('')
    const [character, setCharacter] = useState('')
    const [movie, setMovie] = useState('')
    const [game, setGame] = useState('')
    const [book, setBook] = useState('')
    const [place, setPlace] = useState('')
    const [person, setPerson] = useState('')
    const [artist, setArtist] = useState('')
    const [song, setSong] = useState('')
    const [genre, setGenre] = useState('')
    const [hobby, setHobby] = useState('')
    const [date, setDate] = useState('')

    return (
        <div>
            <input
                placeholder="Enter Your Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                placeholder="Favorite Food?"
                type="text"
                onChange={(e) => setFood(e.target.value)}
                value={food}
            />
            <input
                placeholder="Favorite Sport?"
                type="text"
                onChange={(e) => setSport(e.target.value)}
                value={sport}
            />
            <input
                placeholder="Favorite Object?"
                type="text"
                onChange={(e) => setObject(e.target.value)}
                value={object}
            />
            <input
                placeholder="Favorite Subject?"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
            />
            <input
                placeholder="Favorite Show?"
                type="text"
                onChange={(e) => setShow(e.target.value)}
                value={show}
            />
            <input
                placeholder="Favorite Character?"
                type="text"
                onChange={(e) => setCharacter(e.target.value)}
                value={character}
            />
            <input
                placeholder="Favorite Movie?"
                type="text"
                onChange={(e) => setMovie(e.target.value)}
                value={movie}
            />
            <input
                placeholder="Favorite Game?"
                type="text"
                onChange={(e) => setGame(e.target.value)}
                value={game}
            />
            <input
                placeholder="Favorite Book?"
                type="text"
                onChange={(e) => setBook(e.target.value)}
                value={book}
            />
            <input
                placeholder="Favorite Place?"
                type="text"
                onChange={(e) => setPlace(e.target.value)}
                value={place}
            />
            <input
                placeholder="Favorite Person?"
                type="text"
                onChange={(e) => setPerson(e.target.value)}
                value={person}
            />
            <input
                placeholder="Favorite Artist?"
                type="text"
                onChange={(e) => setArtist(e.target.value)}
                value={artist}
            />
            <input
                placeholder="Favorite Song?"
                type="text"
                onChange={(e) => setSong(e.target.value)}
                value={song}
            />
            <input
                placeholder="Favorite Genre?"
                type="text"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
            />
            <input
                placeholder="Favorite Hobby?"
                type="text"
                onChange={(e) => setHobby(e.target.value)}
                value={hobby}
            />
            <input
                placeholder="Today's Date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />
            <div>
                <button className='button' onClick={() => dispatch(addInterest({ name, food, sport, object, subject, show, character, movie, game, book, place, person, artist, song, genre, hobby, date }))}
                    >Save</button>
            </div>
        </div>
    )
}

export default Interest