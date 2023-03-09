import React from 'react';

export default function Resume(){
    const donwloadResume = () => {
        fetch('AlexJaworskiResume2023.docx').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AlexJaworskiResume2023.docx';
                alink.click();
            })
        })
    }
    return(
        <section className='h-screen'>
            <h1 className='ml-6 text-green-400 font-bold text-2xl'>Resume</h1>
            <h6 className='ml-6 mt-4 text-grey font-bold text-l'>Download my resume by clicking the button below:</h6>
            <button onClick={donwloadResume} className='text-green-400 bg-gray-600 ml-6 mt-4 p-1 rounded'> Download</button>
            <h2 className='mt-4 text-white font-bold text-xl ml-6'> Front End skills</h2>
            <ul style={{listStyleType: 'circle'}}>
                <li className="ml-12 mt-2">CSS</li>
                <li className="ml-12">HTML</li>
                <li className="ml-12">Bootstrap</li>
                <li className="ml-12">Tailwind</li>
                <li className="ml-12">React</li>
            </ul>
            <h2 className='text-white font-bold text-xl ml-6 mt-4'> Back End skills</h2>
            <ul style={{listStyleType: 'circle'}}>
                <li className="ml-12 mt-2">Node</li>
                <li className="ml-12">Express</li>
                <li className="ml-12">SQL & MySql</li>
                <li className="ml-12">Mongo & Mongoose</li>
                <li className="ml-12">GraphQl</li>
                
            </ul>
        </section>
        

    )
}