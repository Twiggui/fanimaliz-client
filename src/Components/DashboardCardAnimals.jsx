import './DashboardCard.scss';

const DashboardCardAnimals = (props) => {
  return (
    <div className='dashboard-card'>
      <h1 className='dashboard-card-title'>Animaux</h1>
      <p>
        <span className='key-figures'>33</span> animaux pris en charge
      </p>
      <p>
        <span className='key-figures'>33</span> animaux à l'adoption
      </p>
      <p>
        <span className='key-figures'>33</span> animaux en attente
      </p>
    </div>
  );
};

export default DashboardCardAnimals;
