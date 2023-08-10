import React, {Component} from "react";
import Logo from "../../../assets/logo.png";
import Cart from "../../../assets/cart.png";

console.log (Logo, Cart)
class CardProduct extends Component {
    state = {
        order:4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {   
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
        this.setState ({
            order: this.state.order - 1
        }, () => {
            this.handleCounterChange(this.state.order);
        }
        )}
}

    render() {
        return (
        <div className="card">
            <div className="img-thumb-prod">
                <img src="https://i.pinimg.com/564x/4b/cf/2b/4bcf2babd61f84968455c48c25cd0cc0.jpg" alt="api"/>
            </div>
            <p className="product-title">Ayam Goreng Sambal Mercon</p>
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
            </div>
        );
    }
}
export default CardProduct;