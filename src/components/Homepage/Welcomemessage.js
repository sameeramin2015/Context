import {React, useContext} from 'react'
import { Database } from '../../context/index'

export default function Welcomemessage({message, color}) {
  const [stateObj, MyFunction, StringData] = useContext(Database);
  return (
   <>
   <h1 className={`bg-${color}`}>{message}</h1>
   {console.log(stateObj, StringData)}
   {MyFunction()} {/* calling funciton from App.js */}
   </>
  )
}
