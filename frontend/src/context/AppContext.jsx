import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Dharshini S',
    email: 'dharshini@example.com',
    role: 'Full Stack Developer',
    targetCompany: 'Google',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    streakDays: 5,
    interviewsCompleted: 14,
    atsScore: 88
  });

  const [resumeData, setResumeData] = useState({
    name: "Dharshini S",
    email: "dharshini.interviewace@example.com",
    skills: ["Java", "Python", "ReactJS", "Node.js", "Express.js", "MongoDB", "Data Structures", "Machine Learning"],
    technicalSkills: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Python", "Java", "REST APIs", "System Design"],
    softSkills: ["Problem Solving", "Leadership", "Communication", "Adaptability"],
    projects: [
      {
        title: "AI Interview Preparation System",
        description: "Full stack MERN web application with AI HR mock interviewer, ATS resume scoring, STAR behavioral guide, and real-time voice synthesis.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI"]
      }
    ],
    experience: [
      {
        role: "Full Stack Developer Intern",
        company: "InnovateTech",
        duration: "2025 - Present"
      }
    ],
    certifications: ["AWS Cloud Practitioner", "Meta React Developer"],
    education: [{ degree: "B.E. Computer Science", institution: "Tech Institute", year: "2026" }],
    strengths: ["Strong architectural understanding", "Quick learner", "Clean code enthusiast"],
    weaknesses: ["Tendency to over-refine early visual mockups"],
    atsScore: 88
  });

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Resume Analyzed", message: "Your resume ATS score is 88/100!", time: "10 mins ago", unread: true },
    { id: 2, title: "Daily Challenge Ready", message: "Complete today's React optimization question for +50 XP", time: "1 hour ago", unread: true },
    { id: 3, title: "Interview Streak", message: "🔥 5-day interview streak maintained!", time: "1 day ago", unread: false }
  ]);

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'info') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const markNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      resumeData,
      setResumeData,
      notifications,
      markNotificationsRead,
      toastMessage,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
