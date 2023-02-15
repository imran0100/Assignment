import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./component/Profile";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (user) => {
    setUser(user);
  };
  const logout = (log) => {
    setUser(log);
  };

  return (
    <>
      {user.length === 0 ? (
        <div className="main">
          <div className="container">
            <p>Select A User</p>
            <div className="over">
              {" "}
              {users.map((user) => (
                <div
                  onClick={() => handleClick(user)}
                  key={user.id}
                  className="disDataDom"
                >
                  <div>
                    {user.url}
                    {user.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Profile user={user} logout={logout} />
      )}
    </>
  );
}

export default App;
