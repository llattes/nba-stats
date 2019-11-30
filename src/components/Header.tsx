import React, { FC } from 'react';

interface HeaderInterface {
    content: string;
}

const Header: FC<HeaderInterface> = ({ content }) => {
    return (<h1 data-testid="heading">{content}</h1>);
}

export default Header;
