import { Copyright } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  console.log(children)
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Laravel Inertia React
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item xs={8} sx={{ marginTop: 10 }}>
          {children}
        </Grid>
      </Grid>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          position: 'fixed',
          bottom: 0,
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="black" variant="h5">
                Laravel Inertia React
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | Laravel | Inertia | React`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Layout
