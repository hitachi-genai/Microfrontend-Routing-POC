import React from 'react';
import { Link } from 'react-router-dom';

export function Page2() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop:150
    }}>
      <div style={{marginBottom:20}}>Page 2 from App1</div>
      <Link to="/page-1">Go to Page 1</Link>
    </div>
  );
}