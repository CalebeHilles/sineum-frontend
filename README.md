# Sineum
A blog platform built to practice modern full-stack development, from component architecture to REST API integration.
> This is the frontend repository. The backend is available at: [sineum-backend](https://github.com/CalebeHilles/sineum-backend)
## About the Project
Sineum is a web application that allows you to view and manage blog posts. The project was developed with a focus on learning modern technologies and frontend development best practices, including componentization, state management, and API integration.
## Technologies
### Main Stack
- **Next.js 15** - React framework with App Router for dynamic routes and optimized navigation
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first styling for rapid development
### UI
- **shadcn/ui** - Accessible and customizable component library
- **Lucide React** - Consistent and lightweight icons
- **Radix UI** - UI primitives for complex components
## Installation and Execution
### Prerequisites
- Node.js 18+ 
- npm or yarn
### Step by Step
1. Clone the repository
```bash
git clone https://github.com/CalebeHilles/sineum-frontend.git
cd sineum-frontend
```
2. Install dependencies
```bash
npm install
```
3. Configure environment variables
Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_BASE_URL=https://sineum-backend-production.up.railway.app
```
4. Run the project
```bash
npm run dev
```
5. Access in browser
```
http://localhost:3000
```
### Available Scripts
- `npm run dev` - Starts the development server
- `npm run build` - Generates the production build
- `npm start` - Starts the production server
- `npm run lint` - Runs the linter
## Project Structure
```
src/
├── app/
│   ├── layout.tsx         
│   ├── page.tsx            
│   ├── globals.css         
│   └── posts/
│       ├── page.tsx        # Posts listing
│       └── [id]/
│           └── page.tsx    # Individual post
├── components/
│   ├── app-sidebar.tsx     
│   ├── card.tsx            # Post card
│   ├── fallbacks/
│   │   ├── loading.tsx     
│   │   └── error.tsx      
│   └── ui/                 # shadcn/ui components
├── hooks/
│   ├── useFetch.ts         # Generic fetch hook
│   ├── useBlogs.ts         # Specific hook for blogs
│   └── use-mobile.ts       
├── types/
│   └── blog.ts             
└── lib/
    └── utils.ts            
```
## Features
### Implemented
- Posts listing in card format
- Individual post viewing
- Navigation between pages via sidebar
- Loading and error states
### In Development
- Authentication system
- Post management dashboard
- Post creation and editing
- User profile
## Learnings
This project was developed with a focus on practical learning of:
- **React/Next.js application architecture** - Component organization, routes and state
- **TypeScript in real projects** - Data typing, interfaces and props
- **REST API integration** - Endpoint consumption, error handling and loading states
- **Custom Hooks** - Logic abstraction and reusability
- **Design System** - Implementation and customization of component libraries
### Main Challenges
- Creating a functional REST API in Go
- Managing PostgreSQL database connections
- Making architectural decisions for scalability
- Implementing dynamic routes in Next.js
## License
This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
## Notes

This is an actively developing project. Features and structure may change as the project evolves.

---
**Developed by Calebe Hillesheim Lamb**
