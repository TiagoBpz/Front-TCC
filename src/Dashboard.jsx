import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Menu } from "./components/menu";
import { api } from "./api/api";
import styles from './Dashboard.module.css'

function Dashboard(){
    const navigate = useNavigate()
    const [userCount, setUserCount] = useState(0)
    const [productCount, setProductCount] = useState(0)


    return(
        <section>
            <Menu/>
        </section>

    )
}

export default Dashboard