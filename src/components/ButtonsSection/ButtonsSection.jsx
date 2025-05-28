export function ButtonsSection() {
    const checkCrossword = () => {
        console.log("Checking the crossword");
    }

    return <div>
        <input type="button" onClick={checkCrossword} value="Check"></input>
    </div>
}