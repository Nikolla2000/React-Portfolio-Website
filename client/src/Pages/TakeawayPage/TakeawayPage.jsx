    import { useEffect, useState } from "react"
    import './TakeawayPageStyles.scss'
    import DetailComponent from "./DetailComponent"
    import details from "./orderDetails"
    import ProgressBar from "./ProgressBar"

    const TakeawayPage = () => {
        const [orderStatus, setOrderStatus] = useState('Waiting for confirmation')
        const [subOrderStatus, setSubOrderStatus] = useState('Your order is currently waiting for confimation')
        const [orderDetails, setOrderDetails] = useState(null)

        useEffect(() => {
            setOrderDetails(details)
        }, [])
        return (
            <div className="takeaway-page-wrapper">
                <p>Explanation: This is a page which i need for another project, but since the master branch of this project is currently bugged and i cant work there, im using this one and then will transfer my code.</p>
                <h1>{orderStatus}</h1>
                <h6>{subOrderStatus}</h6>
                <ProgressBar status={orderStatus}/>
                {orderDetails && orderDetails.map((orderDetail, index) => { return (
                    <DetailComponent 
                        detailTitle={orderDetail.detailTitle} 
                        detail={orderDetail.detail} 
                        icon={orderDetail.icon}
                        key={index}/>
                )
                })}
            </div>
        )
    }

    export default TakeawayPage