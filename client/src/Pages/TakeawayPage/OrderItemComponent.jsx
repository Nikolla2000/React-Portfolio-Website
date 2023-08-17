const OrderItem = (props) => {
    return (
        <div className="item-wrapper">
            <div className="item">{props.item}</div>
            <div className="price">{props.price * props.quantity} lv.</div>
        </div>
    )
}

export default OrderItem