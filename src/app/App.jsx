import { useSelector } from "react-redux";
import { ButtonsSection, CrosswordField, EndgameModal, QuestionsSection } from "../components";
import "./App.css";
import { selectIsFinished } from "../slices/statusesSelectors";

function App() {
  const isFinished = useSelector(selectIsFinished);

  return (
    <>
      <CrosswordField></CrosswordField>
      <ButtonsSection></ButtonsSection>
      <QuestionsSection></QuestionsSection>
      {isFinished && <EndgameModal></EndgameModal>}
    </>
)}

export default App
