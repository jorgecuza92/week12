
import { connect } from 'react-redux'

function Menu(props) {


    return (
        <div>
            <div>Home</div>
            {!props.isLoggedIn ? <div>Login</div> : null}
            {!props.isLoggedIn ? <div>Register</div> : null}
            {props.isLoggedIn ? <div>Profile</div> : null}
            {props.isLoggedIn ? <div>Logout</div> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isAuthenticated 
    }
}

export default connect(mapStateToProps)(Menu)