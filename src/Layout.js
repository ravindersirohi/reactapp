import React from 'react';
import { Container } from 'reactstrap';
import Home from './components/home/Home';

function Layout() {
    return (
        <div>
            <Container>
                <Home />
            </Container>
        </div>
    );
}
export default Layout;
