import './ButtonForm.css'

const ButtonForm = (props) => {
    return (
        <button className='btn'>
            {props.children}
        </button>
    )
}

export default ButtonForm