// src/data/focals.js
import { idFromName } from "../utils/idGenerator";

// Mock tasks (single source of truth)
export const mockTasks = [
  { id: 1, title: "Project Proposal", status: "ongoing", date: "2025-08-05", postedAt: "Posted at 3:30 PM", dueDate: "Due August 6", progress: 64 },
  { id: 2, title: "System Design", status: "ongoing", date: "2025-08-05", postedAt: "Posted at 1:00 PM", dueDate: "Due August 7", progress: 46 },
  { id: 3, title: "Testing Report", status: "ongoing", date: "2025-08-05", postedAt: "Posted at 4:00 PM", dueDate: "Due August 8", progress: 77 },
  { id: 4, title: "Budget Proposal", status: "pastdue", date: "2025-08-04", postedAt: "Posted at 2:30 PM", dueDate: "Due August 6", progress: 84 },
  { id: 5, title: "Final Documentation", status: "pastdue", date: "2025-08-04", postedAt: "Posted at 5:00 PM", dueDate: "Due August 6", progress: 72 },
  { id: 6, title: "Initial Draft", status: "history", date: "2025-08-03", postedAt: "Posted at 11:30 AM", dueDate: "Due August 6", progress: 90 },
];

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
    },
  ],
}