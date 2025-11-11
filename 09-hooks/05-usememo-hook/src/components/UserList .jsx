import React, { useState, useMemo } from 'react';

const UserList = () => {
   const users = [
  { id: 1, name: 'Yuvraj Singh', email: 'yuvraj@example.com', age: 22 },
  { id: 2, name: 'Aman Verma', email: 'aman@example.com', age: 25 },
  { id: 3, name: 'Priya Sharma', email: 'priya@example.com', age: 27 },
  { id: 4, name: 'Ravi Patel', email: 'ravi@example.com', age: 30 },
  { id: 5, name: 'Sneha Gupta', email: 'sneha@example.com', age: 24 },
];

  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <>
      <input
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((u) => (
            <div key={u.id}>
          <li >{u.name}</li>
          <li>{u.email}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default UserList
