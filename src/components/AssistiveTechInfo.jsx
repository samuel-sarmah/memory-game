export default function AssistiveTechInfo({ emojisData, matchedCards }) {
    return (
        <section>
            <h2>Game status</h2>
            <p>Number of matched pairs: {matchedCards.length / 2}.</p>
            <p>Number of cards left: {emojisData.length - matchedCards.length}.</p>
        </section>
    )
}