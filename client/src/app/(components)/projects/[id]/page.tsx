import React, { useState } from 'react'

type Props = {
    params : {id: string}
}

const Project = ({params}: Props) => {
    const id = params ;
    const [active, setActive] = useState("Board")
  return (
    <div>Projects</div>
  )
}
export default Project