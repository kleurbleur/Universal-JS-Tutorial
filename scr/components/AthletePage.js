import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Medal from './Medal';
import Flag from './Flag';
import athletes from '../data/athletes';

export default class AthletePage extends React.Component {
   render() {
      const id = this.props.param.id;
      const athlete = athletes.filter((athlete) => athlete.id === id)[0];
      if (!athlete) {
         return <NotFoundPage/>;
      }
      const headerstyle = {backgroundImage: 'url(/img/${athlete.cover})'};
      return (
         <div className="athlete-full">
            <AthletesMenu athletes={athletes}/>
            <div className="athlete">
               <header style={headerstyle}/>
               <div className="picture-container">
                  <img src={'./img/${athlete.image}'}/>
                  <h2 className="name">{athlete.name}</h2>
               </div>
               <section className="description">
                  Olympic hugger from <strong><Flag code={athlete.country} showName="true" /></strong>,
                  born in {athlete.birth}. Find out more about {athlete.name} on <a href={athlete.link} target="_blank">Wikipedia</a>.
               </section>
               <section className="medals">
                  <p>Winner of {athlete.medals.length} medals:</p>
                  <ul>
                  {athlete.medals.map((medal, i) => <Medal key={i} {...medal}/>)}
                  </ul>
               </section>
            </div>
            <div className="navigateBack">
               <Link to="/">Back to the overview</Link>
            </div>
         </div
      );
   }
}
