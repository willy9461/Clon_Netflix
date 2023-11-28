// import { useEffect, useState } from 'react'
// import { tmdbAPI } from './auth/tmdb/tmdb_api';
// import axios from 'axios';
// const FetchData = () => {
//     const [user, setUser] = useState ([]);

//     useEffect(()=>{
//         const getUsers = async() => {
//             const response = await axios.get(tmdbAPI/"movie/top_rated");
//             setUser(response.data);
//         };
//         getUsers();
          
//     }, [])
//   return (
//     <>
//     <div>Users</div>

//     {user.map((persona) => (
//         <div key={persona.id}> { persona.original_title } </div>
       
//     ))}
//     </>
//   )
// }

// export default FetchData