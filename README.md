# Iyan Barry's Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with clean, minimal aesthetics
- **Blog System**: Markdown-based blog with frontmatter support
- **Project Showcase**: Filterable project gallery with tags
- **Dark/Light Mode**: Theme toggle with system preference detection
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and sitemap
- **Fast & Modern**: Built on Next.js 14 with App Router

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Content**: Markdown with gray-matter
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                 # Next.js 14 App Router pages
├── components/          # Reusable React components
├── content/blog/        # Markdown blog posts
├── data/               # Static data files
├── lib/                # Utility functions
└── public/             # Static assets
```

## Adding Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2023-11-15"
   summary: "Brief description of the post"
   tags: ["Tag1", "Tag2"]
   published: true
   ---
   ```
3. Write your content in Markdown below the frontmatter

## Customization

- Update personal information in `data/projects.ts`
- Modify colors and styling in `tailwind.config.js`
- Edit metadata defaults in `lib/metadata.ts`
- Customize layout components in `components/`

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with zero configuration

For other platforms, build with:
```bash
npm run build
```

## License

MIT License - feel free to use this as a template for your own site!