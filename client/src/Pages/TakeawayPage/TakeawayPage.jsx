    import { useEffect, useState } from "react"
    import './TakeawayPageStyles.scss'
    import DetailComponent from "./DetailComponent"
    import ProgressBar from 'react-bootstrap/ProgressBar'
    import details from "./orderDetails"

    const TakeawayPage = () => {
        const [orderState, setOrderState] = useState('Waiting for confirmation')
        const [subOrderState, setSubOrderState] = useState('Your order is currently waiting for confimation')
        const [orderDetails, setOrderDetails] = useState(null)

        useEffect(() => {
            setOrderDetails(details)
        }, [])
        return (
            <div className="takeaway-page-wrapper">
                <p>Explanation: This is a page which i need for another project, but since the master branch of this project is currently bugged and i cant work there, im using this one and then will transfer my code.</p>
                <h1>{orderState}</h1>
                <h6>{subOrderState}</h6>
                <ProgressBar now={45} variant="success"/>
                {orderDetails && orderDetails.map((orderDetail, index) => { return (
                    <DetailComponent detailTitle={orderDetail.detailTitle} detail={orderDetail.detail} key={index}/>
                )
                })}
            </div>
        )
    }

    export default TakeawayPage