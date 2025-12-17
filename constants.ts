
import { UserRole, Urgency, Category, Problem, User } from './types';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Dr. Sarah Chen',
    role: UserRole.DOCTOR,
    institution: 'Public Health Institute of SE Asia',
    skills: ['Epidemiology', 'Field Medicine', 'Diagnostics'],
    impactScore: 1250,
    contributions: 42
  },
  {
    id: 'u2',
    name: 'Marcus Miller',
    role: UserRole.ENGINEER,
    institution: 'OpenHardware Collective',
    skills: ['Arduino', '3D Printing', 'CAD', 'IoT'],
    impactScore: 890,
    contributions: 28
  },
  {
    id: 'u3',
    name: 'Anita Desai',
    role: UserRole.RESEARCHER,
    institution: 'IIT Health Labs',
    skills: ['Machine Learning', 'Data Analysis', 'Clinical Trials'],
    impactScore: 650,
    contributions: 15
  }
];

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: 'p1',
    title: 'Low-cost Neonatal Temperature Monitor',
    description: 'High neonatal mortality in rural clinics due to hypothermia. We need a rechargeable, non-invasive sensor that alerts nurses when a newborn\'s temperature drops below 36.5°C.',
    location: 'Rural Bihar, India',
    resourceConstraints: 'Unreliable power grid, limited budget (<$10 per unit), humid environment.',
    urgency: Urgency.CRITICAL,
    category: Category.DEVICES,
    submittedBy: 'u1',
    submittedByName: 'Dr. Sarah Chen',
    createdAt: '2024-05-10T10:00:00Z',
    upvotes: 245,
    tags: ['Maternal Health', 'Electronics', 'Low Power']
  },
  {
    id: 'p2',
    title: 'Offline AI Diagnostic Tool for Malaria',
    description: 'Microscopy services are scarce in remote Amazon villages. Seeking a mobile-app solution that can identify Plasmodium parasites from stained blood smear images without an active internet connection.',
    location: 'Amazon Rainforest, Brazil',
    resourceConstraints: 'No internet, solar power only, entry-level smartphones.',
    urgency: Urgency.HIGH,
    category: Category.DIAGNOSTICS,
    submittedBy: 'u1',
    submittedByName: 'Dr. Sarah Chen',
    createdAt: '2024-05-12T14:30:00Z',
    upvotes: 189,
    tags: ['AI', 'Microbiology', 'Mobile']
  },
  {
    id: 'p3',
    title: 'Solar-Powered Autoclave for Surgical Tools',
    description: 'Operating theaters in off-grid areas struggle to sterilize equipment consistently. Need a passive or low-energy solar solution that reaches 121°C.',
    location: 'Northern Uganda',
    resourceConstraints: 'Hard to maintain parts, harsh sunlight, dusty environment.',
    urgency: Urgency.MEDIUM,
    category: Category.DEVICES,
    submittedBy: 'u1',
    submittedByName: 'Dr. Sarah Chen',
    createdAt: '2024-05-15T09:15:00Z',
    upvotes: 112,
    tags: ['Solar', 'Sterilization', 'Mechanical']
  }
];
