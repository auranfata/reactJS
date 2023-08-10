import React, {Component, Fragment} from "react";
import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";
import "./Product.css"
import CardProduct from "./CardProduct/CardProduct";
class Product extends Component {
    state = {
        order:4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="api" />
                    </div>
                    <div className="troley">
                        <img src={Cart} alt="api" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}  />
            </Fragment>
                
        );
    }
}
export default Product;