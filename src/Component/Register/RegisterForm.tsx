'use client'


import { useRouter } from "next/navigation";
import {useRef} from "react";


    const RegisterForm = () => {
           
        
        
        const  Phone = useRef<HTMLInputElement>(null)
        const  ErorrBox = useRef<HTMLLabelElement>(null)
        const router = useRouter();



        function checkcleared(){
            if (Phone.current === null || Phone.current.value === "") {
                    ErorrBox.current!.textContent = "";
                    return
                }
        }

           async function Register(e) {
            e.preventDefault()
            const regex = /^09\d{9}$/;
                if (Phone.current === null || Phone.current.value === "") {
                    ErorrBox.current!.textContent = "*Please enter your PhoneNumber";
                    return
                }
                else if(!regex.test(Phone.current.value)){
                    ErorrBox.current!.textContent = "*Please enter Valid PhoneNumber";
                    return
                }
                
                else {
        
                        ErorrBox.current!.textContent = "";
                    const ApiTest = "https://randomuser.me/api/?result=1&nat=us";
                    fetch(ApiTest) 
                    .then(response => response.json())
                    .then(result => {
                     localStorage.setItem("Result",JSON.stringify(result))
                     router.push('/Dashboard')
                        
                    })
                        .catch(erorr => {
                            ErorrBox.current!.textContent = "Erorr in Server  " + JSON.stringify(erorr);
                            return;
                        })


                        
                        








                }


            }

    return (
        <>
            <form  onSubmit={Register}>
                <div className="Boxreg">
                    
                <div  className="field fieldregtext  ">
                    <label htmlFor="phonefield">Phone Number</label>
                    <input id="phonefield" name="phonefield" onChange={checkcleared} placeholder="Valid Number 09...."  maxLength={11} ref={Phone} type="text"/>
                </div>
                
                <div className="height: 45px; field fieldregtext ">
                 
                    <label ref={ErorrBox}  className="ErorrReg"></label>
                </div>

              
                <div className="field">

                    <button  id="account" className="btn-sign-in loginstyle13">Register now</button>

                </div>

            </div>
            </form>
        </>
    );
};

export default RegisterForm;