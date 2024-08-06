import React from 'react';
import { Link } from 'react-router-dom';

export function PageA() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop:150
    }}>
      <div style={{marginBottom:20}}>Page A from App2</div>
      <div><Link to="/page-b">Go to Page B</Link></div>
    </div>
  );
}