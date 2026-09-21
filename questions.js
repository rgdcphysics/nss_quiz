// NSS Unit 1: Introduction and Basic Concepts of NSS
// Comprehensive 30-Question Bank for Real-time Quiz

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In which year was the National Service Scheme (NSS) officially launched in India?",
    options: ["1947", "1950", "1969", "1975"],
    correctIndex: 2,
    explanation: "NSS was launched on 24th September 1969, during Mahatma Gandhi's birth centenary year."
  },
  {
    id: 2,
    question: "What is the official Motto of the National Service Scheme (NSS)?",
    options: ["Service Before Self", "Not Me But You", "Truth Alone Triumphs", "Unity and Discipline"],
    correctIndex: 1,
    explanation: "The motto of NSS is 'Not Me But You', reflecting the essence of democratic living and selfless service."
  },
  {
    id: 3,
    question: "Which historic commission first recommended introducing social service into academic institutions in 1950?",
    options: ["Radhakrishnan Commission", "Kothari Commission", "Mudaliar Commission", "Hunter Commission"],
    correctIndex: 0,
    explanation: "The University Education Commission (1948-1949) headed by Dr. S. Radhakrishnan recommended voluntary national service."
  },
  {
    id: 4,
    question: "The design of the NSS emblem is inspired by the giant Rath wheel of which famous Indian temple?",
    options: ["Meenakshi Temple, Madurai", "Sun Temple, Konark (Odisha)", "Brihadeeswarar Temple, Thanjavur", "Jagannath Temple, Puri"],
    correctIndex: 1,
    explanation: "The NSS emblem is embossed on the badge and represents the chariot wheel of the Konark Sun Temple in Odisha."
  },
  {
    id: 5,
    question: "How many spokes are there in the NSS emblem wheel, and what do they represent?",
    options: ["12 spokes representing 12 months", "8 spokes representing 8 pahars (24 hours of the day)", "24 spokes representing 24 hours", "16 spokes representing Indian seasons"],
    correctIndex: 1,
    explanation: "The 8 spokes in the wheel represent the 8 pahars of the day (24 hours), signifying readiness for service 24/7."
  },
  {
    id: 6,
    question: "What does the Navy Blue color in the NSS badge represent?",
    options: ["The vast Cosmos of which the human nation is a tiny part", "The Indian Ocean", "Peace and Serenity", "Academic Wisdom"],
    correctIndex: 0,
    explanation: "The navy blue color denotes the cosmos of which the human being is a small part, ready to contribute to welfare."
  },
  {
    id: 7,
    question: "What does the Red color in the NSS badge and flag symbolize?",
    options: ["Sacrifice of freedom fighters", "Youthful energy, passion, and high spirit", "Danger and alert readiness", "Traditional Indian kumkum"],
    correctIndex: 1,
    explanation: "The red color signifies the lively, active, and energetic spirit of the youth."
  },
  {
    id: 8,
    question: "On which date is 'NSS Day' celebrated across India every year?",
    options: ["15th August", "24th September", "2nd October", "12th January"],
    correctIndex: 1,
    explanation: "NSS Day is celebrated on 24th September because the scheme was launched on 24th September 1969."
  },
  {
    id: 9,
    question: "Which Union Ministry of the Government of India manages and oversees NSS?",
    options: ["Ministry of Education", "Ministry of Youth Affairs and Sports", "Ministry of Social Justice and Empowerment", "Ministry of Home Affairs"],
    correctIndex: 1,
    explanation: "NSS is a central sector scheme under the Ministry of Youth Affairs and Sports (MYAS), Govt of India."
  },
  {
    id: 10,
    question: "The Education Commission (1964-66) that strongly recommended social service for students was headed by:",
    options: ["Dr. D. S. Kothari", "Dr. S. Radhakrishnan", "Dr. Zakir Hussain", "Dr. V. K. R. V. Rao"],
    correctIndex: 0,
    explanation: "The Education Commission (1964-66) was headed by Dr. D. S. Kothari."
  },
  {
    id: 11,
    question: "Who was the Union Education Minister who formally inaugurated NSS in 37 universities across India in 1969?",
    options: ["Maulana Abul Kalam Azad", "Dr. V. K. R. V. Rao", "Morarji Desai", "Humayun Kabir"],
    correctIndex: 1,
    explanation: "Dr. V. K. R. V. Rao inaugurated the NSS on 24th September 1969."
  },
  {
    id: 12,
    question: "What is the primary core objective of the National Service Scheme?",
    options: [
      "Personality development of students through community service",
      "Military training for undergraduate students",
      "Providing free medical degrees to volunteers",
      "Generating political leadership for elections"
    ],
    correctIndex: 0,
    explanation: "The primary objective of NSS is the development of the personality and character of students through voluntary community service."
  },
  {
    id: 13,
    question: "What is the title of the official NSS Theme Song?",
    options: ["Kadam Kadam Badhaye Ja", "Uthe Samaj Ke Liye Uthe", "Hum Honge Kaamyab", "Vande Mataram"],
    correctIndex: 1,
    explanation: "The official NSS song is 'Uthe Samaj Ke Liye Uthe, Sajhe Samaj Ke Liye Sajhe'."
  },
  {
    id: 14,
    question: "True or False: An NSS volunteer is required to complete 120 hours of regular service per year for 2 consecutive years.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "True. A student volunteer is expected to dedicate 120 hours per year (total 240 hours over 2 years) plus one special 7-day camp."
  },
  {
    id: 15,
    question: "What is the standard volunteer strength allocated to a single NSS Unit in a college?",
    options: ["50 Volunteers", "100 Volunteers", "200 Volunteers", "500 Volunteers"],
    correctIndex: 1,
    explanation: "A standard NSS unit in a college or institution consists of 100 student volunteers under one Programme Officer."
  },
  {
    id: 16,
    question: "Who acts as the key executive in charge of an NSS unit at the College / Institutional level?",
    options: ["Programme Coordinator (PC)", "Programme Officer (PO)", "State NSS Officer (SNO)", "Youth Officer"],
    correctIndex: 1,
    explanation: "The Programme Officer (PO), selected from the teaching faculty, is the head and organizer of the college NSS unit."
  },
  {
    id: 17,
    question: "Who is the overall administrative head of NSS at the University level?",
    options: ["Vice-Chancellor (Chairman of Advisory Committee)", "Programme Coordinator", "Registrar"],
    correctIndex: 0,
    explanation: "The Vice-Chancellor heads the University Advisory Committee, while the Programme Coordinator manages operations."
  },
  {
    id: 18,
    question: "The wheel in the NSS emblem primarily symbolizes:",
    options: ["Movement, progress, and continuous cycle of creation & change", "Defence mechanism of India", "Industrialization of rural areas"],
    correctIndex: 0,
    explanation: "The Sun Temple wheel signifies continuous motion, dynamism, and progressive social change."
  },
  {
    id: 19,
    question: "Which of the following is NOT an aim of NSS?",
    options: [
      "To understand the community in which volunteers work",
      "To develop a sense of civic and social responsibility",
      "To gain financial profit from rural developmental schemes",
      "To develop competence required for group-living and sharing responsibilities"
    ],
    correctIndex: 2,
    explanation: "NSS is strictly voluntary and non-commercial service. Volunteers never seek personal financial profit."
  },
  {
    id: 20,
    question: "At the State Government level, who heads the State NSS Cell?",
    options: ["State NSS Officer (SNO)", "Governor", "Director General of Police", "Chief Justice"],
    correctIndex: 0,
    explanation: "The State NSS Officer (SNO) heads the State NSS Cell and coordinates with the Central Government and universities."
  },
  {
    id: 21,
    question: "True or False: NSS volunteers are expected to wear the NSS badge on their left chest during official community service activities.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "True. The NSS badge is proudly worn over the left pocket / left chest during all community and ceremonial activities."
  },
  {
    id: 22,
    question: "What is the duration of an NSS Special Camping Programme?",
    options: ["3 Days", "7 Days", "15 Days", "30 Days"],
    correctIndex: 1,
    explanation: "Special Camping programmes are organized in adopted villages or slums for a continuous duration of 7 days."
  },
  {
    id: 23,
    question: "Which philosophical principle strongly underpins the ideology of NSS?",
    options: ["Gandhian ideology of self-reliance and community service", "Pure capitalist market theory", "Isolationism"],
    correctIndex: 0,
    explanation: "NSS philosophy is deeply rooted in Mahatma Gandhi's concept of constructive work and community service by youth."
  },
  {
    id: 24,
    question: "In the organizational hierarchy of NSS, who coordinates between colleges and the State/National directorates?",
    options: ["Programme Coordinator (PC) at the University Level", "Class Representative", "Hostel Warden"],
    correctIndex: 0,
    explanation: "The Programme Coordinator (PC) at the university level plans, guides, and coordinates all NSS units across affiliated colleges."
  },
  {
    id: 25,
    question: "NSS volunteers help identify the needs and problems of the community and involve them in:",
    options: ["Political rallies", "Problem-solving process", "Commercial advertising", "Tax assessment"],
    correctIndex: 1,
    explanation: "A core objective of NSS is to identify community issues and empower the community through collaborative problem-solving."
  },
  {
    id: 26,
    question: "How many hours of regular social work must an NSS volunteer complete over the entire 2-year tenure?",
    options: ["100 Hours", "120 Hours", "240 Hours", "360 Hours"],
    correctIndex: 2,
    explanation: "Volunteers must complete 120 hours per year, totalling 240 hours over the two-year course duration."
  },
  {
    id: 27,
    question: "Which of the following bodies is responsible for reviewing and approving NSS college activities?",
    options: ["College NSS Advisory Committee", "Student Union Council", "Election Commission", "Sports Authority"],
    correctIndex: 0,
    explanation: "The College NSS Advisory Committee, chaired by the Principal, reviews plans, budgets, and implementation of NSS activities."
  },
  {
    id: 28,
    question: "The motto 'Not Me But You' emphasizes which human value?",
    options: ["Selflessness, empathy, and collective well-being", "Individual competition and rivalry", "Materialistic accumulation", "Isolation"],
    correctIndex: 0,
    explanation: "The motto highlights selfless dedication, putting community before self, and appreciating other persons' perspectives."
  },
  {
    id: 29,
    question: "True or False: Participation in NSS helps students acquire leadership qualities and democratic attitudes.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "True. NSS fosters leadership, democratic values, national integration, and conflict resolution skills."
  },
  {
    id: 30,
    question: "Who serves as the Chairman of the College NSS Advisory Committee?",
    options: ["College Principal", "Senior NSS Volunteer", "Programme Officer", "Local MLA"],
    correctIndex: 0,
    explanation: "The Principal of the College serves as the Chairman of the College NSS Advisory Committee, with the PO acting as Member-Secretary."
  }
];

if (typeof window !== 'undefined') {
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}
