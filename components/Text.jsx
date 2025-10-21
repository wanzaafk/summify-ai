'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export const Text = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false)

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText('');
    setSummary('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Set loading to true, but using a setTimeout to ensure rendering
    setLoading(true);
  
    setTimeout(async () => {
      try {
        const response = await fetch('/api/summary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: text }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        setSummary(data.summary);
      } catch (error) {
        console.error('There was an error summarizing the text', error);
      } finally {
        setLoading(false);
      }
    }, 0); // Using a timeout of 0 milliseconds to ensure asynchronous behavior
  };
  

  return (
    <section>
        <h1 className='blue_gradient font-bold text-2xl'>Sammy</h1>
        <p className='desc'>Start summarizing your work with Sammy!!</p>
        
        <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-3 glassmorphism p-5 rounded-lg'
        onSubmit={handleSubmit}
        >
            <label htmlFor="text">
                <span className='font-bold'>Text</span>
                <textarea 
                id="text"
                placeholder='Paste your text here...'
                required
                className='form_textarea'
                value={text}
                onChange={handleTextChange}
                />
            </label>
            
            <div className='flex-end mx-3 mb-4 gap-4' >
                <button
                type='submit'
                className='bg-green-500 text-white px-3 py-1 rounded-md'
                >
                    Summarize
                </button>
                <button 
                className='bg-blue-500 text-white px-3 py-1 rounded-md'
                onClick={handleClearText}
                >
                Clear
                </button>
            </div>
        </form>

        {loading?(<div className="bg-gray-900 text-white px-6 py-4 rounded-md">Sammy is summarizing🤓...</div>):(summary && <div className="bg-gray-900 text-white px-6 py-4 rounded-md">{summary}</div>)}

    </section>
  );
};
