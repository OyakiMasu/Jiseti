import React from 'react';

const Header = ({ setIsAdding }) => {
  return (
    <header>
        <h1>Jiseti.</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add case</button>
      </div>
    </header>
  );
};

export default Header;