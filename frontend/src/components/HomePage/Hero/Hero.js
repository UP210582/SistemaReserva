import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CustomButton from '../../Button';

function Hero() {
  const items = [
    { id: 1, content: require('./Images/image.png') },
    { id: 2, content: require('./Images/image2.png') },
    { id: 3, content: require('./Images/image3.png') },
  ];

  return (
    <Box sx={{ bgcolor: 'grey.500', py: 4, textAlign: 'center' }}>
      <Carousel>
        {items.map((item) => (
          <Box 
            key={item.id} 
            sx={{ 
              height: 300, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              bgcolor: 'grey.700',
              color: 'white',
            }}
          >
            <img src={item.content} alt={'Slide ${item.id}'} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
          </Box>
        ))}
      </Carousel>
      <CustomButton to="/loginpage" >Reservar Ahora</CustomButton>
    </Box>
  );
}

export default Hero;