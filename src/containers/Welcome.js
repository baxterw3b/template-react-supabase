
const Welcome = ({ session, title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Welcome {session?.user?.email}</span>
    </div>
  )
}

export default Welcome