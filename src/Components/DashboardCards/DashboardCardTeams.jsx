import './DashboardCard.scss';

const DashboardCardTeams = (props) => {
  return (
    <div className='dashboard-card'>
      <h1 className='dashboard-card-title'>Equipes</h1>
      <p>
        <span className='key-figures'>33</span> bénévoles disponibles
      </p>
      <p>
        <span className='key-figures'>33</span> bénévoles en attente
      </p>
    </div>
  );
};

export default DashboardCardTeams;
