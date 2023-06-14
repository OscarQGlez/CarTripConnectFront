//import React from 'react'

import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: 'Help',
      links: ['Contact', 'Support']
    },
    {
      header: 'Account',
      links: ['Login', 'Register']
    },
    {
      header: 'Legal',
      links: ['Terms', 'Privacy']
    }
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column, idx) => {
      return (
        <Grid key={idx} item xs={12} md={4} sx={{ padding: 1 }}>
          <Box borderBottom={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx={{ color: 'white', fontWeight: 'bold', padding: 1}}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link, idx) => {
            return (
              <Box key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ color: 'white', 'font-size': '12px', padding: 0 }}>{link}</Button>
              </Box>
            )
          })}
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <footer >
        <Box sx={{ flexGrow: 1, position: 'absolute', bottom:0, width:'100%'}}>
            <Box bgcolor="rgb(5, 207, 140)" color="white" padding={2}>
                <Container>
                <Grid container columnSpacing={3}>
                    {generateFooterElements()}
                </Grid>
                </Container>
            </Box>

            <Box  textAlign={'center'} py={1} m={0} bgcolor="black" color={'white'}>
                <Typography sx={{'fontSize': '12px',padding: 0 }}>© Car Trip Connect 2023 - All Rights Reserved</Typography>
            </Box>

        </Box>
    </footer>
  )
}

export default Footer
