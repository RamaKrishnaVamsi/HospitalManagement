// Dummy data for the Hospital Management System

export const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "12",
    education: "MD, Cardiology - Harvard Medical School",
    phone: "(555) 123-4567",
    email: "sarah.johnson@citycare.com",
    available: true,
    department: "Cardiology"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Pediatrician",
    experience: "8",
    education: "MD, Pediatrics - Stanford University",
    phone: "(555) 234-5678",
    email: "michael.chen@citycare.com",
    available: true,
    department: "Pediatrics"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Emergency Medicine",
    experience: "10",
    education: "MD, Emergency Medicine - Johns Hopkins",
    phone: "(555) 345-6789",
    email: "emily.rodriguez@citycare.com",
    available: true,
    department: "Emergency"
  },
  {
    id: 4,
    name: "Dr. David Kim",
    specialization: "Orthopedic Surgeon",
    experience: "15",
    education: "MD, Orthopedics - Mayo Clinic",
    phone: "(555) 456-7890",
    email: "david.kim@citycare.com",
    available: false,
    department: "Orthopedics"
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialization: "Neurologist",
    experience: "9",
    education: "MD, Neurology - Columbia University",
    phone: "(555) 567-8901",
    email: "lisa.thompson@citycare.com",
    available: true,
    department: "Neurology"
  },
  {
    id: 6,
    name: "Dr. Robert Wilson",
    specialization: "Oncologist",
    experience: "11",
    education: "MD, Oncology - MD Anderson",
    phone: "(555) 678-9012",
    email: "robert.wilson@citycare.com",
    available: true,
    department: "Oncology"
  }
]

export const servicesData = [
  {
    id: 1,
    name: "Cardiology",
    description: "Comprehensive heart care and cardiovascular treatments",
    icon: "❤️",
    features: ["Heart Surgery", "Cardiac Catheterization", "Echocardiography", "Stress Testing"],
    available24h: false,
    priceRange: "$200 - $2000"
  },
  {
    id: 2,
    name: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents",
    icon: "👶",
    features: ["Well-child Checkups", "Vaccinations", "Developmental Assessments", "Emergency Care"],
    available24h: true,
    priceRange: "$100 - $500"
  },
  {
    id: 3,
    name: "Emergency Medicine",
    description: "24/7 emergency care for critical conditions",
    icon: "🚨",
    features: ["Trauma Care", "Critical Care", "Emergency Surgery", "Ambulance Services"],
    available24h: true,
    priceRange: "$300 - $1500"
  },
  {
    id: 4,
    name: "Diagnostics",
    description: "Advanced diagnostic imaging and laboratory services",
    icon: "🔬",
    features: ["MRI Scans", "CT Scans", "Blood Tests", "X-rays"],
    available24h: false,
    priceRange: "$50 - $800"
  },
  {
    id: 5,
    name: "Orthopedics",
    description: "Bone, joint, and muscle care and surgery",
    icon: "🦴",
    features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Physical Therapy"],
    available24h: false,
    priceRange: "$500 - $3000"
  },
  {
    id: 6,
    name: "Neurology",
    description: "Brain and nervous system disorder treatments",
    icon: "🧠",
    features: ["Stroke Care", "Epilepsy Treatment", "Brain Surgery", "Neurological Testing"],
    available24h: true,
    priceRange: "$300 - $2500"
  }
]

export const patientsData = [
  {
    id: 1,
    name: "John Smith",
    age: 45,
    disease: "Hypertension",
    contact: "(555) 111-2222",
    admissionDate: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Mary Johnson",
    age: 32,
    disease: "Diabetes Type 2",
    contact: "(555) 222-3333",
    admissionDate: "2024-01-20",
    status: "Active"
  },
  {
    id: 3,
    name: "Robert Davis",
    age: 67,
    disease: "Heart Disease",
    contact: "(555) 333-4444",
    admissionDate: "2024-01-18",
    status: "Discharged"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    age: 28,
    disease: "Pneumonia",
    contact: "(555) 444-5555",
    admissionDate: "2024-01-22",
    status: "Active"
  },
  {
    id: 5,
    name: "Michael Brown",
    age: 55,
    disease: "Arthritis",
    contact: "(555) 555-6666",
    admissionDate: "2024-01-25",
    status: "Active"
  },
  {
    id: 6,
    name: "Lisa Garcia",
    age: 41,
    disease: "Migraine",
    contact: "(555) 666-7777",
    admissionDate: "2024-01-23",
    status: "Discharged"
  }
]

export const departmentsData = [
  "Cardiology",
  "Pediatrics", 
  "Emergency Medicine",
  "Orthopedics",
  "Neurology",
  "Oncology",
  "Radiology",
  "Laboratory",
  "Pharmacy",
  "Physical Therapy"
]
