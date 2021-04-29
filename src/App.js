import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Count from './components/Count';
import EmpList from './components/EmpList';
import Pagination from './components/Pagination';

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
    <div className="container">
      <Count />
      {empData ? <EmpList empData={currentEmp} /> : <h1>Loading ...</h1>}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={empData.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
