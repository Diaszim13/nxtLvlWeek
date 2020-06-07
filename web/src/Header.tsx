import React from 'react';

    interface HeaderProps {
        title: String; //se nao for obrigatoria fica title?:
    }

    const Header:React.FC<HeaderProps> = (props) =>  {//FC = componente em forma de função
        return(
        <header>
        <h1>{props.title}</h1>
        </header>
    );
}

export default Header;