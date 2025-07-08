import { useRef, useState } from "react";


export default function HandleLinks({urls,setUrls}) {


const longurlRef = useRef<HTMLInputElement>(null);
const validityRef = useRef<HTMLInputElement>(null);
const shortCodeRef = useRef<HTMLInputElement>(null);

function handleSubmit(){

  const newEle = { longurl: longurlRef.current?.value ||"",
                    validity : validityRef.current?.value ||"",
                   shortcode : shortCodeRef.current?.value ||""};

  setUrls((prev)=>[...prev,newEle]);
  console.log(urls);
  

}

  return (
    <>


        <div className="outer-box">

          <div className="inner-box">

            <div className="label">Enter Url :</div>
            <input ref={longurlRef} type="text" />

            <div  className="label">Enter Validity :</div>
            <input ref={validityRef} type="text" />

            <div  className="label">Enter Validity :</div>
            <input ref={shortCodeRef} type="text" />

            <button onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div>

            <div className="head">All Urls</div>

            <div>
              <ul>
                  {urls.map((url)=>{

                        return <div>
                          <div>{url.longurl}</div>
                          <div>{url.validity}</div>

                          <div onClick={() => window.open("http://localhost:5173/short/" + url.shortcode, "_blank")}>Link</div>
                        </div>
                  })}
                
              </ul>
            </div>
          </div>

        </div>
      
      
    </>
  )
}
