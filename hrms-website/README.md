# TimeSolution - Modern HRMS & Attendance Management System

A professional, modern, and responsive landing page for an HR Management System (HRMS) built with HTML, CSS, and JavaScript.

## Features

### Page Sections

1. **Hero Section**
   - Eye-catching headline with gradient background
   - Call-to-action buttons
   - Quick stats display
   - Animated dashboard preview image

2. **Features Section**
   - 6 comprehensive feature cards:
     - Attendance Tracking
     - Payroll Management
     - Leave Management
     - Task Management
     - Advanced Reports
     - Mobile App
   - Each card includes icon, description, and feature list

3. **Dashboard Preview Section**
   - Main dashboard showcase
   - Additional analytics and reports previews

4. **Statistics Section**
   - Animated counters displaying:
     - 50,000+ Active Users
     - 1,000+ Companies
     - 99.9% System Uptime
     - 4.9/5 Customer Rating

5. **Benefits Section**
   - 6 key benefits:
     - Boost Productivity
     - Reduce Costs
     - Ensure Compliance
     - Improve Employee Satisfaction
     - Data-Driven Decisions
     - Scalable Solution

6. **How It Works Section**
   - 3-step process:
     - Sign Up & Setup
     - Add Your Team
     - Start Managing

7. **Testimonials Section**
   - 3 customer testimonials with ratings
   - Profile images and company information

8. **Call-to-Action Section**
   - Final conversion section
   - Dual CTAs (Free Trial & Schedule Demo)
   - Trust indicators

9. **Footer**
   - Multi-column layout
   - Product, Company, and Support links
   - Social media links
   - Copyright and legal links

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox for layouts
  - CSS Custom Properties (variables)
  - Animations and transitions
  - Responsive design (mobile-first approach)
- **JavaScript (ES6+)** - Interactive features:
  - Smooth scrolling navigation
  - Animated statistics counters
  - Scroll-based animations
  - Mobile menu toggle
  - Intersection Observer API

## File Structure

```
hrms-website/
├── index.html              # Standalone HTML version
├── Default.aspx            # ASP.NET version (main page)
├── Default.aspx.cs         # ASP.NET code-behind
├── MasterPage.master       # ASP.NET master page
├── MasterPage.master.cs    # ASP.NET master page code-behind
├── styles.css              # Complete stylesheet
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## How to Use

### Standalone HTML Version

1. Open `index.html` in a modern web browser
2. No server required - works directly from the file system

### ASP.NET Version

1. Set up an ASP.NET Web Forms project
2. Place all files in the project directory
3. Ensure the MasterPage.master is properly configured
4. Build and run the project

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## Design Features

- **Color Scheme**: Professional purple gradient with complementary colors
- **Typography**: Inter font family for modern, clean appearance
- **Icons**: Font Awesome 6.4.0
- **Animations**: Smooth transitions, hover effects, and scroll-based animations
- **Accessibility**: Semantic HTML, proper heading hierarchy, alt texts

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #06B6D4;
    --accent-color: #8B5CF6;
    /* ... more variables */
}
```

### Content
- Edit text content directly in HTML files
- Replace placeholder images with actual screenshots
- Update company information in footer

### Features
- Add/remove feature cards by duplicating/removing `.feature-card` elements
- Modify benefits by editing `.benefit-card` elements
- Customize testimonials in `.testimonial-card` elements

## Performance Optimizations

- Efficient CSS with minimal specificity
- Debounced/throttled scroll events
- Intersection Observer for scroll animations
- Optimized animations with CSS transforms

## Future Enhancements

- Add actual backend integration for forms
- Implement newsletter subscription
- Add pricing section
- Create additional pages (About, Contact, etc.)
- Add blog integration
- Implement live chat support

## License

This project is created as part of OOP Labs coursework.

## Credits

- Font Awesome for icons
- Google Fonts for Inter typeface
- Placeholder images from placeholder services
- Profile images from pravatar.cc

---

**Note**: This is a static landing page template. For production use, integrate with a proper backend system and replace placeholder content with actual data.
