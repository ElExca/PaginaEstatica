import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function Layaout({children}) {
    return (  
        <>
        <Header></Header>
        {children}
        <Main></Main>
        <Footer></Footer>
        </>
    );
}

export default Layaout;