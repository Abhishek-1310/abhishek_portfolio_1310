# Modern React Portfolio

A stunning, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion animations.

## 🚀 Features

- ⚡ Lightning-fast performance with Vite
- 🎨 Beautiful UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Sections: Hero, About, Skills, Projects, Contact
- 🌟 Modern gradient design
- 📧 Contact form
- 🔗 Social media links

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🚀 Deploy to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect the settings
4. Click Deploy!

### Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the title/role
   - Add your social media links

2. **About Section** (`src/components/About.jsx`):
   - Replace placeholder text with your bio
   - Update statistics (projects, experience, etc.)
   - Add your photo (replace the placeholder)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills based on your expertise
   - Customize skill icons and colors

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Add real project images
   - Update GitHub and demo links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Add your email, phone, and location
   - Configure form submission (integrate with a backend or service like Formspree)

6. **Footer** (`src/components/Footer.jsx`):
   - Update copyright information
   - Add your social media links

### Colors

Customize the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#6366f1',    // Change primary color
  secondary: '#8b5cf6',  // Change secondary color
},
```

### Background

Modify the gradient background in `src/index.css`:

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📧 Contact Form Integration

To make the contact form functional, you can integrate with:

- **Formspree**: Easy form backend
- **EmailJS**: Send emails directly from the frontend
- **Netlify Forms**: If deploying on Netlify
- **Custom Backend**: Build your own API

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐ if you like this project!

---

Made with ❤️ using React and Tailwind CSS
