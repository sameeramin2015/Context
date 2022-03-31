import {React,useContext} from 'react';
import Welcomemessage from '../components/Homepage/Welcomemessage';
import { Database } from '../context/index';


export default function Home() {
  const myDB = useContext(Database)[3]
  return (
    <>
      {console.log(myDB)}
      <Welcomemessage message="Bluberry | Homepage" />
    </>
  )
}

