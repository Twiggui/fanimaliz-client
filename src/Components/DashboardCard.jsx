import './DashboardCard.scss';

const DashboardCard = () => {
  return (
    <div className='dashboard-card'>
      <h1>Mes animaux</h1>
      <p> 33 animaux pris en charge</p>
      <p> 12 animaux à l'adoption</p>
      <p> 21 animaux en attente</p>
    </div>
  );
};

export default DashboardCard;
