import React from "react";
import { connect } from "react-redux";

function Navbar() {
  /*const  logout=e=>{
        this.props.cartDispatcher([]);
        this.props.userLoginDispatcher([]);
        this.props.vendorloginDispatcher([]);
        this.props.orderDispatcher([]);
        this.props.productDispatcher([]);
        this.props.editDispatcher([])
    }*/
        return(
            <div>
                <nav className="navbar bg-success shadow rounded">
                    <div className="container text-white">
                        <div className="h1 text-start fw-bolder col-lg-6 mx-auto my-auto" id="logo">GROCERY STORE</div>
                        <ul class="nav justify-content-end col-lg-6 mx-auto my-auto">
                            <li class="nav-item">
                                <a className="btn btn-success" href="/user-home" >Home</a>
                            </li>
                            <li class="nav-item">
                                <a className="btn btn-success" href="/shopping-cart" >Cart</a>
                            </li>
                            <li class="nav-item">
                                <a className="btn btn-success" href="/your-orders" >Your Orders</a>
                            </li>
                            <li class="nav-item">
                                <a className="btn btn-success" href="/login" onClick={e=>this.logout(e)}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }



const mapStateToProps = state =>{
    console.log(state.user.cartList)
    return{
        cart: state.user.cartList,
        order: state.user.orderDetails,
        vendor: state.vendor.vendorLogin,
        user: state.user.userLogin,
        product: state.user.productDetails,
        edit: state.vendor.editDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cartDispatcher: (data)=>dispatch({type:"cartList",payload:data}),
        productDispatcher:(data)=>dispatch({type:"productDetails",payload:data}),
        userLoginDispatcher: (data) => dispatch({type:"userLogin",payload: data}),
        vendorloginDispatcher: (data) => dispatch({type:"vendorLogin",payload: data}),
        orderDispatcher: (data)=>dispatch({type:"orderDetails",payload:data}),
        editDispatcher:(data)=>dispatch({type:"editDetails",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);