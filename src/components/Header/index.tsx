import logo from '../../../public/logo.svg'

import { Link } from "react-router-dom";
import { Aside, Container } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
    const { cart } = {
        cart: [
            { id: 1, name: 'Cafe 1', price: 10 },
            { id: 2, name: 'Cafe 2', price: 15 },
            { id: 3, name: 'Cafe 3', price: 20 },
        ]  // Replace with your actual cart data.  This is just a mockup for demonstration purposes.  You'll need to fetch this data from your backend.  You can use a library like 'axios' to make HTTP requests.
    }

    return (
        <Container>
            <Link  to='/'>
                <img src={logo} alt="Coofe Delivery" />
            </Link>

            <Aside>
                <div>
                    <MapPin size={22} weight='fill' />
                    <span>Manchester, UK</span>
                </div>
                <Link to={`cart`}  aria-disabled={cart.length === 0}>
                    <ShoppingCart size={22} weight='fill' />
                    {cart.length > 0 ? <span>{cart.length}</span> : null  }
                </Link>
            </Aside>
        </Container>
    )
}