# CityCare Hospital Management System

A modern, responsive hospital management website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, Services, Doctors, Patients, Appointments, Contact, About
- **Interactive Forms**: Appointment booking and contact forms with validation
- **Data Management**: Local storage for appointments and contact submissions
- **Smooth Animations**: Framer Motion for page transitions and hover effects

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API calls

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   ├── HeroSection.jsx     # Hero banner component
│   ├── DoctorCard.jsx      # Doctor profile card
│   └── ServiceCard.jsx     # Service information card
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── Services.jsx        # Services page
│   ├── Doctors.jsx         # Doctors page
│   ├── Patients.jsx        # Patient management
│   ├── Appointments.jsx    # Appointment booking
│   ├── Contact.jsx         # Contact form
│   └── About.jsx           # About page
├── data/
│   └── dummyData.js        # Sample data
├── styles/
│   └── global.css          # Global styles
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## 🎨 Design Features

- **Color Scheme**: Blue and white healthcare theme
- **Typography**: Clean, readable fonts
- **Layout**: Centered content with proper spacing
- **Components**: Reusable card components
- **Forms**: Styled form inputs with validation
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Quick access links
- Featured services and doctors
- Statistics and testimonials

### Services Page
- Complete list of medical services
- Service details and features
- Pricing information
- 24/7 availability indicators

### Doctors Page
- Doctor profiles with photos
- Specializations and experience
- Contact information
- Availability status

### Patients Page
- Patient management table
- Statistics overview
- Quick action buttons
- Search and filter capabilities

### Appointments Page
- Appointment booking form
- Department and doctor selection
- Date and time picker
- Form validation and submission

### Contact Page
- Contact information
- Contact form
- Hospital hours
- Emergency contact details

### About Page
- Mission and vision
- Hospital history
- Facilities overview
- Team values

## 🔧 Customization

### Adding New Services
Edit `src/data/dummyData.js` and add new service objects to the `servicesData` array.

### Adding New Doctors
Edit `src/data/dummyData.js` and add new doctor objects to the `doctorsData` array.

### Styling Changes
Modify `src/styles/global.css` for custom styles or update Tailwind classes in components.

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📊 Data Storage

The application uses localStorage to store:
- Appointment bookings
- Contact form submissions
- User preferences

## 🌟 Future Enhancements

- Backend API integration
- User authentication
- Real-time notifications
- Advanced search functionality
- Dark mode toggle
- Multi-language support
- Patient portal
- Online payment integration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**CityCare Hospital Management System** - Built with ❤️ using React and modern web technologies.
