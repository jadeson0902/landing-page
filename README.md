# Hostaway Landing Page Clone

A React.js landing page that clones the [Hostaway website](https://www.hostaway.com/) using Tailwind CSS for styling.

## Features

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Modern UI**: Clean, professional design matching the original Hostaway website
- **Component-Based**: Modular React components for easy maintenance
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Interactive Elements**: Hover effects, transitions, and mobile navigation
- **Accessibility**: Semantic HTML and keyboard navigation support

## Sections Included

1. **Announcement Bar** - Top promotional banner
2. **Header** - Navigation with logo and call-to-action buttons
3. **Hero Section** - Main headline with software UI mockup
4. **Partners Section** - Preferred partner badges
5. **Features Section** - Three main feature categories
6. **AI Section** - Hostaway AI capabilities
7. **Testimonials** - Customer reviews and ratings
8. **Integrations** - 200+ integrations overview
9. **Solutions** - Comprehensive solution categories
10. **Support** - Customer support features
11. **Direct Booking** - Website builder promotion
12. **Customer Stories** - Success stories and case studies
13. **CTA Section** - Final call-to-action
14. **Footer** - Complete footer with links and contact info

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Create React App** - Build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # React components
│   ├── AnnouncementBar.js
│   ├── Header.js
│   ├── HeroSection.js
│   ├── PartnersSection.js
│   ├── FeaturesSection.js
│   ├── AISection.js
│   ├── TestimonialsSection.js
│   ├── IntegrationsSection.js
│   ├── SolutionsSection.js
│   ├── SupportSection.js
│   ├── DirectBookingSection.js
│   ├── CustomerStoriesSection.js
│   ├── CTASection.js
│   └── Footer.js
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Colors

The project uses custom Tailwind colors defined in `tailwind.config.js`:

- `hostaway-orange` - Primary brand color (#FF6B35)
- `hostaway-green` - Secondary brand color (#1B4332)
- `hostaway-dark-green` - Dark green (#0F2E1C)
- `hostaway-light-bg` - Light background (#FDFCFA)
- `hostaway-gray` - Text gray (#4A5568)
- `hostaway-light-gray` - Light text gray (#718096)

### Components

Each section is a separate React component that can be easily modified or removed. The components are designed to be:

- **Reusable** - Can be used in different contexts
- **Configurable** - Props can be passed for customization
- **Maintainable** - Clear structure and naming conventions

### Styling

The project uses Tailwind CSS utility classes for styling. Custom components are defined in `src/index.css` using Tailwind's `@layer components` directive.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To build the project for production:

```bash
npm run build
```

The build files will be created in the `build/` directory, which can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. The original Hostaway website design and content belong to Hostaway.

## Acknowledgments

- [Hostaway](https://www.hostaway.com/) for the original design inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Create React App](https://create-react-app.dev/) for the development setup
