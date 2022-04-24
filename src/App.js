import { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [users, setUsers] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      const resultado = await fetch("https://reqres.in/api/users/"); 
      const json = await resultado.json();
      setUsers(json.data)
    }

    fetchData()
  }, [])

  return (
      <div className={'flex'}>
        {
          users.map((user) => { return ( 
            <div key={user.id}> 
                <p> <strong> {user.first_name} </strong> </p> 
                <p> {user.email} </p> 
                <img key={user.avatar} src= {user.avatar} /> 
            </div> ); })
        } 
      </div>
  );
}

export default App;
