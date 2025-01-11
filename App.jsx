import { useState } from "react";
import { languages } from "./languages";
import { getRandomWord } from "./utils";
import GameHeader from "./components/GameHeader";
import GameStatus from "./components/GameStatus.jsx";
import LanguageChips from "./components/LanguageChips";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";
import ConfettiEffect from "./components/ConfettiEffect";

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState(() => getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState([]);

    const numGuessesLeft = languages.length - 1;
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
    const isGameLost = wrongGuessCount >= numGuessesLeft;
    const isGameOver = isGameWon || isGameLost;
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

    const addGuessedLetter = letter => {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        );
    };

    const startNewGame = () => {
        setCurrentWord(getRandomWord());
        setGuessedLetters([]);
    };

    return (
        <main>
            <ConfettiEffect isGameWon={isGameWon} />
            <GameHeader />
            <GameStatus
                isGameOver={isGameOver}
                isGameWon={isGameWon}
                isGameLost={isGameLost}
                isLastGuessIncorrect={isLastGuessIncorrect}
                wrongGuessCount={wrongGuessCount}
                languages={languages}
                lastGuessedLetter={lastGuessedLetter}
                currentWord={currentWord}
                guessedLetters={guessedLetters}
            />
            <LanguageChips 
                languages={languages} 
                wrongGuessCount={wrongGuessCount} 
            />

            <WordDisplay 
                currentWord={currentWord} 
                guessedLetters={guessedLetters} 
                isGameLost={isGameLost} 
            />

            <Keyboard
                alphabet="abcdefghijklmnopqrstuvwxyz"
                addGuessedLetter={addGuessedLetter}
                guessedLetters={guessedLetters}
                isGameOver={isGameOver}
                currentWord={currentWord}
            />
            {isGameOver && <NewGameButton onClick={startNewGame} />}
        </main>
    );
}

