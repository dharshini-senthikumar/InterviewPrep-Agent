import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function VoiceInterviewPage() {
  const { showToast } = useApp();
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [aiQuestion, setAiQuestion] = useState(
    "Welcome to the Hands-Free Voice Studio. Tell me about your architecture design strategy for high-concurrency microservices."
  );
  const [evaluation, setEvaluation] = useState(null);

  const speakQuestion = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(u);
    }
  };

  const handleMicToggle = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      showToast('Speech recognition is unavailable in browser preview.', 'warning');
      setTranscription("I designed microservices using Node.js, Express, and Redis caching to handle 10k requests/sec.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRecognition();

    if (!isListening) {
      rec.continuous = false;
      rec.onstart = () => setIsListening(true);
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        setTranscription(text);
      };
      rec.onend = () => setIsListening(false);
      rec.start();
    } else {
      setIsListening(false);
    }
  };

  const handleEvaluateVoiceAnswer = () => {
    if (!transcription) return;
    setEvaluation({
      fluency: "94%",
      confidence: "89%",
      clarity: "High",
      feedback: "Great vocal tone and articulate technical keywords."
    });

    setTimeout(() => {
      const nextQ = "How do you ensure data consistency across multiple databases in event-driven systems?";
      setAiQuestion(nextQ);
      speakQuestion(nextQ);
      setTranscription('');
      setEvaluation(null);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 text-center pt-6">
      <div>
        <h1 className="text-3xl font-extrabold text-white flex items-center justify-center gap-3">
          <Mic className="w-8 h-8 text-[#FF5252]" />
          <span>Voice Interview Studio</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Hands-free voice recognition with live speech evaluation and automated next-question progression.
        </p>
      </div>

      {/* AI Question Box */}
      <div className="glass-card p-6 rounded-3xl border border-[#6C63FF]/30 space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#00D9FF]">
          <Volume2 className="w-4 h-4 cursor-pointer" onClick={() => speakQuestion(aiQuestion)} />
          <span>AI HR Voice Output</span>
        </div>
        <h3 className="text-xl font-bold text-white">{aiQuestion}</h3>
      </div>

      {/* Mic Animation Button */}
      <div className="py-6 flex flex-col items-center space-y-4">
        <button
          onClick={handleMicToggle}
          className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? 'bg-red-500 shadow-2xl shadow-red-500/60 scale-110 animate-pulse'
              : 'btn-glow'
          }`}
        >
          {isListening ? (
            <Mic className="w-12 h-12 text-white" />
          ) : (
            <MicOff className="w-12 h-12 text-white" />
          )}
        </button>

        <p className="text-xs font-semibold text-gray-400">
          {isListening ? "Listening to your voice... Speak now!" : "Click Microphone to Start Speaking"}
        </p>
      </div>

      {/* Live Transcription Box */}
      <div className="glass-card p-5 rounded-2xl border border-white/10 text-left space-y-2">
        <div className="text-xs font-bold text-gray-400">Live Voice Transcription:</div>
        <p className="text-sm text-white italic min-h-[40px]">
          {transcription || "Your spoken answer will appear here in real-time..."}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleEvaluateVoiceAnswer}
          disabled={!transcription}
          className="btn-glow px-8 py-3 rounded-2xl text-xs font-bold text-white flex items-center gap-2 disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>Evaluate & Next Question</span>
        </button>

        <button
          onClick={() => navigate('/feedback')}
          className="btn-glow-outline px-6 py-3 rounded-2xl text-xs font-bold text-white"
        >
          Finish Session
        </button>
      </div>

      {evaluation && (
        <div className="glass-card p-5 rounded-2xl border border-[#00C853]/30 bg-[#00C853]/5 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#00C853]" />
            <span>{evaluation.feedback}</span>
          </div>
          <div className="font-bold text-[#00D9FF]">Fluency: {evaluation.fluency} | Confidence: {evaluation.confidence}</div>
        </div>
      )}
    </div>
  );
}
