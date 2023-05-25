import React from 'react'

 const Footer = () => {
  return (
  
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/Inicio" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/Rick and Morty" className="nav-link px-2 text-body-secondary">Rick and Morty</a></li>
      <li className="nav-item"><a href="/suscriptores" className="nav-link px-2 text-body-secondary">Animes</a></li>
      <li className="nav-item"><a href="/animes" className="nav-link px-2 text-body-secondary">Contacto</a></li>
        </ul>
    <p className="text-center text-body-secondary">&copy; 2023 Morty's Anime World ©</p>
  </footer>
</div>
 
  );
}
export default Footer;