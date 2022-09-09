import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentInfo from './components/StudentInfo';
import UpdateStudent from './components/UpdateStudent'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path = '/' element={<Main />} />
        <Route path = '/addstudent' element={<StudentForm />} />
        <Route path = '/details/:id' element={<StudentInfo />} />
        <Route path = '/edit/:id' element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
