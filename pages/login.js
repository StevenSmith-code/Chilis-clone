import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'

function login() {
    return (
        <div className="bg-loginbg">
            <Navbar/>
            <h2 className="font-parafont text-center text-xl mt-20 mb-20">If you're already a My Chili's Rewards member, log in now! Or, if you are new to My Chili's Rewards, join now below!</h2>
            <LoginForm/>

        </div>
    )
}

export default login
