import { useSelector } from "react-redux";
import { ButtonsSection, CrosswordField, EndgameModal, QuestionsSection } from "../components";
import "./App.css";
import { selectIsEndgameModalOpen } from "../slices/statusesSelectors";

function App() {
  const isEndgameModalOpen = useSelector(selectIsEndgameModalOpen);

  return (
    <>
      <CrosswordField></CrosswordField>
      <ButtonsSection></ButtonsSection>
      <QuestionsSection></QuestionsSection>
      {isEndgameModalOpen && <EndgameModal></EndgameModal>}
    </>
)}

export default App
