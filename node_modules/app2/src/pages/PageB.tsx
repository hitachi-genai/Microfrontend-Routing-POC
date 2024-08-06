import React from 'react';
import { Link } from 'react-router-dom';

export function PageB() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop:150
    }}>
      <div style={{marginBottom:20}}>Page B from App2</div>
      <Link to="/page-a">Go to Page A</Link>
    </div>
  );
}