import { useNavigate } from "react-router"
import MenuImg from '../assets/menu.png'
import styles from './menu.module.css'
import { useState } from "react";



export const Menu = () =>{
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const goToUsers = () => navigate ('/usersList')
    const goToDashboard = () => navigate ('/dashboard')
    const logout = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <nav className={open ? styles.navBar : styles.navBarClosed}>
            <img src={MenuImg} alt= "Menu Icon" onClick={() => setOpen(prev => !prev)} />
            <p onClick={goToDashboard} >Dashboard</p>
            <p>Criar Usuario</p>
            <p onClick={goToUsers}>Lista de Usuarios</p>
            <p>Criar Produto</p>
            <p>Lista de Produtos</p>
            <p onClick={logout}>Sair</p>
        </nav>
    )
}