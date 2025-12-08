export default function UserProfile({ loading, user }) {

  if (loading) return <p>Loading user...</p>;
  if (!user) return <p>No user found</p>;

  return (
    
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
