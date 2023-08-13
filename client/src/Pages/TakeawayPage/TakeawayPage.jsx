import { useState } from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';

const TakeawayPage = () => {
    const [orderState, setOrderState] = useState('Waiting for confirmation')
    const [subOrderState, setSubOrderState] = useState('Your order is currently waiting for confimation')
    return (
        <div className="takeaway-page-wrapper">
            <p>Explanation: This is a page which i need for another project, but since the master branch of this project is currently bugged and i cant work there, im using this one and then will transfer my code.</p>
            <h1>{orderState}</h1>
            <h6>{subOrderState}</h6>
            <ProgressBar now={60}/>
        </div>
    )
}

export default TakeawayPage