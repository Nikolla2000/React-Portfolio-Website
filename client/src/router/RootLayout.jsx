import { Outlet, useNavigation } from "react-router"
import Navigation from "../Components/Layout/Navigation/Navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import "./RootLayout.scss"
import { useState } from "react"
import Chatbot from "../Components/Chatbot/Chatbot"

const RootLayout = () => {
    const [showChatBot, setShowChatBot] = useState(false)
    const navigation  = useNavigation()

    return (
        <>
        <Navigation />
        <main>
            {navigation.state === "loading" && (
                <h2 className="loading-msg">Loading...</h2>
            )}
            <Outlet />
            <div 
                className="show-chat-btn"
                onClick={() => setShowChatBot(!showChatBot)}>
                <FontAwesomeIcon icon={faMessage} />
            </div>
            {showChatBot && <Chatbot/>}
        </main>
        </>
    )
}

export default RootLayout