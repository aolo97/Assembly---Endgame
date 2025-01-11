import { clsx } from "clsx";

export default function Keyboard({ alphabet, addGuessedLetter, guessedLetters, isGameOver, currentWord }) {
    return (
        <section className="keyboard">
            {alphabet.split("").map(letter => {
                const isGuessed = guessedLetters.includes(letter);
                const isCorrect = isGuessed && currentWord.includes(letter);
                const isWrong = isGuessed && !currentWord.includes(letter);
                const className = clsx({ correct: isCorrect, wrong: isWrong });

                return (
                    <button
                        key={letter}
                        className={className}
                        disabled={isGameOver || isGuessed}
                        onClick={() => addGuessedLetter(letter)}
                    >
                        {letter.toUpperCase()}
                    </button>
                );
            })}
        </section>
    );
}
