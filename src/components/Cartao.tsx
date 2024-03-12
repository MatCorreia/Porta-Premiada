import styles from '../app/styles/cartao.module.css';

interface CartaoProps {
    bgColor?: string
    children?: any
}

export default function Cartao(props:CartaoProps) {
    return (
        <div className={styles.cartao} style={{ backgroundColor: props.bgColor ?? "#FFFFFF"}}>
            {props.children}
        </div>
    )
}