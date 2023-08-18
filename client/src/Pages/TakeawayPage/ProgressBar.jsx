const ProgressBar = ({ status }) => {

    return (
        <div className={`progress-bar ${status == 'Waiting for confirmation' ? 
        'waiting'
        : status == 'Your order is being prepared' ? 
        'preparing' : 'ready'}`}>
            {/* <div className="green-section"></div> */}
            <div className="separate-line"></div>
            <div className="separate-line"></div>
            <div className="circle"></div>
        </div>
    )
}

export default ProgressBar