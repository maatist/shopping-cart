import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Cart.css'

export function Cart() {

    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId} >
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" alt="Iphone" />
                        <div>
                            <strong>Iphone</strong> - $1000
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon/>
                </button>
                
            </aside>


        </>
    )
}