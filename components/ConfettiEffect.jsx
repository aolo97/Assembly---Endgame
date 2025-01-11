import Confetti from "react-confetti";

export default function ConfettiEffect({ isGameWon }) {
    return isGameWon ? <Confetti recycle={false} numberOfPieces={1000} /> : null;
}
