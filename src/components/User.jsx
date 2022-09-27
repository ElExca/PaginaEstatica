import Card from "./Card";
import '../assets/style/user.css';

function User() {
    const users =[

        {
            id:1,
            name:"Angel"

        }
    ];
    return (
        
        <div className="contenedor">
         <nav>
            {users.map((user)=>{
                return( 
                
                    <Card
                        key={user.id}
                        name={user.name}
                    />
                

                )
            } )}
         </nav>
        </div>

     );
}

export default User;