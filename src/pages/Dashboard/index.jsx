import DashUserInfos from "../../components/dashUserInfos"
import DashLastPerfs from "../../components/dashLastPerfs"
import DashWeek from "../../components/dashWeek"

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