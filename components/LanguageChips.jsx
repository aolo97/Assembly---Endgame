import { clsx } from "clsx";

export default function LanguageChips({ languages, wrongGuessCount }) {
    return (
        <section className="language-chips">
            {languages.map((lang, index) => {
                const isLanguageLost = index < wrongGuessCount;
                const className = clsx("chip", isLanguageLost && "lost");
                return (
                    <span
                        key={lang.name}
                        className={className}
                        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
                    >
                        {lang.name}
                    </span>
                );
            })}
        </section>
    );
}
