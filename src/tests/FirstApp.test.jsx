import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"



describe('Pruebas en <FristApp/>', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Goku!';

        render( <FirstApp title= {title} /> )

    })

})