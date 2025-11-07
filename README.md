# Al-Qalam Tuition - Modern Online Learning Platform

A professional, responsive education landing page built with React, TypeScript, and Tailwind CSS. Designed specifically for Islamic/Quranic education services with a beautiful ocean blue and turquoise color scheme.

## 🎯 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI/UX**: Professional design with smooth animations and hover effects
- **Course Filtering**: Filter courses by category (Quran, Arabic, Tajweed, Kids)
- **Sign-Up Modal**: Functional form with validation and success confirmation
- **Scroll Effects**: Dynamic header that changes color on scroll
- **Smooth Animations**: Floating cards, fade-in/slide-up modal transitions
- **Performance Optimized**: Built with React best practices and code splitting

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3
- **Build Tool**: Create React App (Webpack, Babel)
- **Icons**: Custom SVG components
- **State Management**: React Hooks (useState)
- **CSS Processing**: PostCSS with Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/al-qalam-tuition.git
cd al-qalam-tuition
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header with scroll effect
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── Categories.tsx      # Course categories grid
│   ├── PopularCourses.tsx  # Featured courses with filters
│   ├── Partners.tsx        # Trust partners section
│   ├── Footer.tsx          # Footer with links
│   ├── SignUpModal.tsx     # Registration modal
│   └── icons/
│       ├── HeroIcons.tsx
│       ├── CategoryIcons.tsx
│       └── CourseIcons.tsx
├── App.tsx                 # Main app component
├── index.tsx              # Entry point
├── index.css              # Global styles & Tailwind directives
└── types.ts               # TypeScript interfaces
public/
├── index.html             # HTML template
└── manifest.json          # PWA manifest
```

## 🎨 Color Palette

- **Ocean Blue**: #0A2540 (Primary)
- **Turquoise**: #4FB4C6 (Accent)
- **Sky Blue**: #6CB4EE (Secondary)
- **Soft Gold**: #F4C95D (Highlight)
- **Charcoal**: #1A1A1A (Text)

## 🚀 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot module reloading.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `/build` folder.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click "Deploy"
5. Your site will be live at `your-project.vercel.app`

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy

### GitHub Pages

1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/al-qalam-tuition"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## ✨ Key Features

### Course Filtering
- Click filter buttons to view courses by category
- All Programs, Quran, Arabic, Tajweed, Kids categories
- Smooth filtering with state management

### Sign-Up Form
- Name and email validation
- Real-time form feedback
- Success confirmation message
- Auto-close after successful submission

### Header Effects
- Dynamic color change on scroll
- Mobile hamburger menu
- Smooth transitions

### Responsive Grid
- 1 column on mobile
- 2 columns on tablet
- 4 columns on desktop

## 🧪 Testing

See `TESTING_GUIDE.md` for comprehensive manual testing procedures including:
- Filter functionality tests
- Form validation tests
- Responsive design tests
- Animation tests

## 📝 Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Email notifications
- [ ] Course detail pages
- [ ] Blog section
- [ ] Student testimonials
- [ ] Payment integration
- [ ] Multi-language support (English/Arabic)
- [ ] Dark mode toggle

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For questions or support, please reach out to the development team.

## 🙏 Credits

- Design inspired by modern education platforms
- Built with ❤️ for Islamic education
- Icons created with SVG

---

**Happy Learning! 📚✨**
