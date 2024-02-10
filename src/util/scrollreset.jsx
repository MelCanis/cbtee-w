import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollReset () {
    const location = useLocation()
    useEffect(_ => window.scrollTo(0,0) , [location])
    return <></>
}