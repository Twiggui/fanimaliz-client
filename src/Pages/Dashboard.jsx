import './Dashboard.scss';
import DashboardCardAnimals from '../Components/DashboardCards/DashboardCardAnimals';
import DashboardCardTeams from '../Components/DashboardCards/DashboardCardTeams';
import DashboardCardAdoption from '../Components/DashboardCards/DashboardCardAdoption';
import DashboardCardProjects from '../Components/DashboardCards/DashboardCardProjects';
import DashboardCardTasks from '../Components/DashboardCards/DashboardCardTasks';

const Dashboard = () => {
  return (
    <div className='dashboard-page'>
      <h1>Mon Dashboard</h1>

      <div className='card-wrapper'>
        <DashboardCardAnimals />
        <DashboardCardTeams />
        <DashboardCardAdoption />
        <DashboardCardProjects />
        <DashboardCardTasks />
      </div>
    </div>
  );
};

export default Dashboard;
