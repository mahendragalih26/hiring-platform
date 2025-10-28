# Usage Guide

This guide will help you understand how to use all the features included in this project.

## Table of Contents

1. [Zustand (State Management)](#zustand)
2. [TanStack Query (Data Fetching)](#tanstack-query)
3. [Zod (Schema Validation)](#zod)
4. [Firebase Integration](#firebase)
5. [Playwright (E2E Testing)](#playwright)
6. [Tailwind CSS](#tailwind-css)

## Zustand

Zustand is used for global state management.

### Using a Store

\`\`\`typescript
'use client';

import { useExampleStore } from '@/store/useExampleStore';

export function MyComponent() {
const { count, increment, decrement } = useExampleStore();

return (

<div>
<p>Count: {count}</p>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
</div>
);
}
\`\`\`

### Creating a New Store

Create a new file in the `store/` directory:

\`\`\`typescript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface MyState {
data: string;
setData: (data: string) => void;
}

export const useMyStore = create<MyState>()(
devtools(
(set) => ({
data: '',
setData: (data: string) => set({ data }),
}),
{ name: 'MyStore' }
)
);
\`\`\`

## TanStack Query

TanStack Query handles server state and data fetching.

### Basic Query Hook

\`\`\`typescript
'use client';

import { useQuery } from '@tanstack/react-query';

export function MyComponent() {
const { data, isLoading, error } = useQuery({
queryKey: ['users'],
queryFn: async () => {
const res = await fetch('/api/users');
return res.json();
},
});

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

### Mutations

\`\`\`typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function MyComponent() {
const queryClient = useQueryClient();

const mutation = useMutation({
mutationFn: async (newUser: { name: string; email: string }) => {
const res = await fetch('/api/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(newUser),
});
return res.json();
},
onSuccess: () => {
queryClient.invalidateQueries({ queryKey: ['users'] });
},
});

return (
<button onClick={() => mutation.mutate({ name: 'John', email: 'john@example.com' })}>
Add User
</button>
);
}
\`\`\`

## Zod

Zod is used for schema validation and TypeScript type inference.

### Schema Definition

\`\`\`typescript
import { z } from 'zod';

export const userSchema = z.object({
name: z.string().min(2, 'Name must be at least 2 characters'),
email: z.string().email('Invalid email'),
age: z.number().int().positive('Age must be positive'),
});

export type User = z.infer<typeof userSchema>;
\`\`\`

### Validation in Forms

\`\`\`typescript
'use client';

import { userSchema, type User } from '@/lib/zod/schemas';
import { useState } from 'react';

export function MyForm() {
const [errors, setErrors] = useState<string[]>([]);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      age: Number(formData.get('age')),
    };

    try {
      const validatedData = userSchema.parse(data);
      // Use validatedData here
      setErrors([]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues.map(issue => issue.message));
      }
    }

};

return (

<form onSubmit={handleSubmit}>
{/_ Form fields _/}
</form>
);
}
\`\`\`

## Firebase

Firebase is configured for Authentication, Firestore, and Storage.

### Authentication

\`\`\`typescript
import { loginUser, registerUser, logoutUser } from '@/lib/firebase/auth';

// Register a new user
await registerUser('user@example.com', 'password123');

// Login
await loginUser('user@example.com', 'password123');

// Logout
await logoutUser();
\`\`\`

### Using Auth State

\`\`\`typescript
'use client';

import { useAuth } from '@/hooks/useAuth';

export function MyComponent() {
const { user, loading } = useAuth();

if (loading) return <div>Loading...</div>;
if (!user) return <div>Please log in</div>;

return <div>Welcome, {user.email}</div>;
}
\`\`\`

### Firestore Operations

\`\`\`typescript
import { db } from '@/lib/firebase/config';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Add document
await addDoc(collection(db, 'users'), {
name: 'John Doe',
email: 'john@example.com',
});

// Get documents
const querySnapshot = await getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
console.log(doc.id, doc.data());
});

// Update document
await updateDoc(doc(db, 'users', 'userId'), {
name: 'Jane Doe',
});

// Delete document
await deleteDoc(doc(db, 'users', 'userId'));
\`\`\`

## Playwright

Playwright is configured for end-to-end testing.

### Running Tests

\`\`\`bash

# Run all tests

pnpm run test

# Run tests in UI mode

pnpm run test:ui

# Run tests in debug mode

pnpm run test:debug
\`\`\`

### Example Test

See `e2e/example.spec.ts` for a complete example of testing the counter functionality.

\`\`\`typescript
import { test, expect } from '@playwright/test';

test('should increment counter', async ({ page }) => {
await page.goto('/');

await page.getByRole('button', { name: '+' }).click();

await expect(page.getByText('1')).toBeVisible();
});
\`\`\`

## Tailwind CSS

Tailwind CSS v4 is configured for styling.

### Using Tailwind

\`\`\`tsx

<div className="flex items-center justify-center p-4 bg-blue-500 text-white">
  Hello, Tailwind!
</div>
\`\`\`

### Utility Functions

Use the `cn` utility for conditional classes:

\`\`\`typescript
import { cn } from '@/lib/utils/cn';

<div className={cn('base-classes', isActive && 'active-classes')}>
  Content
</div>
\`\`\`

## Environment Variables

Create a `.env.local` file (copy from `.env.local.example`) and add your Firebase credentials:

\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
\`\`\`

## Getting Help

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zod Documentation](https://zod.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Playwright Documentation](https://playwright.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
