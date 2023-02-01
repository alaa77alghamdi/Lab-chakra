import { SimpleGrid,Box,Image} from '@chakra-ui/react'

import React from 'react'

function Post() {
  return (
    <SimpleGrid columns={2} spacing={10} m="20">
  <Box bg='' height='50%' w="50%" >

  <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'  w=""/>
  


  </Box>
  <Box bg='' height='50%' w="50%">
  <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'  w=""/>


  </Box>

</SimpleGrid >
  )
}

export default Post