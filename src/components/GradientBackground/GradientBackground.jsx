import React from 'react';

const GradientBackground = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(to right, #EEAECA 0%, #DEB0D0 18%, #C9B3D7 41%, #B0B7E0 69%, #94BBE9 100%)',
          width: '100%',
          height: '100%'
        }}
      />
      {children}
    </div>
  );
};

export default GradientBackground; 