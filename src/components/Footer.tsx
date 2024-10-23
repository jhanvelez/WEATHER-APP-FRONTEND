import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-black p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Weather App. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;