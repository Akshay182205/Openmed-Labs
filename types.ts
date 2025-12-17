
export enum UserRole {
  DOCTOR = 'Doctor',
  STUDENT = 'Medical Student',
  ENGINEER = 'Engineer',
  RESEARCHER = 'Researcher',
  NGO = 'NGO/Health Org'
}

export enum Urgency {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export enum Category {
  DIAGNOSTICS = 'Diagnostics',
  DEVICES = 'Medical Devices',
  PUBLIC_HEALTH = 'Public Health',
  AI_HEALTH = 'AI in Health',
  INFECTIOUS_DISEASE = 'Infectious Disease',
  MATERNAL_HEALTH = 'Maternal Health'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  institution: string;
  skills: string[];
  impactScore: number;
  contributions: number;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  location: string;
  resourceConstraints: string;
  urgency: Urgency;
  category: Category;
  submittedBy: string; // User ID
  submittedByName: string;
  createdAt: string;
  upvotes: number;
  tags: string[];
}

export interface Solution {
  id: string;
  problemId: string;
  title: string;
  content: string;
  costBreakdown: { item: string; cost: number }[];
  feasibilityRating: number;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  createdAt: string;
  version: string;
  upvotes: number;
}

export interface Comment {
  id: string;
  targetId: string; // Problem or Solution ID
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
}
