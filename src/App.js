import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Count from './components/Count';
import EmpList from './components/Emp/EmpList';
import Navbar from './components/Navbar';

function App() {
  const apiUrl = 'https://608abddb737e470017b73d6e.mockapi.io/employees';
  const [empData, setEmpData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const getEmp = async () => {
    const response = await axios(apiUrl);
    setEmpData(response.data);
  };

  useEffect(() => {
    getEmp();
  }, []);

  // pagination
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentEmp = empData.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Count} />
          <Route
            exact
            path="/emp"
            component={() => {
              return (
                <>
                  {empData.length > 0 ? (
                    <EmpList
                      empData={currentEmp}
                      postPerPage={postPerPage}
                      totalPosts={empData.length}
                      paginate={paginate}
                    />
                  ) : (
                    <h1>Loading ...</h1>
                  )}
                </>
              );
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
