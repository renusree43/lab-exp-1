function ProfileCard({ name, role }) {
  return (
    <>
      <div className="name">{name}</div>
      <div className="role">Role: {role}</div>
    </>
  );
}
export default ProfileCard;