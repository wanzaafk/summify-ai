"use client";
import React, { useState } from "react";



export default function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    if (!text.trim()) {
      setSummary("Please enter some text to summarize ✨");
      return;
    }

    const words = text.split(" ").slice(0, 15).join(" ") + "...";
    let index = 0;
    setSummary("");

    const interval = setInterval(() => {
      setSummary((prev) => prev + words[index]);
      index++;
      if (index >= words.length) clearInterval(interval);
    }, 40);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-xl text-center border border-white/20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
          alt="Sammy Avatar"
          className="w-20 h-20 mx-auto mb-4 animate-bounce"
        />
        <h1 className="text-4xl font-extrabold text-white mb-4">
          🌙 Sammy AI Summarizer
        </h1>
        <p className="text-white/80 mb-6">
          Summarize long text instantly with a touch of magic ✨
        </p>

        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-all"
        >
          🌗 Toggle Theme
        </button>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
          rows={6}
        ></textarea>

        <button
          onClick={handleSummarize}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-all"
        >
          Summarize ✨
        </button>

        {summary && (
          <div className="mt-6 p-4 bg-white/20 rounded-2xl text-white text-left animate-fadeIn">
            <h2 className="font-bold mb-2 text-pink-200">Your Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
