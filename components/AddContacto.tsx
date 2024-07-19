import { FunctionComponent } from "preact"
import { Contacto } from "../types.ts";
import { useEffect } from "preact/hooks"

type Props = { 
    contactos: Contacto[]
}
/*  <ul>
                        <li>
                            <div>{con.nombre}</div>
                            <div>{con.email}</div>
                            <button>Delete <a href="/contactos" /></button>
                        </li>
                    </ul>*/
                    
const AddContacto: FunctionComponent<Props> = ({contactos}) => {
    return ( 
        <div class="main-container">
            <div class="contacts-container">
                {contactos.map((con) => (
                <h1>Contactos de {con.dni} </h1>
                  

                ))}

                <div class="add-contact-container">
                <h1>Añadir contacto</h1>
                <form method="post">
                    <label for="name">Nombre:</label>
                    <input type="text" name="name" id="name"/>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                    <button type="submit">Añadir</button>
                </form>
                </div>
            </div>
        </div>
    )
};

export default AddContacto;