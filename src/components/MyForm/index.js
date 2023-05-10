// import React, { useState, useEffect } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   useEffect(() => {
//     const savedUsername = localStorage.getItem("username");
//     if (savedUsername !== null) {
//       setUsername(savedUsername);
//       setRememberMe(true);
//     };
// 		const savedPassword = localStorage.getItem("password");
//     if (savedPassword !== null) {
//       setUsername(savedPassword);
//       setRememberMe(true);
//     }
//   }, []);

//   const handleLogin = () => {
  

//     if (rememberMe) {
//       localStorage.setItem("username", username,"password",password);
//     } else {
//       localStorage.removeItem("username","password");
//     }
//   }

//   return (
//     <form>
//       <label htmlFor="username">Username:</label><br />
//       <input
//         type="text"
//         id="username"
//         name="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       ></input>
//       <br />
//       <br />
//       <label htmlFor="password">Password:</label> <br />
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       ></input>
//       <br />
//       <br />
//       <label htmlFor="remember">Remember Me</label>
//       <input
//         type="checkbox"
//         id="remember"
//         name="remember"
//         checked={rememberMe}
//         onChange={(e) => setRememberMe(e.target.checked)}
//       ></input>
//       <br />
//       <br />
//       <button type="button" onClick={handleLogin}>
//         Login
//       </button>
//     </form>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";

const GitHubUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, []);

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt="avatar" width="150" height="150" />
            {user.login}
					<h1>SITE ADMIN</h1>{user.site_admin}	
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUsers;
