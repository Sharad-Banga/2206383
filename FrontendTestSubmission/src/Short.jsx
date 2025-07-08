import { useEffect } from "react";
import { useParams } from "react-router-dom";



export default function Short({urls,setUrls}) {

  const {shortone} = useParams();
  useEffect(()=>{
    const found = urls.find(url => url.shortcode == shortone)
  })
  return (
    <>

      if(found){
        window.location.href = found.longurl;
      }
      else{
        alert("wrong")
      }

      
    </>
  )
}
