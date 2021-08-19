import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';
import { MdDashboard } from 'react-icons/md';
import {
  AiOutlineTeam,
  AiOutlineSetting,
  AiOutlineAntDesign,
  AiOutlineSmile,
  AiOutlineSchedule,
} from 'react-icons/ai';
import { RiBookletLine } from 'react-icons/ri';
import { SiProtocolsDotIo } from 'react-icons/si';
import { IoChatbubblesOutline, IoStatsChart } from 'react-icons/io5';
import { FiLogIn } from 'react-icons/fi';

const Sidebar = () => {
  const iconSettings = {
    fontSize: '20px',
    marginRight: '10px',
  };

  return (
    <div className='sidebar'>
      <div className='user-infos'>
        <div className='user-avatar'></div>
        <div className='user-name'>
          <p className='user-firstname'>Sandrine</p>
          <p className='user-lastname'>Brichon</p>
        </div>
      </div>
      <div className='categories'>
        <NavLink exact to='/dashboard' activeClassName='active-category'>
          <div className='category'>
            <MdDashboard style={iconSettings} />
            Tableau de bord
          </div>
        </NavLink>

        <NavLink exact to='/animals' activeClassName='active-category'>
          <div className='category'>
            <SiProtocolsDotIo style={iconSettings} />
            Animaux
          </div>
        </NavLink>

        <NavLink exact to='/team'>
          <div className='category' activeClassName='active-category'>
            <AiOutlineTeam style={iconSettings} />
            Equipe
          </div>
        </NavLink>

        <NavLink exact to='/adopter' activeClassName='active-category'>
          <div className='category'>
            <AiOutlineSmile style={iconSettings} />
            Adoptant
          </div>
        </NavLink>

        <NavLink exact to='/directory' activeClassName='active-category'>
          <div className='category'>
            <RiBookletLine style={iconSettings} />
            Annuaire
          </div>
        </NavLink>

        <NavLink exact to='/events'>
          <div className='category' activeClassName='active-category'>
            <AiOutlineSchedule style={iconSettings} />
            Projets / Evènements
          </div>
        </NavLink>

        <NavLink exact to='/forum'>
          <div className='category' activeClassName='active-category'>
            <IoChatbubblesOutline style={iconSettings} />
            Forum
          </div>
        </NavLink>

        <NavLink exact to='/stats'>
          <div className='category' activeClassName='active-category'>
            <IoStatsChart style={iconSettings} />
            Statistiques
          </div>
        </NavLink>

        <NavLink exact to='/resources'>
          <div className='category' activeClassName='active-category'>
            <AiOutlineAntDesign style={iconSettings} />
            Centre de ressources
          </div>
        </NavLink>

        <NavLink exact to='/settings'>
          <div className='category' activeClassName='active-category'>
            <AiOutlineSetting style={iconSettings} />
            Paramètres
          </div>
        </NavLink>

        <NavLink exact to='/signOut'>
          <div className='category' activeClassName='active-category'>
            <FiLogIn style={iconSettings} />
            Se déconnecter
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
