'use client'
import { useRouter } from "next/navigation";
import '../../assets/Styles/Dashboard.css'

const FollowGithub = () => {

    const route = useRouter();
    if(!localStorage.getItem("Result")){
        route.push('/Register');
    }


    return (
     <>
     
         <div className="list">
      
      <a href="https://github.com/Fleexify/">Github</a>
      
    </div>
     </>
    );

}
export default FollowGithub