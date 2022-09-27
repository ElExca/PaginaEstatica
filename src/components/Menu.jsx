import '../assets/style/menu.css'
import Logo from '../assets/img/Logo.jpeg'
function Menu() {
    return ( 
    <div className="menu">
            <img src={Logo} alt="" className='Logo'/>        
            <a className='Noticias'>Inicio</a>
            <a className='Redes'>Redes Sociales</a>
    </div>

     );
}

export default Menu;