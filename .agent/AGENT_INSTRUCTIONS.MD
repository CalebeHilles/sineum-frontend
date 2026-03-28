# Agent Guide — sineum-frontend

Purpose

- This document instructs automation agents how to work safely and productively in the frontend repo.
- All agents MUST follow these instructions.

General rules

- ONE task = ONE branch = ONE PR.
- Branch naming: `agent/<ticket-number>-<short-kebab-summary>`.
- Commit message format: `<scope>: <short summary>`, include ticket number.
- Do not store secrets in repo. Use `.env.example` for env var docs.

Pre-work

1. Pull latest `main`.
2. Run formatters: `prettier`, `eslint`.
3. Run TypeScript type check: `pnpm build` or `tsc --noEmit`.
4. If tests exist, run them.

One-task workflow

1. Create a branch with the required naming.
2. Implement the change (UI, hook, tests).
3. If change depends on backend API changes:
   - Check `sineum-backend` `openapi.yml` or ask backend agent for mock endpoint.
   - If backend endpoint not yet available, create a mock response or a small mock server file under `mocks/`.
   - Add a TODO and link backend PR/issue.
4. Add/modify unit tests or integration tests.
5. Update types if API contract changed (sync with backend's openapi).
6. Run `pnpm lint`, `pnpm format`, and `pnpm test`.
7. Update docs and `.env.example` if new env variables are required.
8. Commit and push, open PR with this template:
   - Title: `agent-task-###: short summary`
   - Body:
     - Summary of change
     - How to run and test locally
     - Mock server instructions (if any)
     - New env vars
     - Any accessibility or UX notes
9. Label PRs: `agent/task`, `frontend`, `(mock)` if using mock.
10. Request human review for UI/UX changes and any auth flows.

Contract-first and coordination

- If a backend change is required BEFORE implementing frontend, agent should:
  - Create a small OpenAPI snippet in `contracts/` describing the endpoint.
  - Create a `mocks/` example response to allow frontend work to proceed.
  - Create or link an issue in backend repo to implement the API.
- The frontend agent MUST NOT assume types; it must confirm the backend contract or use the mock.

Quality & safety

- Use AbortController for in-flight requests.
- Add unit tests for hooks and components changed.
- Use the central `services/api.ts` client for network calls (if not present, agent creates it).
- No hardcoded API_URL; use `NEXT_PUBLIC_API_URL` via `.env`.
- Component props must be typed.
- Write small, focused UI changes.

PR checklist (required)

- Linting passed
- Type checking passed
- Tests passed
- Documentation updated (.md or README)
- Mock server included when backend unavailable
- Accessibility checks (simple ones: ensure buttons use <button>, images have alt if applicable)
- UX notes and testing steps in PR body

Pacing and splitting

- Keep tasks small. If a change is > 4 hours, create subtasks and open an epic issue.

Reporting

- Add short entry in `.agent/PROGRESS.md` with branch and PR link.

Human approvals

- UI changes that affect flows, auth, or privacy must have human reviewer approval.
