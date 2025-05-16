
import {useSelector} from "react-redux"

const Home = () => {

  const user = useSelector((state) => state.user);

  return (
    <div>
      <p>Welcome {user?.username}</p>
    </div>
  )
}

export default Home