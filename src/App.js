import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import ButtonArea from './components/ButtonArea';
import DisplayArea from './components/DisplayArea';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
      <ButtonArea />
      <DisplayArea />
      <Footer />
    </div>
    </>
  );
}

export default App;
