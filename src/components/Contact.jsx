import React from 'react'

export default function Contact() {

  const onDownload = () => {
    fetch("/files/resume.pdf").then((response) => {
      response.blob().then((blob) => {
       
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
               
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "resume.pdf";
          alink.click();
      });
    }).catch((error) => console.log(error));;
  };

  return (
    <div id='contact'>
      <div className="container">
        <h1>Contact</h1>
        <ul>
          <li>080-062-3302</li>
          <li>pratprasert@gmail.com</li>
          <li>7/29 Moo.10, Khlong Thanon Rd,
              Ban Mai, Bang Yai,
              Nonthaburi 11140</li>
          <li>
            <button className='btn btn-outline-dark' onClick={onDownload}>Download Resume</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
