import Script from 'next/script'
import React, {useState} from 'react'
import styles from "@/public/assets/css/forms/contact.module.css"

import { firstNameValidation, lastNameValidation, emailValidation,  phoneValidation, clearError} from '@/utils/FormValidation' 

function ContactForm() {
  const isFormValid = (e)=>{
    console.log("in valid form")
    const ErrorMsg = document.getElementsByClassName('errorMessage')
    let count =0
    for(let ele of ErrorMsg){
      if(ele.style.display == "block") count++
    }
    if(count){
      e.preventDefault();
    }
    return count ? false : true
  }
  return (
    <>

    <style jsx>
      {`
        .errorMessage{
          display: none;
          margin: 10px 0 0 0;
          color: red;
        }
      `}
    </style>

        <div style={{background:'rgb(248,252,252)' }}>
      <div className="container" >
      <div className="bs-footer__main pb-80 pt-80  " >
        <div className="row justify-content-center " >
          <div className="col-xl-6 col-md-6 m-20">
            <div className="tp-footer__widget " >
              <h2 className=" mb-35 text-center">
                We Would Love to Hear from You
              </h2>
              <p style={{textAlign:'center'}}>Whether it’s about our services, the solutions we provide, our consultation, the details of our training programs or to request a demo, we are here to answer all your questions.</p>

              <div className="tp-footer-from p-relative" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding:'20px', borderRadius:'10px', background:'white'}}>
                <form method='post' action='https://ea7cf473.sibforms.com/serve/MUIFAMDUmgy5uQD3qQZA5E04uK_K1Z2as8OZRI0vVN_h603e1ZMDAKZgZ8LGse91vzu6-Cthvt17st5PV5MZO8glYMDruiZHijqwbDL3rV7EKi2E5zs3Tsg_vWUFiSWo_Bbh2GQnhfckCE7hbr_9wtv41ge8-gLEs-YoN5S9YgCVNdpk6hplDEGq8wZwDFuMlF2htmX0tKjOSDR7' onSubmit={isFormValid}>

                <div className='p-relative contactInputDiv mb-3'>              
                  <i className={ ["fa-solid", "fa-user-tie", "p-absolute", styles.formInputStyle].join(" ")} ></i>                
                  <input type="text" placeholder="Enter First Name" id="FIRSTNAME" name="FIRSTNAME" autoComplete="off" required data-required="true" onBlur={firstNameValidation} onFocus={()=>clearError("errorFIRSTNAME")}/>          
                  <p className='errorMessage' id='errorFIRSTNAME'>error div</p>
                </div>

                <div className='p-relative contactInputDiv mb-3'>               
                  <i className={["fa-solid", "fa-user-tie", "p-absolute", styles.formInputStyle].join(" ")}></i>                 
                  <input type="text" placeholder="Enter Last Name" id="LASTNAME" name="LASTNAME" autoComplete="off" required data-required="true" onBlur={lastNameValidation} onFocus={()=>clearError("errorLASTNAME")}/>
                  <p className='errorMessage' id='errorLASTNAME'>error div</p>

                </div>

                <div className='p-relative contactInputDiv mb-3'>               
                  <i className={["fa-solid", "fa-phone", "p-absolute", styles.formInputStyle].join(" ")}></i>                 
                  <input type="text" placeholder="Enter Mobile Number" id="MOBILE" name="MOBILE" autoComplete="off" required data-required="true" onBlur={phoneValidation} onFocus={()=>clearError("errorMOBILE")}/>
                  <p className='errorMessage' id='errorMOBILE'>error div</p>
                </div>

                <div className='p-relative contactInputDiv mb-3'>               
                  <i className={["fa-solid", "fa-envelope", "p-absolute", styles.formInputStyle].join(" ")}></i>                 
                  <input type="email" placeholder="Enter your mail" id="EMAIL" name="EMAIL" autoComplete="off" required data-required="true" onBlur={emailValidation} onFocus={()=>clearError("errorEMAIL")}/>
                  <p className='errorMessage' id='errorEMAIL'>error div</p>
                </div>

                <div className='p-relative contactInputDiv mb-3'>               
                  <i className={["fa-solid", "fa-pen-to-square", "p-absolute", styles.formInputStyle].join(" ")}></i>                 
                  <input type="text" placeholder="Enter Title" id="TITLE" name="TITLE" autoComplete="off" required data-required="true"/>
                </div>
                <div className='p-relative contactInputDiv mb-3'>               
                  <i className={["fa-solid", "fa-pen-to-square", "p-absolute", styles.formInputStyle].join(" ")}></i>                 
                  <input type="text" placeholder="Enter Description" id="DESCRIPTION" name="DESCRIPTION" autoComplete="off" required data-required="true"/>
                </div>

                <div className='p-relative FormBtnDiv d-flex justify-content-between' >
                  <input type="reset" value="RESET" className={styles.formSubmitBtn}>
                  </input>
                  <input type="submit" value="SUBMIT" className={styles.formSubmitBtn} >
                  </input>
                </div>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default ContactForm