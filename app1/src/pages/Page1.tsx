import React from 'react';
import { Link } from 'react-router-dom';

export function Page1() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop:150
    }}>
      <div style={{marginBottom:20}}>Page 1 from App1</div>
      <Link to="/page-2">Go to Page 2</Link>
    </div>
  );
}