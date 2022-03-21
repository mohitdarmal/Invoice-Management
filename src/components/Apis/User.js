import React from 'react'
import axios from "axios"

    export const getUser = () => {

        const users  = axios.get("https://fakestoreapi.com/users")

        return users
        }