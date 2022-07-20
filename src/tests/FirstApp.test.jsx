import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"



describe('Pruebas en <FristApp/>', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Goku!';

        const {container} = render( <FirstApp title= {title} /> );

        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar en el titulo en una h1', () => {
        const title = 'Hola, soy Goku!';

        const { container, getByText } = render( <FirstApp title= {title} /> );

        expect ( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        console.log('**************************************')
        console.log(h1.innerHTML);

        expect(h1.innerHTML).toContain( title );

    })

})