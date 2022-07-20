import { render } from "@testing-library/react"
import { Suspense } from "react";
import { FirstApp } from "../FirstApp"



describe('Pruebas en <FristApp/>', () => {

    // test('debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Goku!';

    //     const {container} = render( <FirstApp title= {title} /> );

    //     expect( container ).toMatchSnapshot();
    // })

    test('Debe de mostrar en el titulo en una h1', () => {
        const title = 'Hola, soy Goku!';

        const { container, getByText, getByTestId} = render( <FirstApp title= {title} /> );

        expect ( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // console.log('**************************************')
        // console.log(h1.innerHTML);

        // expect(h1.innerHTML).toContain( title );

        expect( getByTestId('test-title')).toBeTruthy();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => { 
        
        const title= 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp
                title= {title}
                subtitle = {subTitle}
            />
        );

        expect ( getByText(subTitle) ).toBeTruthy();

    })

})