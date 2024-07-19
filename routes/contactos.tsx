import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Contacto } from "../types.ts";
import { getCookies } from "$std/http/cookie.ts";
import AddContacto from "../components/AddContacto.tsx";

type Data = {
    cart: Contacto[];
};

export const handler: Handlers = {
    GET:(req: Request, ctx: FreshContext<unknown, Data>) => {
        const cookies = getCookies(req.headers);
        //const cart = JSON.parse(cookies.cart);
        console.log(cookies)
        //console.log(cart)

        //return ctx.render({cart})
        return ctx.render({cookies})
    },

};

const Page = (props:PageProps<Data>) => {
    const cart = props.data.cart;
    return <h1>HOLA</h1>
    //<AddContacto cart={cart} />
}

export default Page;