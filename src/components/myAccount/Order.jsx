import NavbarAccount from "../NavbarAccount";
import "../css/order.css"
function MyOrder(){

    return(
        <>
        <div className="my-accout">
            <NavbarAccount currentState={"my-order"}/> 
            <div className="order">
                <p className="title-order">My Order</p>
            </div>
        </div>
        </>
    )
}
export default MyOrder;