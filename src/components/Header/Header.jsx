import { CrosswordSelection } from "../CrosswordSelection/CrosswordSelection";
import { Timer } from "../Timer/Timer";

export function Header() {
    return (
        <header>
            <Timer></Timer>
            <CrosswordSelection></CrosswordSelection>
        </header>
    );
}
