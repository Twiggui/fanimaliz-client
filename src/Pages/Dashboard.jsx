import './Dashboard.scss';
import DashboardCardAnimals from '../Components/DashboardCardAnimals';
import DashboardCardTeams from '../Components/DashboardCardTeams';
import DashboardCardAdoption from '../Components/DashboardCardAdoption';
import DashboardCardProjects from '../Components/DashboardCardProjects';
import DashboardCardTasks from '../Components/DashboardCardTasks';

const Dashboard = () => {
  return (
    <div>
      <div className='card-wrapper'>
        <div className='first-section-card'>
          <DashboardCardAnimals />
          <DashboardCardTeams />
          <DashboardCardAdoption />
          <DashboardCardProjects />
        </div>
        <div className='second-section-card'>
          <DashboardCardTasks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
