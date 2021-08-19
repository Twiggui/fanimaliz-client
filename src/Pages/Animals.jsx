import './Animals.scss';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';

const fakeDatas = [
  {
    status: 1,
    type: "cochon d'inde",
    age: 10,
    sexe: 'mâle',
    nom: 'Eliott',
    lieu: 'Faontaines',
    benevole: 'Sandrine',
  },
  {
    status: 1,
    type: "cochon d'inde",
    age: 10,
    sexe: 'mâle',
    nom: 'Eliott',
    lieu: 'Faontaines',
    benevole: 'Sandrine',
  },
  {
    status: 0,
    type: "cochon d'inde",
    age: 10,
    sexe: 'mâle',
    nom: 'Eliott',
    lieu: 'Faontaines',
    benevole: 'Sandrine',
  },
  {
    status: 1,
    type: "cochon d'inde",
    age: 10,
    sexe: 'mâle',
    nom: 'Eliott',
    lieu: 'Faontaines',
    benevole: 'Sandrine',
  },
  {
    status: 1,
    type: "cochon d'inde",
    age: 10,
    sexe: 'mâle',
    nom: 'Eliott',
    lieu: 'Faontaines',
    benevole: 'Sandrine',
  },
];

const Animals = () => {
  return (
    <div className='animals-page'>
      <h1>Animaux</h1>
      <div className='animals-list'>
        <p className='presentation'>Vous avez </p>
        <p className='presentation-number'>{fakeDatas.length} animaux</p>

        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Photo</th>
              <th>Type</th>
              <th>Age</th>
              <th>Sexe</th>
              <th>Nom</th>
              <th>Lieu</th>
              <th>Bénévole en charge</th>
              <th>A l'adoption</th>
            </tr>
          </thead>
          <tbody>
            {fakeDatas.map((animal) => {
              return (
                <tr>
                  <th className='animal-table-status'>
                    {animal.status ? (
                      <div className='animal-table-status-green'></div>
                    ) : (
                      <div className='animal-table-status-orange'></div>
                    )}
                  </th>
                  <th className='animal-table-photo'>Photo</th>
                  <th className='animal-table-type'>{animal.type}</th>
                  <th className='animal-table-age'>{animal.age}</th>
                  <th className='animal-table-sex'>{animal.sexe}</th>
                  <th className='animal-table-name'>{animal.nom}</th>
                  <th className='animal-table-place'>{animal.lieu}</th>
                  <th className='animal-table-benevole'>{animal.benevole}</th>
                  <th className='animal-table-adoption'>
                    <Switch
                      checked={animal.status}
                      onChange={() => {
                        // Modifier la base de données pour afficher l'inverse
                      }}
                      color='primary'
                      name='checkedA'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Animals;
