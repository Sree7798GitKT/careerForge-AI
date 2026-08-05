import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <div className="flex bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1">

        <Topbar />

        <div className="grid grid-cols-4 gap-6 p-6">

          <DashboardCard title="Companies Prepared" value="12" />
          <DashboardCard title="Coding Solved" value="47" />
          <DashboardCard title="Applications" value="5" />
          <DashboardCard title="Notes" value="18" />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;