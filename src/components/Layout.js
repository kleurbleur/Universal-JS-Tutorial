import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
   render() {
      return (
         <div className="app-container">
            <header>
               <Link to="/">
                  <img className="logo" src="/img/logo-judo-heroes.png" />
               </Link>
            </header>
            <div className="app-content">{this.props.children}</div>
            <footer>
               <p>
                  This is a demo app, written to learn about universal js in node express and react.
               </p>
            </footer>
         </div>
      );
   }
}
