import './App.css'
import Nav from './Comp/Nav'
import { Box } from '@chakra-ui/react'
import Footer from './Comp/Footer'

import Post from './Comp/Post'

function App() {

  return (
<>
<Nav />

<Post></Post>
<Post></Post>
<Post></Post>


<Footer></Footer>
</>
  )
}

export default App
