import { useEffect, useState } from "react"
import './TakeawayPageStyles.scss'
import DetailComponent from "./DetailComponent"
import details from "./orderDetails"
import ProgressBar from "./ProgressBar"
import OrderItem from "./OrderItemComponent"

const TakeawayPage = () => {
    const [orderStatus, setOrderStatus] = useState('Waiting for confirmation')
    const [subOrderStatus, setSubOrderStatus] = useState('Your order is currently waiting for confimation')
    const [orderDetails, setOrderDetails] = useState(null)
    const [orderItems, setOrderItems] = useState(null)

    useEffect(() => {
        setOrderDetails(details[0])
        setOrderItems(details[1])
    }, [])

    const totalOrderPrice = 
        orderItems
    ? orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

    return (
        <div className="takeaway-page-wrapper">
            <p>Explanation: This is a page which i need for another project, but since the master branch of this project is currently bugged and i cant work there, im using this one and then will transfer my code.</p>
            <h1>{orderStatus}</h1>
            <h6>{subOrderStatus}</h6>
            <ProgressBar status={orderStatus}/>
            <div className="pizza-img">
                <img src='../../src/assets/images/menu-pizzas.png'/>
            </div>
            {orderDetails && orderDetails.map((orderDetail, index) => { 
                return (
                    <DetailComponent 
                        {...orderDetail}
                        key={index}/>
            )
            })}
            {orderItems && orderItems.map((item, index) => {
                return (
                    <OrderItem 
                        {...item}
                        key={index} 
                    />
                )
            })}
            <OrderItem 
                item='Total'
                totalPrice={totalOrderPrice}
            />
            <OrderItem
                item='Contacts to the restaurant'
                subInfo='+359889990030'
            />
        </div>
    )
}

export default TakeawayPage