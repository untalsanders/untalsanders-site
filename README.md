<div align="center">
    <h1>🚀 Sanders Gutiérrez - Personal Website</h1>
    <p>Welcome to my personal portfolio and blog website built with Next.js and deployed on GitHub Pages.</p>
    <a href="https://untalsanders.com" target="_blank">View Live</a> • 
    <a href="#getting-started">Documentation</a> • 
    <a href="#contributing">Contributing</a>
</div>

![Screenshot untalsanders-site](untalsanders_dot_com.png 'Website Screenshot')

## ✨ Features

- 🎨 Modern and responsive design
- ⚡ Blazing fast performance with Next.js
- 📱 Mobile-first approach
- 🌐 Multi-language support (i18n)
- 📝 Blog system with Markdown
- 🔍 SEO optimized
- 🎨 Customizable theme

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 9.x or later (comes with Node.js)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/untalsanders/untalsanders-site.git
   cd untalsanders-site
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_SITE_URL=https://untalsanders.com
   ```

4. **Run the development server**
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠 Development

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm start` - Start production server
- `pnpm run lint` - Run Next linter
- `pnpm run fmt` - Format code with Prettier
- `pnpm run fmt:check` - Check code formatting

### Project Structure

```
.
├── public/          # Static files
├── src/
│   ├── app/         # Application pages
│   ├── components/  # Reusable components
│   ├── config/      # Configuration files
│   ├── features/    # Feature modules
│   ├── lib/         # External dependencies
│   ├── styles/      # Global styles
├── .github/         # GitHub configurations
└── public/          # Public assets
```

## 🚀 Deployment

This project is automatically deployed to Vercel. The deployment is triggered on every push to the `main` branch.

### Manual Deployment

1. Build the project:

   ```bash
   pnpm run build
   ```

2. The static files will be available in the `.next` directory.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the BSL License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- Website: [untalsanders.com](https://untalsanders.com)
- GitHub: [@untalsanders](https://github.com/untalsanders)
- LinkedIn: [Sanders Gutiérrez](https://linkedin.com/in/untalsanders)

---

Made with ❤️ by Sanders Gutiérrez
