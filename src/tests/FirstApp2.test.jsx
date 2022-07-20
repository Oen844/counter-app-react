import { render, screen} from "@testing-library/react"
import { Suspense } from "react";
import { FirstApp } from "../FirstApp"



describe('Pruebas en <FristApp/>', () => {

   const title = 'Hola, Soy Goku!';
   const subtitle= 'Soy un subtitulo';

   test('Debe de hacer match con el snapshot', () => {

    const {container} = render( 
        <FirstApp
            title= {title}
        />
    );
    expect ( container ).toMatchSnapshot();
   });

   test('dene de mostrar el mensaje "Hola, Soy Goku', () => {
        render( 
        <FirstApp
            title= {title}
        /> 
        );
        expect( screen.getByText(title) ).toBeTruthy();
   });

   test('Debe de mostrar el titulo en un h1', () => {
        render ( <FirstApp title = {title}/>);
        expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title );
    });

    test('Debe de mostrar el subtitulo enviado por porps', () => {
        render ( <FirstApp title = {title} subtitle= {subtitle}/> );

        expect( screen.getAllByText(subtitle).length ).toBe(1);

        

    })

})