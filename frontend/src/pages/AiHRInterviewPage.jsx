import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Bot, Send, Mic, MicOff, Volume2, VolumeX, Sparkles, AlertCircle,
  CheckCircle, ArrowRight, RotateCcw, Award, Code, Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AiHRInterviewPage() {
  const { resumeData, showToast } = useApp();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello ${resumeData.name || 'Dharshini'}.\nWelcome to today's technical interview at InterviewAce AI.\n\nI have thoroughly reviewed your resume, including your work on the "AI Interview Preparation System" and your expertise in ${resumeData.skills.slice(0, 4).join(', ')}.\n\nLet's begin: Tell me about yourself and walk me through your engineering background.`,
      topic: 'Introduction',
      difficulty: 'Medium',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputAnswer, setInputAnswer] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMicListening, setIsMicListening] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [currentDifficulty, setCurrentDifficulty] = useState('Adaptive Medium');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAiThinking]);

  // Speech Synthesis Trigger
  const speakAiText = (text) => {
    if (!ttsEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[\*\#]/g, ''));
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  // Trigger speech on initial mount
  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'ai') {
      speakAiText(messages[0].text);
    }
  }, []);

  // Web Speech Recognition Handler
  const toggleMicListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      showToast('Speech recognition is not supported in this browser. Please type your response.', 'warning');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    if (!isMicListening) {
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsMicListening(true);
        showToast('Mic listening... Speak your answer now.', 'info');
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setInputAnswer(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsMicListening(false);
      };

      recognition.onend = () => {
        setIsMicListening(false);
      };

      recognition.start();
    } else {
      setIsMicListening(false);
    }
  };

  const handleSendAnswer = () => {
    if (!inputAnswer.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputAnswer.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const currentAnswer = inputAnswer.trim();
    setInputAnswer('');
    setIsAiThinking(true);

    // AI HR adaptive turn-taking engine
    setTimeout(() => {
      let aiResponseText = "";
      let topic = "Technical Evaluation";
      let diff = currentDifficulty;

      const userCount = messages.filter(m => m.sender === 'user').length + 1;
      const lower = currentAnswer.toLowerCase();

      // Adaptive Dynamic Questions
      if (userCount === 1) {
        aiResponseText = `I noticed on your resume that you worked on an "AI Interview Preparation System". Can you explain the overall system architecture, why you chose the MERN stack for it, and how authentication was implemented?`;
        topic = "Project Architecture (MERN)";
        diff = "Medium";
      } else if (userCount === 2) {
        if (lower.length > 120 || lower.includes('express') || lower.includes('react') || lower.includes('jwt')) {
          aiResponseText = `That's a very clear architectural breakdown! Since you gave an excellent explanation, let's go deeper:\nHow did you implement real-time AI feedback generation and speech parsing without introducing high latency? How would you scale this system to support 100,000 concurrent interview sessions globally?`;
          topic = "System Design & AI Scalability";
          diff = "Hard (Follow-Up)";
        } else {
          aiResponseText = `Got it. Let's focus on the basics: What problem does your project solve, and what challenges did you face when handling resume parsing?`;
          topic = "Project Fundamentals";
          diff = "Easy (Adaptive)";
        }
      } else if (lower.includes('java')) {
        aiResponseText = `Since your resume includes Java expertise, how do Java garbage collection algorithms (G1GC vs ZGC) work under heavy memory allocation in production microservices?`;
        topic = "Core Java & Memory Management";
        diff = "Hard";
      } else if (lower.includes('python') || lower.includes('machine learning') || lower.includes('ml')) {
        aiResponseText = `You mentioned Python & Machine Learning on your resume. How do you handle model inference latency and vector embeddings storage when processing candidate audio responses?`;
        topic = "Python & Machine Learning";
        diff = "Hard";
      } else if (lower.includes('react') || lower.includes('frontend')) {
        aiResponseText = `Regarding your React experience: How do you prevent unnecessary component re-renders when managing complex global state in high-frequency interactive UIs?`;
        topic = "React Performance Optimization";
        diff = "Medium";
      } else if (lower.includes('mongodb') || lower.includes('database')) {
        aiResponseText = `For MongoDB: How do you index queries for fast conversation history retrieval, and when would you choose sharding over replica sets?`;
        topic = "Database Indexing & Sharding";
        diff = "Medium";
      } else {
        aiResponseText = `Excellent analytical response. You've demonstrated strong technical proficiency. Let's finish with a situational question: Tell me about a time when a major production bug occurred in your project, and how you diagnosed and resolved it under pressure?`;
        topic = "Behavioral & Problem Solving";
        diff = "Hard";
      }

      setCurrentDifficulty(diff);

      const newAiMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
        topic,
        difficulty: diff,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, newAiMessage]);
      setIsAiThinking(false);
      speakAiText(aiResponseText);
    }, 1400);
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col space-y-4">
      {/* Top Header Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#7F5AF0] to-[#00D9FF] flex items-center justify-center text-white shadow-lg shadow-[#6C63FF]/30">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-white flex items-center gap-2">
              Real AI HR Mock Interviewer
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00C853]/20 border border-[#00C853]/40 text-[#00C853] font-bold animate-pulse">
                Live Active Session
              </span>
            </h2>
            <p className="text-xs text-gray-400">
              Candidate: <strong className="text-white">{resumeData.name}</strong> • Adaptive Level: <strong className="text-[#00D9FF]">{currentDifficulty}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTtsEnabled(!ttsEnabled)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              ttsEnabled ? 'bg-[#6C63FF]/20 border-[#6C63FF] text-[#00D9FF]' : 'bg-[#171C33] border-white/10 text-gray-400'
            }`}
            title="Toggle Voice Synthesis"
          >
            {ttsEnabled ? <Volume2 className="w-4 h-4 text-[#00D9FF]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
            <span className="hidden sm:inline">{ttsEnabled ? 'Voice On' : 'Voice Muted'}</span>
          </button>

          <button
            onClick={() => navigate('/feedback')}
            className="btn-glow px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5"
          >
            <span>Finish & View Feedback</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Conversation Stream */}
      <div className="flex-1 glass-card p-4 md:p-6 rounded-3xl border border-white/10 overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6C63FF] to-[#00D9FF] flex items-center justify-center text-white shrink-0 shadow-md">
                <Bot className="w-5 h-5" />
              </div>
            )}

            <div
              className={`max-w-2xl p-4 rounded-2xl border text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-[#6C63FF]/30 to-[#7F5AF0]/30 border-[#6C63FF]/40 text-white rounded-tr-none'
                  : 'bg-[#171C33]/90 border-white/10 text-gray-100 rounded-tl-none shadow-xl'
              }`}
            >
              {m.sender === 'ai' && (
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10 text-xs text-gray-400">
                  <span className="font-bold text-[#00D9FF] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> AI HR Technical Lead
                  </span>
                  •
                  <span className="text-gray-400">{m.topic}</span>
                  •
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-amber-400 font-semibold">{m.difficulty}</span>
                </div>
              )}

              <p className="whitespace-pre-line">{m.text}</p>

              <div className="text-[10px] text-gray-500 mt-2 text-right">{m.timestamp}</div>
            </div>

            {m.sender === 'user' && (
              <div className="w-9 h-9 rounded-xl bg-[#00D9FF]/20 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shrink-0 font-bold">
                DS
              </div>
            )}
          </div>
        ))}

        {isAiThinking && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6C63FF] to-[#00D9FF] flex items-center justify-center text-white shrink-0">
              <Bot className="w-5 h-5 animate-spin" />
            </div>
            <div className="px-4 py-3 rounded-2xl bg-[#171C33] border border-white/10 text-xs text-[#00D9FF] flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 animate-spin text-[#6C63FF]" />
              AI HR is evaluating response & generating adaptive follow-up...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box Bar */}
      <div className="glass-card p-3 rounded-2xl border border-white/10 flex items-center gap-3">
        <button
          onClick={toggleMicListening}
          className={`p-3 rounded-xl border transition-all ${
            isMicListening
              ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
              : 'bg-[#171C33] border-white/10 text-gray-300 hover:text-white'
          }`}
          title="Voice Response (Speech to Text)"
        >
          {isMicListening ? <Mic className="w-5 h-5 text-red-400" /> : <MicOff className="w-5 h-5" />}
        </button>

        <input
          type="text"
          value={inputAnswer}
          onChange={(e) => setInputAnswer(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendAnswer()}
          placeholder={isMicListening ? "Listening to your voice..." : "Type your technical response here (e.g., explain architecture, authentication, MongoDB indexing)..."}
          className="flex-1 bg-[#171C33] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-all"
        />

        <button
          onClick={handleSendAnswer}
          disabled={!inputAnswer.trim() || isAiThinking}
          className="btn-glow px-6 py-3 rounded-xl text-xs font-bold text-white flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Submit</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
