import React,{useState,useEffect} from 'react'
import Text from '../README.md'
import ReactMarkdown from 'react-markdown'
import marked from "marked";

function Aboutus() {

    const [test, settest] = useState('')

    useEffect(() => {
       
  fetch(Text)
  .then(response => {
    return response.text()
  })
  .then(text => {
    
    settest(marked(text))
    
  })
    }, [])




    return (
        <div className="find about text-box">
         

            <div 
            
            dangerouslySetInnerHTML=
            {{'__html':test}}
            >

            </div>
        </div>
    )
}

export default Aboutus
