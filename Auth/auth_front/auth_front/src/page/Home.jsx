import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  let auth = localStorage.getItem('user');
  const user = JSON.parse(auth);
  
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }

  async function get() {
    try {
      let response = await fetch('http://localhost:5000/api/user', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        navigate('/');
        return;
      }

      let responseData = await response.json();
      setData(responseData.users);
    } catch (error) {
      navigate('/');
      console.log(error.message);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const searchUser = async (item) => {
    try {
      let response = await fetch(`http://localhost:5000/api/user/${item}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      let responseData = await response.json();
      if (response.ok) {
        setData(responseData.users);
      } else if (!response.ok) {
        console.log('Error fetching user data');
      }
    } catch (error) {
      navigate('/');
      console.log(error.message);
    }
  }

  return (
    <div>
      <center>
        <button onClick={logout}>Log out</button>
        <h1>Home</h1>
        <h3>Hello, {user.email}</h3><br /><br /><br />
        <h3>Here is your data</h3>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => searchUser(e.target.value)}
        />
        <br /><br />
        {data.length > 0 ? data.map((item, index) => (
          <div key={index}>
            <p>{index + 1}</p>
            <h1>{item.email}</h1>
          </div> 
        )): <h1>no user </h1>}
      </center>
    </div>
  );
}

export default Home;
