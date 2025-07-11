// src/components/Layout/Layout.tsx
import React from 'react'
import { Box, Container } from '@mui/material'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        flex: 1,
        py: 4,
        px: { xs: 2, sm: 3 },
      }}
    >
      {children}
    </Container>
  </Box>
)

export default Layout
