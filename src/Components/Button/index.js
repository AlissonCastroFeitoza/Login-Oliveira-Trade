import * as estilobotao from './style'

const Button = ({text,onClick,Type ="button"}) => {
    return (
        <estilobotao.Button Type={Type} onClick={onClick}>
            {text}
        </estilobotao.Button>
    )
}

export default Button