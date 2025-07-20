# Resume App

A static portfolio/CV landing page built with Astro and Tailwind CSS. Generate beautiful, professional resumes with customizable templates and JSON-based data management.

## Setup

```bash
npm install
npm run dev
```

• Copy `src/data/cv.example.json` to `src/data/cv.json` and edit with your information

## Deployment

```bash
npm run build
```

• Deploy the `dist/` folder to Netlify, Vercel, or any static hosting service

## Customization

• **Content**: Edit `src/data/cv.json` with your personal/professional information
• **Styling**: Modify Tailwind classes in `.astro` components or `src/styles/` files
• **Templates**: Create new layouts in `src/layouts/templates/` and components in `src/components/templates/`

3. **Start development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:4321](http://localhost:4321) to view your resume.

## Configuration

Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

- `CV_TEMPLATE`: Choose your resume template. Available options:

  - `"default"` - Clean and professional CV template with sidebar layout

  Default: "default"

## Data Structure

Your CV data should include:

- **Personal Info**: Name, title, contact details
- **Summary**: Professional summary
- **Experience**: Work history with highlights
- **Education**: Academic background
- **Skills**: Categorized technical and soft skills
- **Languages**: Language proficiency levels

## Available Commands

| Command        | Action                                     |
| :------------- | :----------------------------------------- |
| `pnpm install` | Install dependencies                       |
| `pnpm dev`     | Start development server at localhost:4321 |
| `pnpm build`   | Build production site to `./dist/`         |
| `pnpm preview` | Preview build locally before deploying     |

## Printing

To print your CV as a professional single-page PDF:

1. **Open the print dialog**: Press `Ctrl+P` (or `Cmd+P` on Mac)
2. **Select destination**: Choose "Save as PDF" or your preferred PDF printer
3. **Configure settings**:

   - **Paper size**: A4 (recommended)
   - **Pages**: All
   - **Color**: Color (to preserve design elements)
   - **Quality**: 1,200 dpi or higher for best results
   - **Scale**: Custom (adjust if needed to fit content)
   - **Margins**: Default
   - **Options**: Enable "Background graphics" to preserve styling

4. **Optimize for single page**: The default template is designed to fit on one page when using standard content lengths. If your content exceeds one page:
   - Consider shortening bullet points in experience highlights
   - Reduce the number of skills listed per category
   - Condense education details
   - Adjust the summary length

**Tip**: Preview the print layout before saving to ensure all content fits properly on one page.

## Deployment

### GitHub Pages (Automatic)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**To enable GitHub Pages deployment:**

1. Go to your repository's **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to the `main` branch or manually trigger the workflow from the **Actions** tab

Your resume will be available at: `https://yourusername.github.io/repository-name`

### Manual Deployment

After building with `pnpm build`, you can also deploy the `dist/` folder to any static hosting service:

- Vercel
- Netlify
- AWS S3
- Firebase Hosting

## Customization

- **Templates**: Add new layouts in `src/layouts/templates/`. Currently available:
  - `DefaultLayout.astro` - Clean sidebar layout
- **Styling**: Modify Tailwind classes or add custom CSS
- **Data**: Update your information in `src/data/cv.json`
- **Types**: Extend CV data structure in `src/types/cv.ts`
