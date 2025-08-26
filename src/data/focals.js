// src/data/focals.js
import { idFromName } from "../utils/idGenerator";

// Mock tasks (single source of truth)
export const mockTasks = [
  { id: 1, title: "Project Proposal", status: "ongoing", postDate: "2025-08-05", postedTime: "3:30 PM", dueDate: "Due August 6, 2025", dueTime: "11:59 PM", progress: 64 },
  { id: 2, title: "System Design", status: "ongoing", postDate: "2025-08-05", postedTime: "1:00 PM", dueDate: "Due August 7, 2025", dueTime: "11:59 PM", progress: 46 },
  { id: 3, title: "Testing Report", status: "ongoing", postDate: "2025-08-05", postedTime: "4:00 PM", dueDate: "Due August 8, 2025", dueTime: "11:59 PM", progress: 77 },
  { id: 4, title: "Budget Proposal", status: "pastdue", postDate: "2025-08-04", postedTime: "2:30 PM", dueDate: "Due August 6, 2025", dueTime: "11:59 PM", progress: 84 },
  { id: 5, title: "Final Documentation", status: "pastdue", postDate: "2025-08-04", postedTime: "5:00 PM", dueDate: "Due August 6, 2025", dueTime: "11:59 PM", progress: 72 },
  { id: 6, title: "Initial Draft", status: "history", postDate: "2025-08-03", postedTime: "11:30 AM", dueDate: "Due August 6, 2025", dueTime: "11:59 PM", progress: 90 },
  { id: 7, title: "Research Paper", status: "ongoing", postDate: "2025-08-03", postedTime: "9:00 AM", dueDate: "Due August 6, 2025", dueTime: "11:59 PM", progress: 100 },
];

export const mockDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const sectionData = {
  "school-management": [
    {
      id: idFromName("Isidra L. Galman"),
      section: "School Management",
      name: "Isidra L. Galman",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "planning-research": [
    {
      id: idFromName("Edward R. Manuel"),
      section: "Research",
      name: "Edward R. Manuel",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      id: idFromName("Charles M. Patio"),
      section: "Planning",
      name: "Charles M. Patio",
      role: "Focal",
      stats: [
        { name: "Complete", value: 40 },
        { name: "Incomplete", value: 40 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "human-resource": [
    {
      id: idFromName("Arlene P. Alora"),
      section: "Human Resource Development",
      name: "Arlene P. Alora",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      id: idFromName("Mary Joy L. Cabiles"),
      section: "Human Resource Development",
      name: "Mary Joy L. Cabiles",
      role: "Focal",
      stats: [
        { name: "Complete", value: 40 },
        { name: "Incomplete", value: 40 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "social-mobilization": [
    {
      id: idFromName("Donna Jane M. Alfonso"),
      section: "Social Mobilization and Networking",
      name: "Donna Jane M. Alfonso",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      id: idFromName("Eva Joyce V. Cabantog"),
      section: "Social Mobilization and Networking",
      name: "Eva Joyce V. Cabantog",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "educ-facilities": [
    {
      id: idFromName("Precious Joy A. Coronado"),
      section: "Education Facilities",
      name: "Precious Joy A. Coronado",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "disaster-risk": [
    {
      id: idFromName("Ernane S. Escuvania"),
      section: "Disaster Risk Reduction and Management",
      name: "Ernane S. Escuvania",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "school-health": [
    {
      
      section: "Dental",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      section: "Medical",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      section: "SBFP",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      section: "GPP",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      section: "WINS",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      section: "NDEP",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
    {
      section: "RH",
      name: "Focal_Name", // Replace with actual focal name
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],

  "youth-formation": [
    {
      id: idFromName("Maureen Jane Q. Alangco"),
      section: "Youth Formation",
      name: "Maureen Jane Q. Alangco",
      role: "Focal",
      stats: [
        { name: "Complete", value: 57 },
        { name: "Incomplete", value: 23 },
        { name: "Pending", value: 20 },
      ],
      documents: mockTasks, // direct reference, no redundancy
      description: mockDescription, // Example description
    },
  ],
}