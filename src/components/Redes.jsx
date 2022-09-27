import '../assets/style/redes.css'
import LFacebook from '../assets/img/facebook.svg';
import LInstagram from '../assets/img/instagram.svg';
import LTwitter from '../assets/img/twitter.svg';

function Redes() {
    return ( 
        <div className="redesS">
                <a href=""><img src={LFacebook} alt="" className='Facebook' /></a>
                <a href=""><img src={LInstagram} alt="" className='Instagram' /></a>
                <a href=""><img src={LTwitter} alt="" className='Twitter'/></a>
        </div>
     );
}

export default Redes;