/*
import { connect } from 'react-redux'

function RandomImage(props) {

    const handleGetRandomImage = () => {
        
        const randomURL = `https://picsum.photos/200/300?random=${new Date().getTime()}`
        props.onAddRandomImage(randomURL)
    }

    const images = props.images 
    const imageItems = images.map((image) => {
        return <img src = {image} />
    })

    return (
        <div>

            <button onClick = {handleGetRandomImage}>Get Random Image</button>
            {imageItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.randomImages 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRandomImage: (url) => dispatch({type: 'ADD_RANDOM_IMAGE', payload: url})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RandomImage)
*/