# Hiring Platform

A modern hiring management platform built with Next.js, TypeScript, Tailwind CSS, and other cutting-edge technologies.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Schema Validation**: Zod
- **E2E Testing**: Playwright
- **Backend Services**: Firebase (Auth, Firestore, Storage)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <your-repo-url>
   cd hiring-platform
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   pnpm install
   \`\`\`

3. Set up environment variables:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

Edit `.env.local` and add your Firebase configuration:
\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
\`\`\`

4. Run the development server:
   \`\`\`bash
   pnpm run dev
   \`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
hiring-platform/
├── app/ # Next.js App Router directory
│ ├── components/ # React components
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page
├── e2e/ # Playwright E2E tests
├── lib/ # Utility functions
│ ├── firebase/ # Firebase configuration
│ └── zod/ # Zod schemas
├── providers/ # React providers (TanStack Query, etc.)
├── store/ # Zustand stores
├── public/ # Static assets
└── playwright.config.ts # Playwright configuration
\`\`\`

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run test` - Run Playwright tests
- `pnpm run test:ui` - Run Playwright tests in UI mode
- `pnpm run test:debug` - Run Playwright tests in debug mode

## Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling
- ✅ Zustand for state management
- ✅ TanStack Query for data fetching
- ✅ Zod for schema validation
- ✅ Playwright for E2E testing
- ✅ Firebase integration (Auth, Firestore, Storage)

## Development

### Adding a new Zustand store

Create a new file in the `store/` directory:

\`\`\`typescript
import { create } from 'zustand';

interface MyStore {
// your state
}

export const useMyStore = create<MyStore>((set) => ({
// your implementation
}));
\`\`\`

### Adding a new Zod schema

Add schemas in `lib/zod/schemas.ts`:

\`\`\`typescript
export const mySchema = z.object({
field: z.string(),
});
\`\`\`

### Using TanStack Query

Wrap your queries with the `useQuery` hook:

\`\`\`typescript
'use client';

import { useQuery } from '@tanstack/react-query';

export function MyComponent() {
const { data, isLoading } = useQuery({
queryKey: ['myData'],
queryFn: fetchMyData,
});

if (isLoading) return <div>Loading...</div>;

return <div>{data}</div>;
}
\`\`\`

### Firebase Authentication

Use the Firebase auth functions from `lib/firebase/auth.ts`:

\`\`\`typescript
import { loginUser, registerUser, logoutUser } from '@/lib/firebase/auth';

// Login
await loginUser('user@example.com', 'password');

// Register
await registerUser('user@example.com', 'password');

// Logout
await logoutUser();
\`\`\`

## Testing

### Playwright Tests

Run the E2E test suite:

\`\`\`bash
pnpm run test
\`\`\`

Run tests with UI mode:

\`\`\`bash
pnpm run test:ui
\`\`\`

Run tests in debug mode:

\`\`\`bash
pnpm run test:debug
\`\`\`

## Deployment

### Build for production

\`\`\`bash
pnpm run build
pnpm run start
\`\`\`

### Deploy to Vercel

1. Push your code to a Git repository
2. Import your project in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy

## License

MIT
