// UserDashboard.js
import useUsers from '../context/DatabaseUsers';

const UserDashboard = () => {
  const { users, addUser, refresh } = useUsers();

  return (
    <div>
      <button onClick={() => addUser({ firstName: 'John', lastName: 'Doe', email: 'andrew@gmail.com', password: 'yourmom', phone: '1-355-355-355' })}>
        Add John
      </button>
      <button onClick={refresh}>Refresh</button>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.firstName} {u.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;