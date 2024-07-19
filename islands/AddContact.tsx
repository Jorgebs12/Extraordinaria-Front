import { FunctionComponent } from "preact"
import { Contacto } from "../types.ts";
import { useEffect } from "preact/hooks"
import { getCookies } from "$std/http/cookie.ts";


type Props = {
    contact: Contacto;
}

const AddContacto: FunctionComponent<Props> = (props) => {
    const onAddContactos = (contact: Contacto) => {
        const cookies = document.cookie.split("; ");
        const carCookie = cookies.find((cookie) => cookies.startsWith("contacto="));

        if(!carCookie){
            document.cookie = `contacto=${JSON.stringify([{nombre, email}, ])}; path=/`
        }else{
            const cont: Contacto[] = JSON.parse(carCookie.split("="[1]));
        }

        document.cookie = `cart=${JSON.stringify(cart)}; path=/`;
    }

    return (
        <h1> HOLA </h1>
        
    )
}
export default AddContacto;