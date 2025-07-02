import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsFinished } from "../../slices/statusesSelectors";

export function Timer() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const isFinished = useSelector(selectIsFinished);

    // The callback is called when the component mounts and when isFinished is changed
    useEffect(() => {
        // If isFinished don't start another timer
        if (isFinished) {
            // If there is not timer, there is nothing to clean up
            return;
        }
        const timer = setInterval(() => {
            setElapsedTime(prev => prev + 1);
        }, 1000);
        
        return () => clearInterval(timer);
    }, [isFinished]);

    return <p>{`${(elapsedTime - elapsedTime % 60) / 60}:${String(elapsedTime % 60).padStart(2, "0")}`}</p>
}