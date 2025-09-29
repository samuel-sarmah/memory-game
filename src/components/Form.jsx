import RegularButton from './RegularButton';

export default function Form ({ handleSubmit }) {
    return (
        <> 
            <div className='wrapper--accent'>
                <h2>Welcome to the Memory game!</h2> <br />
                <p><b> Each game uses a random set of animal & nature emojis.</b> </p><br />
                <p><b>Flip two cards at a time to find matching pairs. </b></p><br />
                <p> <b>The game ends when all pairs are matched. </b></p> <br />
                <p><em>Restart the game with a new set of emojis.</em></p>
            </div>
            <form className='wrapper'>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </>
    )
}