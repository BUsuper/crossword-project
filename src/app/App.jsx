import { useSelector } from "react-redux";
import { CrosswordField, EndgameModal, Header, QuestionsSection } from "../components";
import "./App.css";
import { selectIsEndgameModalOpen } from "../slices/statusesSelectors";

function App() {
  const isEndgameModalOpen = useSelector(selectIsEndgameModalOpen);

  return (
    <>
      <Header></Header>
      <CrosswordField></CrosswordField>
      
      <QuestionsSection></QuestionsSection>
      {isEndgameModalOpen && <EndgameModal></EndgameModal>}
    </>
)}

export default App
