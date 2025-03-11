# Alberta AI Hub

The Alberta AI Hub is a central resource platform for AI innovation across the Government of Alberta. This platform serves as the showcase and distribution center for all AI initiatives, providing easy access to AI tools, training materials, and implementation guidelines.

## Features

- **AI Resource Catalog**: Browse and discover AI agents, applications, and workflows
- **Training Materials**: Access comprehensive learning paths and documentation
- **Implementation Guidelines**: Follow best practices and standards for AI implementation
- **Showcase**: Explore success stories and case studies of AI in government

## Technology Stack

- Vue.js 3 with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- Vue Router for navigation
- Pinia for state management

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alberta-gov/ai-hub.git
cd ai-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
alberta-ai-hub/
├── src/
│   ├── components/     # Reusable Vue components
│   ├── views/          # Page components
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia stores
│   ├── assets/         # Static assets
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── public/             # Public static assets
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## Development

### Code Style

This project follows the Vue.js Style Guide and uses ESLint for code linting. To maintain consistency:

- Use TypeScript for type safety
- Follow component naming conventions
- Write clear, descriptive commit messages

### Testing

Run tests with:
```bash
npm run test
```

## Deployment

The application is configured for deployment to the Government of Alberta's infrastructure. Contact the IT team for deployment credentials and procedures.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is proprietary and confidential. All rights reserved by the Government of Alberta.

## Contact

For questions or support, contact the AIM (AI & Machine Learning) team at aim@alberta.ca. 