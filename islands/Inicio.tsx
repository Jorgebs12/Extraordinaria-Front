import { FunctionComponent } from "preact"
import { useEffect } from "preact/hooks"

const Inicio: FunctionComponent = () => {
    return ( 
        <div class="main-container">
            <div class="dni-input-container">
            <label for="dni">Introduce tu DNI:</label>
                <input placeholder="12345678A" type="text" id="dni"/>
                <a href="/contactos"> <button>Ir a mi agenda </button> </a>
            </div>
        </div>
    )
};

export default Inicio;