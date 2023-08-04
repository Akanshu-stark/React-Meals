import CartContext from "../../Store/cart-context"
import Carticon from "../Cart/Carticon"
import classes from './HeaderCartButton.module.css'
import { useContext } from "react"

const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((curNumber,items)=>{
        return curNumber+items.amount
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <Carticon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;