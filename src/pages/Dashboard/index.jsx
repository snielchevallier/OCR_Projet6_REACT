import DashUserInfos from "../../components/Blocks/dashUserInfos"
import DashLastPerfs from "../../components/Blocks/dashLastPerfs"
import DashWeek from "../../components/Blocks/dashWeek"

const Dashboard = () => {
  return (
    <div className="min-h-screen justify-center mx-auto">
      <DashUserInfos />
      <DashLastPerfs />
      <DashWeek />
    </div>
  )
}

export default Dashboard