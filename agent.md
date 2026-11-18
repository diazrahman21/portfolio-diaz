# ROLE & OBJECTIVE

Act as a Senior Creative Frontend Engineer, UI/UX Designer, Motion Designer, and Full-Stack Developer.

Your task is to build a premium, modern, interactive, and fully responsive personal portfolio website for **Muh Diaz Nazarudin Rahman**, using the uploaded reference file:

`Portfolio Collage – Portfolio - Desktop.html`

The uploaded HTML file is the primary visual reference. Study its layout, visual hierarchy, typography, colors, spacing, components, and overall design language before implementing anything.

The goal is to recreate and improve the reference into a polished developer portfolio with professional-grade animations and interactions.

**IMPORTANT: You must actually implement the website in the existing project, not just provide suggestions, mockups, or code snippets.**

---

# 1. MANDATORY SKILLS

Before starting implementation:

1. Inspect the available project structure and existing dependencies.
2. Identify and read the available `frontend-master` skill.
3. Follow its design principles, implementation guidelines, and frontend best practices throughout the project.
4. Use the skill's recommended workflow for creating premium frontend interfaces.
5. If additional relevant frontend or animation skills are available, inspect and apply them.

Do not skip the skill discovery process.

# 2. TECHNOLOGY STACK

Use the following technologies:

- React.js as the primary frontend framework.
- Vue.js for a separate interactive component or isolated widget.
- Vite as the development and build tool.
- TypeScript for maintainable and type-safe code.
- Tailwind CSS for styling.
- Framer Motion / Motion for React for animations.
- GSAP with ScrollTrigger for advanced scroll-based animations when appropriate.
- Lucide React for icons.

### Framework architecture

React must handle the primary portfolio application, including routing, sections, layout, and global state.

Vue.js must be integrated as an isolated interactive component using a separate Vue application or custom element where appropriate.

Possible Vue component:
- Interactive technology stack explorer.
- Animated skill visualization.
- Interactive project filter.

Avoid unnecessary duplication of components or loading two frameworks throughout the entire application.

Keep the architecture modular, maintainable, and performant.

# 3. DESIGN DIRECTION

Follow the uploaded reference closely.

Visual characteristics:

- Warm off-white background: approximately #FAF9F5.
- Minimalist editorial aesthetic.
- Bold, expressive typography.
- Clean layouts with generous whitespace.
- Large typography and carefully arranged content.
- Soft borders and subtle shadows.
- Rounded cards with restrained radiuses.
- Playful handwritten accents.
- Subtle decorative elements.
- Carefully balanced asymmetrical layouts.
- High-quality project thumbnails.
- Smooth transitions and micro-interactions.

### Typography

Use a combination of:

- Bricolage Grotesque for bold headings.
- Newsreader for editorial and expressive text.
- Caveat for handwritten decorative accents.

Typography should create a clear hierarchy and give the website a distinctive personal identity.

Avoid generic SaaS landing page aesthetics.

Do not overuse gradients, glassmorphism, excessive rounded cards, or random decorative elements.

The result should look like a thoughtfully art-directed portfolio from a professional creative developer.

# 4. WEBSITE STRUCTURE & SECTIONS

Build the following sections:

## A. Navigation / Header

Create a clean, sticky navigation bar.

Content:
- Diaz Rahman logo/name.
- About.
- Projects.
- Experience.
- Education.
- Contact.

Interactions:
- Smooth scrolling to sections.
- Active section indicator.
- Subtle hover animations.
- Mobile navigation menu with animated opening and closing.
- Navigation background transition when scrolling.

## B. Hero Section

Main introduction:

"Hi, I'm Diaz"

Full name:
Muh Diaz Nazarudin Rahman

Main headline:
"Full-stack and backend developer building reliable, AI-powered web products."

Include:
- Short professional introduction.
- Profile photo placeholder.
- Availability badge: Open to Work.
- View Projects button.
- Email Me button.
- Current or most recent professional experience.

Create an expressive hero layout with a large heading, profile image area, and decorative handwritten annotations.

Animations:
- Staggered text entrance.
- Word-by-word or character-based headline reveal.
- Profile image reveal with clip-path or mask animation.
- Floating decorative elements.
- Animated availability indicator.
- Button hover interactions.
- Subtle parallax movement.

## C. Marquee / Tech Introduction

Create an infinite horizontal scrolling marquee.

Content:
Full-stack, Backend, TypeScript, React, Flask, Supabase, Laravel, Cyber Security.

Animations:
- Seamless infinite horizontal movement.
- Pause on hover where appropriate.
- Smooth and consistent motion.

## D. About Me

Section heading:
"Informatics graduate, hands-on builder."

Description:

"I graduated from Universitas Ahmad Dahlan with a GPA of 3.57/4.00, on time and in under four years. Along the way I built full-stack and AI-powered applications with TypeScript, React, Flask, and Supabase, and developed a steady interest in cyber security.

I'm looking for a full-stack or backend developer role where I can build reliable, impactful digital products."

Highlight these statistics:

- 3.57 GPA out of 4.00.
- 2,000+ piracy websites reported at Vidio.
- 25 teaching assistants coordinated.
- 8 karate medals in national and international championships.

Animations:
- Section reveal on scroll.
- Staggered paragraph animation.
- Animated number counters.
- Subtle image or illustration movement.
- Hover interaction on statistic cards.

## E. Skills / Toolbox

Organize skills into three categories.

**Frontend**
- HTML
- CSS
- JavaScript
- TypeScript
- React.js
- Next.js
- Vue.js
- Vite
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- Flask
- Laravel
- CodeIgniter
- PHP
- Python
- Golang
- REST API

**Data & Tools**
- Supabase
- PostgreSQL
- TensorFlow
- Git
- Postman
- Java
- C#
- .NET

Also include professional soft skills:
- Problem Solving
- Communication
- Team Collaboration
- Time Management
- Adaptability
- Leadership
- Attention to Detail
- Critical Thinking
- Self-directed Learning

Animations:
- Staggered skill appearance.
- Animated category transitions.
- Interactive hover states.
- Subtle icon movement.
- Animated progress or proficiency indicators only when actual proficiency data is available.

Do not invent skill proficiency percentages.

## F. Selected Projects

Create an attractive project showcase with editorial layouts, large screenshots, and asymmetric project cards.

Projects:

**1. Smart Document Reader**
- A document reader powered by Vision AI and hosted on Cloudflare.
- Technologies: Next.js, TypeScript, Cloudflare, Vision AI.

**2. Bedah Docs**
- Use a placeholder description until the actual project details are available.
- Technologies: Next.js, TypeScript.

**3. Job Board & Recruitment App**
- A job board and recruitment application built with Laravel 12.
- Technologies: Laravel 12, PHP.

**4. PDF Summarizer – Flyrank AI**
- A RAG-based application where users upload PDFs and receive AI summaries organized around their selected key points.
- Technologies: TypeScript, RAG, AI.

**5. Coding Camp Team Application**
- Developed with a team of six in two months.
- Delivered 5+ key features.
- Deployed to Netlify.
- Final score: 94/100.
- Technologies: React, Vite, Flask, Supabase.

Each project should include:
- Project screenshot or visual placeholder.
- Project title.
- Short description.
- Technology stack badges.
- View Project button when a verified URL is available.
- GitHub link when available.

Animations:
- Image reveal using clip-path.
- Staggered project card entrances.
- Image scale on hover.
- Cursor-following effects on desktop, used sparingly.
- Smooth card transitions.
- Scroll-triggered image parallax.
- Animated project labels.

Do not invent project URLs or GitHub repositories.

## G. Work Experience

Create a beautiful vertical timeline.

**Jun–Sep 2026 — Backend AI Engineer Intern**
Flyrank AI, Illinois, USA (Remote).

- Developed a RAG-based TypeScript application that converts uploaded PDFs into AI-powered summaries.
- Built an automated pipeline to process documents and retrieve relevant passages.
- Added customizable summaries organized around user-defined key points.

**Aug–Dec 2025 — Content Security Intern**
PT Vidio Dot Com, Jakarta, Indonesia.

- Built Match Replacer and SnackVideo Converter to automate content processing.
- Reported 2,000+ piracy websites.
- Monitored illegal live streams and reported illegal applications.
- Analyzed piracy patterns and supported copyright enforcement.

**Feb–Jul 2025 — Full-stack Developer Intern**
Coding Camp by DBS Foundation, Indonesia.

- Built an end-to-end web application with a team of six.
- Used React + Vite, Flask, and Supabase.
- Delivered 5+ key features.
- Achieved a final score of 94/100.

**Feb–Jul 2025 — Coordinator, Programming Algorithms Practicum**
Informatics Laboratory, Universitas Ahmad Dahlan.

- Coordinated 25 teaching assistants.
- Prepared learning materials, schedules, and evaluations.
- Mentored students in algorithms and C++ programming.

**May–Aug 2025 — Student Employment, Tracer Study**
Universitas Ahmad Dahlan.

- Contacted 100+ alumni through surveys and direct outreach.
- Helped validate and recap data within two weeks.

Animations:
- Timeline line drawing animation.
- Sequential experience card reveal.
- Date and position transitions.
- Subtle hover interactions.

## H. Education & Leadership

**Bachelor of Informatics**
Universitas Ahmad Dahlan, Yogyakarta.

September 2022 – June 2026.

GPA: 3.57/4.00.

Achievements:
- Graduated in 3 years and 10 months.
- Sang Surya Non-Academic Achievement Scholarship (2024).
- Non-Academic Outstanding Student.
- 8 medals in national and international karate championships (2023–2024).

Additional leadership:

- Co-Trainer, Softskills Training II — July 2026.
- President, Karate Activity Unit — August 2023 to August 2024.
- Liaison Officer, National Schools Debating Championships — October 2023.

Create an editorial timeline or two-column layout.

Animations:
- Staggered content entrance.
- Timeline progression.
- Subtle medal and achievement highlights.

## I. Certificates

Display certificates in a clean grid or horizontal carousel.

Certificates:
- Google AI Essentials.
- IBM Code Generation and Optimization.
- Huawei ICT Academy HCIA-Security.

Include certificate images and links only when actual assets or URLs are available.

## J. Contact / CTA

Headline:

"Got a role or an idea? Let's build something reliable."

Supporting text:

"I'm open to full-stack and backend developer roles. Send me a message and I'll get back to you."

Contact information:

Email: muhdiaznazarudinrahman@gmail.com

LinkedIn: muh-diaz-nazarudin-rahman-0aa85a2a1

Phone: +62 821 1746 6103

Animations:
- Large heading reveal.
- Animated contact links.
- Button magnetic interaction on desktop.
- Subtle background decoration.
- Smooth footer entrance.

## K. Footer

Include:
- Muh Diaz Nazarudin Rahman.
- Copyright 2026.
- Social links.
- Back to top button.
- Simple footer navigation.

# 5. ADVANCED ANIMATION REQUIREMENTS

This is one of the most important requirements.

Every major section must have its own thoughtfully designed animation system.

Use animation to improve storytelling, not just decoration.

Required animation techniques:

1. Scroll-triggered reveal animations.
2. Staggered text and element entrances.
3. Character or word-based typography animation.
4. Image masking and clip-path reveals.
5. Smooth parallax effects.
6. Infinite marquee animation.
7. Animated counters.
8. Timeline drawing animations.
9. Interactive hover effects.
10. Magnetic button interactions.
11. Smooth page transitions where appropriate.
12. Subtle floating decorative elements.

### Animation quality guidelines

- Use consistent easing curves.
- Avoid excessive bounce effects.
- Keep animations smooth and natural.
- Use transform and opacity for performance.
- Avoid unnecessary layout recalculations.
- Use GSAP only where it provides a clear advantage.
- Avoid multiple animation libraries doing the same job.
- Implement reduced-motion support.
- Ensure animations do not interfere with usability or accessibility.

# 6. RESPONSIVE DESIGN

The website must work perfectly on:

- Large desktop screens.
- Standard laptop screens.
- Tablets.
- Mobile devices.

Mobile requirements:
- Responsive navigation.
- Optimized typography.
- Single-column project cards.
- Properly scaled profile images.
- No horizontal overflow.
- Touch-friendly buttons.
- Reduced animation complexity where necessary.

# 7. IMAGE & ASSET MANAGEMENT

Inspect available project assets before creating placeholders.

Use actual project screenshots and profile images when available.

If assets are missing:
- Create clean placeholders.
- Use tasteful illustrations or CSS compositions.
- Make asset replacement straightforward.
- Never use random unrelated images as actual project screenshots.
- Never invent personal photographs.

# 8. CODE QUALITY & ARCHITECTURE

Requirements:

- Reusable React components.
- Modular section components.
- Consistent design tokens.
- Centralized content data.
- TypeScript types.
- Maintainable folder structure.
- Semantic HTML.
- Accessible navigation.
- SEO metadata.
- Optimized image loading.
- Lazy loading where appropriate.
- Clean and reusable animation utilities.

Suggested structure:

src/
  components/
    layout/
    navigation/
    animations/
    ui/
  sections/
    Hero/
    About/
    Skills/
    Projects/
    Experience/
    Education/
    Certificates/
    Contact/
  data/
  hooks/
  styles/
  assets/

Create a separate Vue component directory or package for the isolated Vue widget.

# 9. PERFORMANCE & ACCESSIBILITY

Target a high-quality production experience.

Requirements:
- Optimize for Core Web Vitals.
- Avoid unnecessary dependencies.
- Prevent animation-related layout shifts.
- Use semantic landmarks.
- Provide meaningful image alt text.
- Ensure sufficient color contrast.
- Support keyboard navigation.
- Support prefers-reduced-motion.
- Ensure the website remains usable without animations.

# 10. EXECUTION WORKFLOW

Follow this workflow:

**Phase 1 — Analyze**
- Inspect the uploaded HTML reference.
- Study its visual layout and design language.
- Inspect the existing repository.
- Read the frontend-master skill.
- Identify available assets and dependencies.

**Phase 2 — Plan**
- Define component architecture.
- Define color and typography tokens.
- Plan animations for each section.
- Establish React and Vue integration.

**Phase 3 — Implement**
- Build the complete website.
- Implement every section.
- Add responsive layouts.
- Add animations and interactions.
- Integrate the Vue component.

**Phase 4 — Test**
- Run the development server.
- Check for build errors.
- Check TypeScript errors.
- Test all navigation links.
- Test mobile responsiveness.
- Test animation behavior.
- Check browser console errors.
- Verify that no section is missing.

**Phase 5 — Polish**
- Compare the implementation against the reference.
- Improve spacing, typography, alignment, and visual hierarchy.
- Refine animations and micro-interactions.
- Optimize performance.

# 11. FINAL EXPECTATIONS

The final website must:

- Closely follow the uploaded design reference.
- Have a distinctive personal identity.
- Include every requested section.
- Have polished animations throughout the website.
- Use React and Vue.js with a sensible architecture.
- Be fully responsive.
- Be accessible and performant.
- Have clean, production-ready code.

Do not stop after creating the hero section.

Do not leave unfinished sections or non-functional buttons.

Do not use generic template designs.

Do not fabricate missing personal information, project descriptions, or URLs.

**Take ownership of the entire implementation. Make design decisions independently, execute the work, test it, and refine it until the portfolio feels like a premium, professionally art-directed developer portfolio.**