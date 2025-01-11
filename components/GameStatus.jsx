import { getFarewellText } from "../utils";

export default function GameStatus({
    isGameOver,
    isGameWon,
    isGameLost,
    isLastGuessIncorrect,
    wrongGuessCount,
    languages
}) {
    const renderMessage = () => {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            );
        }
        if (isGameWon) return <h2>You win! Well done! 🎉</h2>;
        if (isGameLost) return <h2>Game over! Better start learning Assembly 😭</h2>;
        return null;
    };

    return (
        <section aria-live="polite" role="status" className="game-status">
            {renderMessage()}
        </section>
    );
}
