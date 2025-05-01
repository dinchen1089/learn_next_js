## What is next js

- Next js is a react framework for building fullstack application

## Next.js

- It uses react for building user interface
- Provides additional features that enable you to build production ready applications
- These features include routing, optimized rendering, data fetching, bundling, compiling, and more

## Why learn

- Next.js simplifies the process of building production-ready web applications
- 1. Routing
- 2. API Routes
- 3. Rendering - Supports both client and server routing
- 4. Data fetching
- 5. Styling
- 6. Optimization
- 7. Dev and prod build system

## React Server Component (RSC)

- This architecture introduces a new approach of creating
  React components by dividing them into two distinct types:

  - Server components
    - By Default all components are treated as server components
  - Client components

## Routing conventions

1. All routes must live inside the app folder
2. Route files must be named either page.js or page.jsx
3. Each folder represent a segment of the url path

When this conventions are followed, the file automatically becomes available as a route.

## Dynamic Route

1. In Next.js you can create dynamic routes simply by naming folders or files with square-bracket syntax. The framework will match those segments at request time and hand you the values as “route parameters.”

## Nested Dynamic routes

1.  Next.js (both Pages Router and App Router), you can nest dynamic segments simply by stacking folders (or files) named with square brackets. This lets you capture multiple levels of URL parameters.

## Catch-all segments

![alt text](image.png)

### Folder Structure

![alt text](image-1.png)
