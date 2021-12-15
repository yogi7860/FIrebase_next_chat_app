import React from "react"
import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { defaultTheme } from "../themes/defaultTheme"
import { useRouter } from "next/router"
import PublicLayout from "../layouts/publicLayout"
import PrivateLayout from "../layouts/privateLayout"

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme)
  const path = useRouter()

  const isPublic = path.asPath.includes("/auth/")
  const isPrivate = path.asPath.includes("/user/")

  const Wrapper = isPublic
    ? PublicLayout
    : isPrivate
    ? PrivateLayout
    : React.Fragment

  return (
    <ThemeProvider theme={currentTheme}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
