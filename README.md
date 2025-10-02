# Pengilon Security Services Website

A professional corporate website for Pengilon Security Services, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with responsive grid system
- **Professional Branding**: Custom red (#b22222) and green (#006400) color scheme
- **Modern Tech Stack**: React + TypeScript + Vite + Tailwind CSS
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading structure
- **Contact Integration**: Contact form with validation and API endpoint
- **Component Library**: Customized shadcn/ui components

## 📄 Pages

- **Home**: Hero section, services preview, about preview, fleet showcase, blog preview
- **About**: Company story, mission/vision, team profiles, statistics
- **Services**: Detailed service descriptions for security offerings
- **Fleet**: Vehicle gallery and equipment showcase
- **Blog**: Security insights and industry updates
- **Contact**: Contact form, quick contact options, location map

## 🎨 Design System

The website uses a comprehensive design system with:

- **Primary Colors**: Red (#b22222) for urgent/security elements, Green (#006400) for trust/safety
- **Typography**: Inter font family for clean, professional appearance
- **Components**: Fully customized shadcn/ui components with brand variants
- **Layout**: Consistent spacing, rounded corners, and hover effects

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pengilon-security-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**

   ```bash
   vercel
   ```

3. **Configure project settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**

   - Drag and drop the `dist` folder to Netlify dashboard
   - Or connect your Git repository for automatic deployments

3. **Configure build settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Alternative Deployment Options

- **GitHub Pages**: Use `gh-pages` package for GitHub Pages deployment
- **Firebase Hosting**: Deploy using Firebase CLI
- **AWS S3**: Upload build files to S3 bucket with static hosting
- **Docker**: Use the included Dockerfile for containerized deployment

## 📝 Configuration

### Company Information

Edit `src/config/constants.ts` to customize:

- Company name and contact details
- Service offerings and descriptions
- Social media links
- Brand colors (for reference)

### Contact Form API

The contact form posts to `/api/contact`. Implement your backend endpoint to handle form submissions:

```typescript
// Expected POST data structure
{
  name: string;
  email: string;
  subject?: string;
  message: string;
}
```

### Environment Variables

Create `.env.local` for any environment-specific variables:

```env
VITE_API_URL=your-api-url
VITE_GOOGLE_MAPS_KEY=your-maps-key
```

## 🔧 Customization

### Adding New Services

1. Update `COMPANY_CONFIG.services` in `src/config/constants.ts`
2. Add corresponding icons to the icon map in components
3. Update the Services page with detailed descriptions

### Modifying Colors

1. Update CSS variables in `src/index.css`
2. Modify Tailwind config in `tailwind.config.ts`
3. Update brand colors in `src/config/constants.ts`

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## 📱 Mobile Responsiveness

The website is fully responsive with:

- Mobile-first CSS approach
- Hamburger navigation menu
- Responsive grid layouts
- Touch-friendly button sizes
- Optimized mobile typography

## 🔒 Security Features

- Input validation on contact forms
- XSS protection through React's built-in escaping
- HTTPS-ready (configure in deployment)
- Secure headers (configure in hosting provider)

## 📊 Performance

- Vite for fast development and optimized builds
- Lazy loading for images
- Code splitting for optimal bundle sizes
- Tree-shaking for unused code elimination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Pengilon Security Services. All rights reserved.

## 📞 Support

For technical support or questions about this website:

- Email: info@pengilonsecurity.co.zw
- Phone: +263 771 567 679

---

Built with ❤️ for professional security services.
