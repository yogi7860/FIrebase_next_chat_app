import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

export default function PublicLayout({ children }) {
  const { isLogged } = useSelector(store => store.app)
  const { replace } = useRouter()

  React.useEffect(() => {
    if (isLogged) {
      replace("/user/dashboard", "/user/dashboard")
    }
  }, [isLogged])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <h2>Some placeholder</h2>
        </Grid>
        <Grid item xs={5}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}
