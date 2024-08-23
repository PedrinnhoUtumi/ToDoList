import styles from './Footer.module.css'

export function Footer(props) {
    console.log(props);
    let { autor } = props
    let ano = new Date().getFullYear()
    return (
        <div className = {styles.Footer}>
            <strong>React - { autor } - { ano }</strong>
            
        </div>
    )

}