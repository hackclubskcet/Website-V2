import {supabase} from "../utils/supabaseClient";
import Router from "next/router";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../components/Signup/Signup";
import Footer from "../components/Footer/Footer";
import {ChakraProvider} from "@chakra-ui/react";

export default function Signout(props) {

    const [loading, setLoading] = useState(true)

    async function signOut() {
        if (props.loggedIn) {
            try {
                const {error} = await supabase.auth.signOut()
                if (error) {
                    setLoading(false)
                    throw error
                } else {
                    await Router.push('/login')
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }

    useEffect(() => {
        signOut().then(r => setLoading(false))
    })

    return <>
        <ChakraProvider>
            <Navbar loggedIn={props.loggedIn}/>
            {loading ? 'Signing out' : 'You have been successfully signed out'}
            <Footer p={20} />
        </ChakraProvider>
    </>
}
