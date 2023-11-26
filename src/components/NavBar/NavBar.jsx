import React from 'react';
import "./NavBar.css";


function NavBar() {
  return (
    <div class="sidebar">
        <a href="index.html"><img class="logo" src="src/assets/logom4.png"/></a>
        <a class="active" href="#">Inicio</a>
        <a href="#">Portafolio</a>
        <a href="#">Paquetes</a>
        <div class="cart-icon">
        <a href="#"><i class="fa-solid fa-cart-shopping"></i><span class="cart-count">0</span></a>
        <a href="#">Contacto</a>
        </div>
    </div>
  )
}

export default NavBar;