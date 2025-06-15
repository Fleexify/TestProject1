

import RegisterForm from "@/Component/Register/RegisterForm";
import '../../assets/Styles/Loading/Loading.css'

const Page = () => {




    return (




        <>

            <div  className="flexbox ">
                <div className="content withlogin ">

                    <div id="register" className="box  regbox ">

                        <div className="field">
                            <div className="sign-in loginstyle10" ><label className="loginstyle11">Register</label><br/><small></small></div>
                        </div>
                       <RegisterForm></RegisterForm>
                    </div>

                </div>

            </div>







        </>
    );
};

export default Page;