import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const users = [
    {
      "email": "mentor1@example.com",
      "avatar": "https://example.com/mentor1.jpg",
      "peru": "Mentor One",
      "username": "mentor1",
      "bio": "Experienced mentor",
      "type": "mentor",
      "skills": ["leadership", "strategy"],
      "areasofinterest": ["business", "startups"],
      "availableFor": "part-time",
      "location": "bangalore",
      "linkedin": "linkedinmentor1",
      "github": "githubmentor1",
    },
    {
      "email": "investor1@example.com",
      "avatar": "https://example.com/investor1.jpg",
      "peru": "Investor One",
      "username": "investor1",
      "bio": "Early stage investor",
      "type": "investor",
      "skills": ["finance", "venture capital"],
      "areasofinterest": ["tech startups", "fintech"],
      "availableFor": "limited",
      "location": "mumbai",
      "linkedin": "linkedininvestor1",
      "github": "githubinvestor1",
    },
    {
      "email": "creator2@example.com",
      "avatar": "https://example.com/creator2.jpg",
      "peru": "Creator Two",
      "username": "creator2",
      "bio": "Software developer",
      "type": "creator/collaborator",
      "skills": ["java", "spring"],
      "areasofinterest": ["backend", "microservices"],
      "availableFor": "full-time",
      "location": "delhi",
      "linkedin": "linkedincreator2",
      "github": "githubcreator2",
    },
    {
      "email": "mentor2@example.com",
      "avatar": "https://example.com/mentor2.jpg",
      "peru": "Mentor Two",
      "username": "mentor2",
      "bio": "Career guidance mentor",
      "type": "mentor",
      "skills": ["communication", "career development"],
      "areasofinterest": ["personal growth", "job search"],
      "availableFor": "part-time",
      "location": "hyderabad",
      "linkedin": "linkedinmentor2",
      "github": "githubmentor2",
    },
    {
      "email": "investor2@example.com",
      "avatar": "https://example.com/investor2.jpg",
      "peru": "Investor Two",
      "username": "investor2",
      "bio": "Angel investor",
      "type": "investor",
      "skills": ["due diligence", "portfolio management"],
      "areasofinterest": ["saas", "ai"],
      "availableFor": "limited",
      "location": "pune",
      "linkedin": "linkedininvestor2",
      "github": "githubinvestor2",
    },
    {
      "email": "creator3@example.com",
      "avatar": "https://example.com/creator3.jpg",
      "peru": "Creator Three",
      "username": "creator3",
      "bio": "Frontend developer",
      "type": "creator/collaborator",
      "skills": ["javascript", "react"],
      "areasofinterest": ["frontend", "ui/ux"],
      "availableFor": "freelance",
      "location": "kolkata",
      "linkedin": "linkedincreator3",
      "github": "githubcreator3",
    },
    {
      "email": "mentor3@example.com",
      "avatar": "https://example.com/mentor3.jpg",
      "peru": "Mentor Three",
      "username": "mentor3",
      "bio": "Technical mentor",
      "type": "mentor",
      "skills": ["software architecture", "coding best practices"],
      "areasofinterest": ["backend", "scalability"],
      "availableFor": "part-time",
      "location": "ahmedabad",
      "linkedin": "linkedinmentor3",
      "github": "githubmentor3",
    },
    {
      "email": "investor3@example.com",
      "avatar": "https://example.com/investor3.jpg",
      "peru": "Investor Three",
      "username": "investor3",
      "bio": "Venture capitalist",
      "type": "investor",
      "skills": ["market analysis", "deal structuring"],
      "areasofinterest": ["biotech", "healthcare"],
      "availableFor": "limited",
      "location": "surat",
      "linkedin": "linkedininvestor3",
      "github": "githubinvestor3",
    },
    {
      "email": "creator4@example.com",
      "avatar": "https://example.com/creator4.jpg",
      "peru": "Creator Four",
      "username": "creator4",
      "bio": "Mobile developer",
      "type": "creator/collaborator",
      "skills": ["swift", "ios"],
      "areasofinterest": ["mobile development", "enterprise"],
      "availableFor": "full-time",
      "location": "jaipur",
      "linkedin": "linkedincreator4",
      "github": "githubcreator4",
    },
      {
      "email": "mentor4@example.com",
      "avatar": "https://example.com/mentor4.jpg",
      "peru": "Mentor Four",
      "username": "mentor4",
      "bio": "Marketing mentor",
      "type": "mentor",
      "skills": ["digital marketing", "social media strategy"],
      "areasofinterest": ["brand building", "content strategy"],
      "availableFor": "part-time",
      "location": "lucknow",
      "linkedin": "linkedinmentor4",
      "github": "githubmentor4",
    },
    {
      "email": "investor4@example.com",
      "avatar": "https://example.com/investor4.jpg",
      "peru": "Investor Four",
      "username": "investor4",
      "bio": "Impact investor",
      "type": "investor",
      "skills": ["social impact assessment", "esg investing"],
      "areasofinterest": ["renewable energy", "sustainable agriculture"],
      "availableFor": "limited",
      "location": "nagpur",
      "linkedin": "linkedininvestor4",
      "github": "githubinvestor4",
    },
      {
      "email": "creator5@example.com",
      "avatar": "https://example.com/creator5.jpg",
      "peru": "Creator Five",
      "username": "creator5",
      "bio": "Game developer",
      "type": "creator/collaborator",
      "skills": ["lua", "gamedev"],
      "areasofinterest": ["game development", "graphics"],
      "availableFor": "part-time",
      "location": "indore",
      "linkedin": "linkedincreator5",
      "github": "githubcreator5",
    },
      {
      "email": "creator6@example.com",
      "avatar": "https://example.com/creator6.jpg",
      "peru": "Creator Six",
      "username": "creator6",
      "bio": "Flutter Developer",
      "type": "creator/collaborator",
      "skills": ["dart", "flutter"],
      "areasofinterest": ["mobile development", "ui/ux"],
      "availableFor": "full-time",
      "location": "bhopal",
      "linkedin": "linkedincreator6",
      "github": "githubcreator6",
    },
    {
        "email": "creator7@example.com",
        "avatar": "https://example.com/creator7.jpg",
        "peru": "Creator Seven",
        "username": "creator7",
        "bio": "Data Scientist",
        "type": "creator/collaborator",
        "skills": ["r", "datascience"],
        "areasofinterest": ["data analysis", "machine learning"],
        "availableFor": "freelance",
        "location": "patna",
        "linkedin": "linkedincreator7",
        "github": "githubcreator7",
    },
  ];
const startups=[
  {
    "name": "ekospex",
    "description": "glasses to help the blind",
    "problem": "blind ppl find it hard to navigate",
    "solution": "an ai powered glasses that will guide your way",
    "industry": "healthcare",
    "location": "chennai",
    "teamSize": 10,
    "patent": "not yet",
    "funding": 10000,
    "founderId": 1
  },
  {
    "name": "QuickBite Delivery",
    "description": "Fast food delivery for busy professionals",
    "problem": "Limited time for meal preparation",
    "solution": "App-based delivery from local restaurants",
    "industry": "FoodTech",
    "location": "Bangalore",
    "teamSize": 5,
    "patent": "no",
    "funding": 5000,
    "founderId": 7
  },
    {
        "name": "EcoPack Solutions",
        "description": "Biodegradable packaging for sustainable products",
        "problem": "Plastic waste pollution",
        "solution": "Plant-based packaging alternatives",
        "industry": "Sustainability",
        "location": "Mumbai",
        "teamSize": 8,
        "patent": "pending",
        "funding": 15000,
        "founderId": 12
    },
    {
        "name": "Learnify AI",
        "description": "Personalized AI tutoring platform",
        "problem": "Inefficient traditional education",
        "solution": "Adaptive learning paths and AI feedback",
        "industry": "EdTech",
        "location": "Delhi",
        "teamSize": 12,
        "patent": "yes",
        "funding": 20000,
        "founderId": 3
    },
    {
        "name": "FarmConnect",
        "description": "Direct farm-to-consumer marketplace",
        "problem": "Middleman markups in agriculture",
        "solution": "Online platform connecting farmers and consumers",
        "industry": "AgriTech",
        "location": "Pune",
        "teamSize": 6,
        "patent": "no",
        "funding": 8000,
        "founderId": 9
    },
    {
        "name": "SmartHome Hub",
        "description": "Integrated smart home management system",
        "problem": "Fragmented smart home devices",
        "solution": "Unified control and automation platform",
        "industry": "IoT",
        "location": "Hyderabad",
        "teamSize": 9,
        "patent": "pending",
        "funding": 12000,
        "founderId": 15
    },
    {
        "name": "CodeCraft Studio",
        "description": "AI-powered website builder for small businesses",
        "problem": "Difficulty in creating professional websites",
        "solution": "Drag-and-drop interface with AI design assistance",
        "industry": "SaaS",
        "location": "Kolkata",
        "teamSize": 7,
        "patent": "no",
        "funding": 9000,
        "founderId": 2
    },
    {
        "name": "TravelEase",
        "description": "Personalized travel planning and booking",
        "problem": "Time-consuming travel arrangements",
        "solution": "AI-driven itinerary and booking services",
        "industry": "TravelTech",
        "location": "Jaipur",
        "teamSize": 4,
        "patent": "no",
        "funding": 6000,
        "founderId": 11
    },
    {
        "name": "HealthSync",
        "description": "Wearable health monitoring and analysis",
        "problem": "Reactive healthcare approach",
        "solution": "Proactive health insights and personalized recommendations",
        "industry": "Healthcare",
        "location": "Ahmedabad",
        "teamSize": 11,
        "patent": "yes",
        "funding": 18000,
        "founderId": 5
    },
    {
        "name": "GreenEnergy Solutions",
        "description": "Solar energy solutions for residential areas",
        "problem": "Reliance on fossil fuels",
        "solution": "Affordable solar panel installation and maintenance",
        "industry": "Sustainability",
        "location": "Surat",
        "teamSize": 8,
        "patent": "pending",
        "funding": 13000,
        "founderId": 8
    },
    {
        "name": "ArtisanHub",
        "description": "Online marketplace for handmade crafts",
        "problem": "Limited market access for artisans",
        "solution": "Platform connecting artisans with global customers",
        "industry": "E-commerce",
        "location": "Lucknow",
        "teamSize": 5,
        "patent": "no",
        "funding": 7000,
        "founderId": 14
    },
    {
        "name": "LanguageLeap",
        "description": "Immersive language learning app",
        "problem": "Ineffective traditional language learning methods",
        "solution": "Gamified and interactive language courses",
        "industry": "EdTech",
        "location": "Nagpur",
        "teamSize": 6,
        "patent": "no",
        "funding": 8500,
        "founderId": 4
    },
    {
        "name": "RecycleTech",
        "description": "AI-powered waste sorting and recycling",
        "problem": "Inefficient waste management",
        "solution": "Automated sorting and recycling systems",
        "industry": "Sustainability",
        "location": "Indore",
        "teamSize": 10,
        "patent": "yes",
        "funding": 16000,
        "founderId": 10
    },
    {
        "name": "EventConnect",
        "description": "Event planning and ticketing platform",
        "problem": "Complex event management",
        "solution": "Integrated platform for event organizers and attendees",
        "industry": "EventTech",
        "location": "Bhopal",
        "teamSize": 7,
        "patent": "no",
        "funding": 9500,
        "founderId": 6
    },
    {
        "name": "FitnessAI",
        "description": "Personalized AI fitness coaching",
        "problem": "Lack of personalized fitness guidance",
        "solution": "AI-driven workout and nutrition plans",
        "industry": "FitnessTech",
        "location": "Vadodara",
        "teamSize": 9,
        "patent": "pending",
        "funding": 14000,
        "founderId": 13
    },
    {
        "name": "DataGuard",
        "description": "Cybersecurity solutions for small businesses",
        "problem": "Vulnerability to cyberattacks",
        "solution": "Affordable and effective cybersecurity tools",
        "industry": "Cybersecurity",
        "location": "Ludhiana",
        "teamSize": 4,
        "patent": "no",
        "funding": 6500,
        "founderId": 1
    },
    {
        "name": "PetConnect",
        "description": "Platform for pet care services and products",
        "problem": "Difficulty in finding reliable pet care",
        "solution": "Online marketplace for pet services and supplies",
        "industry": "PetTech",
        "location": "Agra",
        "teamSize": 5,
        "patent": "no",
        "funding": 7500,
        "founderId": 8
    },
    {
        "name": "VoiceAssist",
        "description": "Voice-activated productivity tools",
        "problem": "Inefficient task management",
        "solution": "AI-powered voice assistant for scheduling and reminders",
        "industry": "Productivity",
        "location": "Nashik",
        "teamSize": 6,
        "patent": "pending",
        "funding": 10500,
        "founderId": 11
    },
    {
        "name": "SpaceAgro",
        "description": "Vertical farming solutions for urban areas",
        "problem": "Limited agricultural space",
        "solution": "Space-efficient and sustainable vertical farming systems",
        "industry": "AgriTech",
        "location": "Ranchi",
        "teamSize": 8,
        "patent": "yes",
        "funding": 17000,
        "founderId": 3
    },
    {
        "name": "MindfulMe",
        "description": "Mental wellness and mindfulness app",
        "problem": "Increasing mental health issues",
        "solution": "Guided meditation and mindfulness exercises",
        "industry": "Healthcare",
        "location": "Faridabad",
        "teamSize": 7,
        "patent": "no",
        "funding": 11000,
        "founderId": 15
    },
    {
        "name": "BikeShare",
        "description": "Electric bike sharing platform",
        "problem": "Urban traffic congestion",
        "solution": "Sustainable and convenient electric bike rentals",
        "industry": "Mobility",
        "location": "Patna",
        "teamSize": 9,
        "patent": "no",
        "funding": 12500,
        "founderId": 2
    },
    {
        "name": "FashionAI",
        "description": "AI-powered fashion recommendation platform",
        "problem": "Difficulty in finding personalized fashion",
        "solution": "AI styling and recommendation services",
        "industry": "FashionTech",
        "location": "Srinagar",
        "teamSize": 5,
        "patent": "pending",
        "funding": 8200,
        "founderId": 9
    },
    {
        "name": "BuildIt",
        "description": "3D-printed construction solutions",
        "problem": "High construction costs and waste",
        "solution": "Automated 3D printing for building construction",
        "industry": "ConstructionTech",
        "location": "Amritsar",
        "teamSize": 10,
        "patent": "yes",
        "funding": 19000,
        "founderId": 5
    },
    {
        "name": "LegalLink",
        "description": "Online legal services platform",
        "problem": "Limited access to legal services",
        "solution": "Affordable and accessible legal consultations",
        "industry": "LegalTech",
        "location": "Allahabad",
        "teamSize": 6,
        "patent": "no",
        "funding": 9200,
        "founderId": 12
    },
    {
        "name": "GameDev",
        "description": "Indie game development and publishing",
        "problem": "Barriers to entry for indie game developers",
        "solution": "Platform for game development tools and publishing",
        "industry": "GameTech",
        "location": "Coimbatore",
        "teamSize": 7,
        "patent": "no",
        "funding": 10800,
        "founderId": 4
    },
    {
        "name": "MusicAI",
        "description": "AI-generated music composition",
        "problem": "High costs of music production",
        "solution": "AI music generation and customization tools",
        "industry": "MusicTech",
        "location": "Madurai",
        "teamSize": 8,
        "patent": "pending",
        "funding": 15500,
        "founderId": 10
    },
    {
        "name": "SpaceMining",
        "description": "Asteroid mining and resource extraction",
        "problem": "Depleting earth resources",
        "solution": "Space resource extraction and processing",
        "industry": "SpaceTech",
        "location": "Visakhapatnam",
        "teamSize": 11,
        "patent": "yes",
        "funding": 22000,
        "founderId": 13
    },
    {
        "name": "FoodWaste",
        "description": "Food waste reduction platform",
        "problem": "Large amounts of food waste",
        "solution": "Platform for connecting surplus food to consumers",
        "industry": "FoodTech",
        "location": "Vijayawada",
        "teamSize": 5,
        "patent": "no",
        "funding": 7800,
        "founderId": 6
    },
    {
        "name": "RemoteDev",
        "description": "Remote software development platform",
        "problem": "Shortage of developer talent",
        "solution": "Platform for connecting companies with remote developers",
        "industry": "SaaS",
        "location": "Guwahati",
        "teamSize": 9,
        "patent": "no",
        "funding": 11500,
        "founderId": 1
    },
    {
        "name": "DroneDelivery",
        "description": "Drone-based package delivery",
        "problem": "Slow and inefficient delivery",
        "solution": "Fast and eco-friendly drone delivery service",
        "industry": "Logistics",
        "location": "Chandigarh",
        "teamSize": 6,
        "patent": "pending",
        "funding": 13500,
        "founderId": 14
    },
    {
        "name": "ARClass",
        "description": "Augmented reality educational tools",
        "problem": "Lack of engaging educational content",
        "solution": "Interactive AR learning experiences",
        "industry": "EdTech",
        "location": "Hubli",
        "teamSize": 7,
        "patent": "yes",
        "funding": 16500,
        "founderId": 7
    },
    {
        "name": "BioFuel",
        "description": "Sustainable biofuel production",
        "problem": "Reliance on fossil fuels",
        "solution": "Advanced biofuel production from waste materials",
        "industry": "Sustainability",
        "location": "Jalandhar",
        "teamSize": 8,
        "patent": "no",
        "funding": 12200,
        "founderId": 8
    },
     {
        "name": "AquaClean",
        "description": "Water purification and recycling",
        "problem": "Water scarcity and pollution",
        "solution": "Advanced water purification and recycling systems",
        "industry": "Sustainability",
        "location": "Siliguri",
        "teamSize": 7,
        "patent": "pending",
        "funding": 14800,
        "founderId": 10
    },
        {
        "name": "RoboFarm",
        "description": "Automated robotic farming",
        "problem": "Labor shortages in agriculture",
        "solution": "Robotic systems for planting, harvesting and monitoring",
        "industry": "AgriTech",
        "location": "Raipur",
        "teamSize": 9,
        "patent": "yes",
        "funding": 17500,
        "founderId": 3
    }

]

//   async function createUsers(prisma) {
//     for (const user of users) {
//       await prisma.user.create({
//         data: user,
//       });
//     }
//   }
// createUsers(prisma)
  
// async function createStartups(prisma) {
//     for (const startup of startups) {
//         await prisma.startup.create({
//             data: startup,
//         });
//     }
// }
// createStartups(prisma)


async function createJobRoles(prisma) {
  const jobRoles = [
    { name: 'Software Engineer' },
    { name: 'Product Manager' },
    { name: 'Marketing Specialist' },
    { name: 'UI/UX Designer' },
    { name: 'Data Scientist' },
    { name: 'Business Analyst' },
    { name: 'Financial Advisor' },
    { name: 'Content Creator' },
    { name: 'Project Manager' },
    { name: 'Sales Representative' },
  ];

  for (const role of jobRoles) {
    await prisma.jobRole.create({
      data: role,
    });
  }
}

 createJobRoles(prisma);
