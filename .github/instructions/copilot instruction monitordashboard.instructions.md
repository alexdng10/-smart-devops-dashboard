---
applyTo: "**"
---

Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# Copilot Instructions

- Use Python 3.11+ for backend. Use FastAPI, SQLAlchemy, Pydantic.
- Use Next.js 15 with TypeScript for frontend, Tailwind for styling.
- When asked, output code only inside fenced blocks, no commentary.
- Tests must accompany code changes.
- For backend, use SQLite for local dev via env var fallback.
