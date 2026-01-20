import React from 'react';
import { Typography, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type CardFomentarProps = {
    titulo: string;
}

export const CardFomentar: React.FC<CardFomentarProps> = ({titulo}) => {
  const Icono = AddCircleOutlineIcon;
  
  return (
    <Paper 
      elevation={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: '12px 16px',
        borderRadius: '4px',        
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      }}
    >
      <Icono 
        color='primary'
      />
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 500,
          color: '#333',
          fontSize: '15px'
        }}
      >
        {titulo}
      </Typography>
    </Paper>
  );
};