import React , {Suspense, useEffect} from 'react'
// import Button from "../atoms/Button"
import Heading from "../atoms/Headings"
import {getUser}  from "../Apis/User"
const Button = React.lazy(() => import("../atoms/Button"));


function Home() {

  let users;

  useEffect(()=>{
    users  = getUser()
    console.log("users" , users)
  })
  return (
      <>
    <div>
      <Suspense fallback={<h1>Data will load soon.....</h1>}>
      <Button title="This is my new button component" users={users}  />
      </Suspense>
      
      <Heading title="this is my home page" />
      

    </div>
    </>
  )
}

export default Home