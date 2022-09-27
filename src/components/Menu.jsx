import '../assets/style/menu.css'
import Logo from '../assets/img/Logo.jpeg'
function Menu() {
    return ( 
    <div className="menu">
            <img src={Logo} alt="" className='Logo'/>        
            <h2 className='Noticias'>Inicio</h2>
            <h2 className='Redes'>Redes Sociales</h2>
    </div>

     );
}

export default Menu;