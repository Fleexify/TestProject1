'use client'
import '../assets/Styles/Loading/Loading.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  
  
    const route = useRouter();
     if(!localStorage.getItem("Result")){
         route.push('/Register');
     }
     else{
       route.push('/Dashboard');
     }

  return (
    <body className='bodyloading'>
        <div className="wrapper">
      <div className="dot"></div>
      <span className="text">
        Loading
      </span>
    </div>
    </body>
  );
}
