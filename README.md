# MezArk - Modern Architecture Firm Website

![MezArk Architecture](public/placeholder-logo.svg)

**MezArk** is a cutting-edge, fully responsive website for a modern architecture firm, showcasing innovative design, sustainable practices, and architectural excellence. Built with Next.js 15, TypeScript, and Tailwind CSS, this project demonstrates a perfect blend of aesthetics, functionality, and performance.

## 🏗️ Project Overview

MezArk represents a visionary architecture firm that specializes in creating spaces that inspire and transform communities. The website features a sophisticated design with smooth animations, an intuitive user interface, and a comprehensive showcase of architectural services and projects.

### ✨ Key Features

- **🎨 Modern Design System**: Clean, professional layout with a sophisticated color palette
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎭 Dynamic Hero Section**: Rotating background images with smooth GSAP animations
- **🏢 Service Showcase**: Comprehensive display of architectural services
- **📂 Project Portfolio**: Featured projects with interactive hover effects
- **📋 Contact Form**: Professional consultation request form with service selection
- **⚡ Performance Optimized**: Fast loading times and smooth interactions
- **🎯 SEO Ready**: Optimized for search engines and accessibility

### 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (GreenSock Animation Platform)
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Font**: Geist font family

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mezark.git
   cd mezark
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### 📁 Project Structure

```
mezark/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page component
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   └── theme-provider.tsx
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── *.png            # Architecture images
│   └── *.svg            # Icons and logos
├── styles/              # Additional stylesheets
└── README.md           # This file
```

## 🎯 Features Breakdown

### Hero Section
- **Dynamic Background**: 4 rotating hero images showcasing diverse architecture teams
- **Smooth Transitions**: GSAP-powered animations with seamless image/text transitions
- **Compelling Messaging**: Professional copywriting highlighting firm's expertise

### Services Section
- **Residential Design**: Custom home design and planning
- **Commercial Architecture**: Office buildings and commercial spaces
- **Sustainable Design**: Eco-friendly and green building solutions

### Projects Portfolio
- **Featured Projects**: Showcase of completed architectural works
- **Interactive Gallery**: Hover effects and smooth transitions
- **Project Details**: Location and project type information

### Contact Section
- **Professional Form**: Consultation request with service selection
- **Service Categories**: 6 specialized architecture service buttons
- **Mobile Optimized**: Responsive design with mobile-first approach
- **Visual Appeal**: Dark background with team photo overlay

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect medium-screen experience
- **Desktop Excellence**: Full-featured desktop layout
- **Touch-Friendly**: Optimized for touch interactions

## 🎨 Design Philosophy

MezArk's design follows these core principles:

- **Minimalism**: Clean, uncluttered layouts that let architecture speak
- **Professional**: Sophisticated color scheme and typography
- **Accessibility**: WCAG compliant design patterns
- **Performance**: Optimized images and efficient animations
- **User Experience**: Intuitive navigation and clear call-to-actions

## 🔧 Customization

### Colors
The website uses a carefully crafted color palette:
- **Primary**: Amber/Gold (#F59E0B)
- **Secondary**: Slate/Gray (#334155)
- **Accent**: White and Dark overlays
- **Background**: Light gray (#F8FAFC)

### Typography
- **Headings**: Georgia serif for elegance
- **Body Text**: System fonts for readability
- **Spacing**: Consistent vertical rhythm

### Images
All images are optimized and stored in the `public/` directory. Replace with your own architecture photos for customization.

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Special mobile features:
- Reordered content for better mobile UX
- Touch-optimized buttons and forms
- Condensed typography for small screens
- Optimized image loading

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

The built application will be available in the `.next/` directory.

## 🔮 Future Enhancements

Potential improvements and features:
- **CMS Integration**: Dynamic content management
- **Blog Section**: Architecture insights and news
- **Project Case Studies**: Detailed project breakdowns
- **3D Visualizations**: Interactive building models
- **Multi-language Support**: International accessibility
- **Client Portal**: Project management interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

For questions, suggestions, or support:
- **Email**: hello@mezark.com
- **Website**: [www.mezark.com](https://mezark.com)
- **LinkedIn**: [MezArk Architecture](https://linkedin.com/company/mezark)

---

**Built with ❤️ for the future of architecture**

*MezArk - Where creativity meets functionality in every project we undertake.*