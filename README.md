# EvoGit Web Demo

A demonstration project showcasing AI-powered autonomous repository improvements using Claude Code. This project features automated code reviews, documentation enhancements, and continuous self-improvement through GitHub Actions.

## Features

- **Autonomous Self-Improvement**: Claude Code automatically identifies and fixes issues twice daily
- **Automated Code Review**: Integration with Qodo for comprehensive PR reviews
- **Minimal Maintenance**: Continuous improvements without manual intervention
- **React-based**: Simple React application demonstrating the concept

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/evogit-web-demo.git
cd evogit-web-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
evogit-web-demo/
├── .github/
│   └── workflows/
│       └── self-improve.yml    # Automated improvement workflow
├── src/
│   └── components/
│       └── App.js              # Main application component
├── CLAUDE.md                   # AI guardrails and guidelines
└── README.md                   # This file
```

## How It Works

This project uses the [Claude Code GitHub Action](https://github.com/anthropics/claude-code-action) to automatically:

1. **Analyze** the codebase twice daily (06:00 and 18:00 America/Chicago)
2. **Identify** high-impact improvements (documentation, error handling, tests, etc.)
3. **Implement** fixes following safe guardrails defined in `CLAUDE.md`
4. **Create** pull requests with detailed descriptions
5. **Trigger** automated code review via Qodo

## Configuration

### Guardrails (CLAUDE.md)

The `CLAUDE.md` file defines what Claude Code is allowed to modify:

- ✅ **Allowed**: Documentation, bug fixes, tests, CI/CD configs, quality improvements
- ❌ **Restricted**: Breaking changes, API modifications, production configs

### Workflow Customization

Edit `.github/workflows/self-improve.yml` to customize:
- **Schedule**: Modify cron expressions for different frequencies
- **Model**: Change Claude model version
- **Tools**: Adjust allowed tools for the agent
- **Prompt**: Customize improvement focus areas

## Development

### Available Scripts

- `npm start` - Run the development server
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm run lint` - Run linting

## Contributing

This is a demo project showcasing autonomous improvements. Feel free to:
- Fork and experiment with different workflows
- Customize the improvement prompts
- Add new features to demonstrate

## License

MIT License - feel free to use this as a template for your own projects.

## Learn More

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [React Documentation](https://react.dev)
