const OrderItem = (props) => {
    return (
        <div className="item-wrapper">
            <div className="item">{props.quantity > 1 && `${props.quantity}x `}{props.item}</div>
            <div className="price">{props.totalPrice ? props.totalPrice : props.price * props.quantity} lv.</div>
        </div>
    )
}

export default OrderItem