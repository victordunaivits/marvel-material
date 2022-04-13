import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

export default function Footer() {
    const Footer = styled(Box)({
        backgroundColor: '#1f1f1f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        height: '3rem',
        fontSize: '.9rem'
    })
  
    return (
    <Footer>
        <p>Data provided by Marvel. © 2022 MARVEL </p>
    </Footer>
  )
}
