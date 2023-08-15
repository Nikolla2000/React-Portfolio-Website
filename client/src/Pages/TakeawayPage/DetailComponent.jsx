import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const DetailComponent = (props) => {
    return (
        <div className="detail-wrapper">
            <div className="icon">
             <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className="details">
                <p className="detail-title">{props.detailTitle}</p>
                <p className="detail">{props.detail}</p>
            </div>
        </div>
    )
}

export default DetailComponent