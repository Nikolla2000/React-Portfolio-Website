import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

const OrderItem = (props) => {
    return (
        <div className="item-wrapper">
            <div className="item">
                {props.quantity > 1 && `${props.quantity}x `}{props.item}
                {props.subInfo && <p>{props.subInfo}</p>}
            </div>
            {props.subInfo ? <div className="contact-icon-wrapper"><FontAwesomeIcon icon={faPhone} /></div> 
            :<div className="price">{props.totalPrice ? props.totalPrice : props.price * props.quantity} lv.</div>}
        </div>
    )
}

export default OrderItem