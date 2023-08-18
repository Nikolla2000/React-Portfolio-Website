import { useEffect, useState } from "react"
import './TakeawayPageStyles.scss'
import DetailComponent from "./DetailComponent"
import details from "./orderDetails"
import ProgressBar from "./ProgressBar"
import OrderItem from "./OrderItemComponent"
import {Button} from "react-bootstrap"
import RatingComponent from "./RatingComponent"


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
            <div className="order-details">
                <h1>{orderStatus}</h1>
                <h6>{subOrderStatus}</h6>
                <ProgressBar status={orderStatus}/>
                <div className="pizza-img">
                    <img
                        src={`../../src/assets/images/${
                            orderStatus === "Waiting for confirmation"
                            ? "waiting.png"
                            : orderStatus === "Your order is being prepared"
                            ? "preparing2.webp"
                            : "ready.png"
                        }`}
                        alt="Pizza"
                    />
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
                <Button className="back-menu-btn mt-10" variant="dark">Back to the Menu</Button>
            </div>
            <div className="other-details">
                <div className="profile-info">
                    <h6>Profile</h6>
                    <p>+359899470320</p>
                </div>
            <div className="info">
                <div className="triangle"></div>
                <p>"Welcome to Elixir Pizzeria, where the art of pizza-making comes to life. Immerse yourself in a culinary experience that transcends tradition, where each slice tells a story of craftsmanship and passion. Indulge in the magic of flavors that only Elixir can offer."</p>
                <RatingComponent/>
            </div>
            </div>
        </div>
    )
}

export default TakeawayPage