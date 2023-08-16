const ProgressBar = ({ status }) => {

    return (
        <div className={`progress-bar ${status == 'Waiting for confirmation' ? 
        'waiting'
        : status == 'Order is being prepared' ? 
        'preparing' : 'ready'}`}>
            {/* <div className="green-section"></div> */}
            <div className="separate-line"></div>
            <div className="separate-line"></div>
        </div>
    )
}

export default ProgressBar