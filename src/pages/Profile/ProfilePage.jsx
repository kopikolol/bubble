import Background2 from "../../background2/background2"
import Banner from "../../Banner/Banner"
import { useUserProfile } from "../../layouts/BaseLayout"
import  "./Profile.css"

export default function ProfilePage() {


const Logout = () => {
    window.localStorage.removeItem(userprofile?.Token)
    Navigate('/')
}
    const userProfile = useUserProfile();
    // let user = JSON.parse(localStorage.getItem(userProfile))
    // console.warn(userProfile)
    return (
        <div className="bgimg2">
            <div className="bar"></div>
            
            <div className="card">
                
                    <h1>{userProfile?.username}</h1>
                    <img src='https://cdn.iconscout.com/icon/free/png-256/free-anonymous-user-3-1133988.png?f=webp' />
                    <p>Email: {userProfile?.email}</p>
                    <p>User ID: {userProfile?.Id}</p>
                    <button onClick={() => Logout()}>Logout</button>
            </div>    
        
            
        </div>
    
    )
    
}