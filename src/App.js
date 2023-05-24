import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Page from './page'
export default function App() {

const [data, setData] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(a => {
      setData(a)
    })
  }, [])
  
  return (
  //   <Table striped bordered hover>
  //   <thead>
  //     <tr>
  //       <th>#</th>
  //       <th>First Name</th>
  //       <th>Last Name</th>
  //       <th>Username</th>
  //     </tr>
  //   </thead>
    
    
  // </Table>

  <>
  <Page/>

  </>

  )
}
