# 📋 Portfolio Data JSON Guide

Complete reference for customizing your `portfolio-data.json` file.

## Table of Contents
- [Personal Information](#personal-information)
- [Experiences](#experiences)
- [Education](#education)
- [Skills](#skills)
- [Skill Items with Icons](#skill-items-with-icons)
- [Production Projects](#production-projects)
- [Sample Projects](#sample-projects)
- [Testimonials](#testimonials)
- [Social Links](#social-links)

---

## Personal Information

Your basic profile information displayed in the hero and about sections.

### Structure
```json
{
  "personalInfo": {
    "name": "string",
    "title": "string",
    "email": "string",
    "phone": "string",
    "location": "string",
    "linkedin": "string (URL)",
    "github": "string (URL)",
    "website": "string (URL)",
    "availability": "string",
    "summary": "string",
    "avatar": "string (URL)",
    "avatar2": "string (URL) - Optional secondary avatar",
    "about": ["array", "of", "strings"],
    "quickFacts": ["array", "of", "strings"]
  }
}
```

### Example
```json
{
  "personalInfo": {
    "name": "Jane Developer",
    "title": "Senior Frontend Engineer",
    "email": "jane@example.com",
    "phone": "+1 (555) 987-6543",
    "location": "Austin, TX",
    "linkedin": "https://linkedin.com/in/janedeveloper",
    "github": "https://github.com/janedeveloper",
    "website": "https://janedeveloper.com",
    "availability": "Open to opportunities",
    "summary": "Creative developer with 8+ years building user-centric applications.",
    "avatar": "https://ui-avatars.com/api/?name=Jane+Developer&size=200",
    "about": [
      "I'm a frontend specialist passionate about creating delightful user experiences.",
      "Started coding in 2015 and haven't looked back since.",
      "When not coding, I enjoy teaching and mentoring aspiring developers."
    ],
    "quickFacts": [
      "M.S. in Computer Science",
      "Conference Speaker",
      "Open Source Contributor",
      "Coffee Enthusiast ☕"
    ]
  }
}
```

### Tips
- Use [UI Avatars](https://ui-avatars.com/) for quick placeholder avatars
- Keep summary under 200 characters for best display
- Include 2-4 about paragraphs
- Add 3-6 quick facts for personality

---

## Experiences

Your professional work history.

### Structure
```json
{
  "experiences": [
    {
      "id": "string (unique)",
      "company": "string",
      "position": "string",
      "location": "string",
      "startDate": "string (YYYY-MM)",
      "endDate": "string (YYYY-MM or 'Present')",
      "current": boolean,
      "responsibilities": ["array", "of", "strings"],
      "technologies": ["array", "of", "strings"]
    }
  ]
}
```

### Example
```json
{
  "experiences": [
    {
      "id": "exp1",
      "company": "Tech Innovators Inc",
      "position": "Lead Frontend Developer",
      "location": "Remote",
      "startDate": "2021-06",
      "endDate": "Present",
      "current": true,
      "responsibilities": [
        "Led team of 5 developers in building React-based applications",
        "Improved application performance by 60% through optimization",
        "Established coding standards and best practices",
        "Mentored junior developers through code reviews"
      ],
      "technologies": ["React", "TypeScript", "Next.js", "GraphQL", "AWS"]
    },
    {
      "id": "exp2",
      "company": "Digital Agency Co",
      "position": "Frontend Developer",
      "location": "New York, NY",
      "startDate": "2019-01",
      "endDate": "2021-05",
      "current": false,
      "responsibilities": [
        "Built responsive websites for 20+ clients",
        "Collaborated with design team on UI/UX improvements",
        "Implemented accessibility standards (WCAG 2.1)"
      ],
      "technologies": ["Vue.js", "JavaScript", "Sass", "Webpack"]
    }
  ]
}
```

### Tips
- List experiences in reverse chronological order (newest first)
- Use action verbs: "Built", "Led", "Implemented", "Designed"
- Quantify achievements when possible (percentages, numbers)
- Keep responsibilities list to 3-5 items per role

---

## Education

Your academic background.

### Structure
```json
{
  "education": [
    {
      "id": "string (unique)",
      "institution": "string",
      "degree": "string",
      "field": "string",
      "location": "string",
      "startDate": "string (YYYY-MM)",
      "endDate": "string (YYYY-MM)",
      "gpa": "string (optional)",
      "achievements": ["array", "of", "strings"]
    }
  ]
}
```

### Example
```json
{
  "education": [
    {
      "id": "edu1",
      "institution": "Stanford University",
      "degree": "Master of Science",
      "field": "Computer Science",
      "location": "Stanford, CA",
      "startDate": "2017-09",
      "endDate": "2019-06",
      "gpa": "3.9",
      "achievements": [
        "Specialized in Machine Learning",
        "Teaching Assistant for Web Development",
        "Published research paper on neural networks"
      ]
    },
    {
      "id": "edu2",
      "institution": "University of Texas",
      "degree": "Bachelor of Science",
      "field": "Software Engineering",
      "location": "Austin, TX",
      "startDate": "2013-09",
      "endDate": "2017-05",
      "gpa": "3.7",
      "achievements": [
        "Summa Cum Laude",
        "President of ACM Student Chapter"
      ]
    }
  ]
}
```

### Tips
- Include relevant certifications as education entries
- GPA is optional (include only if 3.5+)
- Highlight relevant coursework or specializations
- Add 2-4 notable achievements

---

## Skills

Simple categorized list of your technical skills.

### Structure
```json
{
  "skills": [
    {
      "category": "string",
      "items": ["array", "of", "skill", "names"]
    }
  ]
}
```

### Example
```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": ["React", "Angular", "Vue.js", "TypeScript", "HTML5", "CSS3"]
    },
    {
      "category": "Backend",
      "items": ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      "category": "Tools & DevOps",
      "items": ["Git", "Docker", "Jenkins", "AWS", "Linux"]
    },
    {
      "category": "Soft Skills",
      "items": ["Team Leadership", "Agile/Scrum", "Problem Solving", "Communication"]
    }
  ]
}
```

### Tips
- Use 4-6 categories
- List 5-10 skills per category
- Order by proficiency or importance
- Include both technical and soft skills

---

## Skill Items with Icons

Enhanced skills display with visual icons.

### Structure
```json
{
  "skillItems": [
    {
      "category": "string",
      "skills": [
        {
          "name": "string",
          "icon": "string (URL to SVG/PNG)"
        }
      ]
    }
  ]
}
```

### Example
```json
{
  "skillItems": [
    {
      "category": "Frontend Frameworks",
      "skills": [
        {
          "name": "React",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          "name": "Angular",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        }
      ]
    },
    {
      "category": "Languages",
      "skills": [
        {
          "name": "JavaScript",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          "name": "Python",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        }
      ]
    }
  ]
}
```

### Icon Resources
- **DevIcon**: https://devicon.dev/ - 150+ technology icons
- **Simple Icons**: https://simpleicons.org/ - Brand icons
- **Vector Logo Zone**: https://www.vectorlogo.zone/ - High-quality logos
- **Icons8**: https://icons8.com/ - General purpose icons

### Tips
- Use consistent icon style (all colored or all monochrome)
- SVG format preferred for scalability
- Test icon URLs before adding
- Keep 4-8 skills per category for clean layout

---

## Production Projects

Live projects you've worked on professionally.

### Structure
```json
{
  "productionProjects": [
    {
      "id": "string (unique)",
      "name": "string",
      "description": "string",
      "technologies": ["array", "of", "strings"],
      "imageUrls": ["array", "of", "screenshot", "URLs"]
    }
  ]
}
```

### Example
```json
{
  "productionProjects": [
    {
      "id": "prod1",
      "name": "E-Commerce Dashboard",
      "description": "Enterprise-level analytics dashboard serving 100K+ daily users with real-time sales tracking, inventory management, and predictive analytics.",
      "technologies": ["React", "Node.js", "PostgreSQL", "Redis", "AWS Lambda"],
      "imageUrls": [
        "assets/Screenshot/ecommerce-dashboard-1.png",
        "assets/Screenshot/ecommerce-dashboard-2.png"
      ]
    },
    {
      "id": "prod2",
      "name": "Mobile Banking App",
      "description": "Secure mobile banking application with biometric authentication, instant transfers, and investment tracking.",
      "technologies": ["React Native", "GraphQL", "MongoDB", "AWS"],
      "imageUrls": [
        "assets/Screenshot/banking-app.png"
      ]
    }
  ]
}
```

### Tips
- Focus on impact and scale in descriptions
- Add 1-3 screenshots per project
- List key technologies used
- Keep descriptions under 150 characters
- No need for GitHub/live URLs (use for confidentiality)

---

## Sample Projects

Personal or demo projects with links to code and live demos.

### Structure
```json
{
  "sampleProjects": [
    {
      "id": "string (unique)",
      "name": "string",
      "description": "string",
      "technologies": ["array", "of", "strings"],
      "imageUrls": ["array", "of", "screenshot", "URLs"],
      "githubUrl": "string (URL) or null",
      "liveUrl": "string (URL) or null"
    }
  ]
}
```

### Example
```json
{
  "sampleProjects": [
    {
      "id": "proj1",
      "name": "Weather Forecast App",
      "description": "Real-time weather application with 7-day forecasts, interactive maps, and location-based alerts.",
      "technologies": ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      "imageUrls": [
        "assets/Screenshot/weather-app-1.png",
        "assets/Screenshot/weather-app-2.png"
      ],
      "githubUrl": "https://github.com/janedeveloper/weather-app",
      "liveUrl": "https://weather.janedeveloper.com"
    },
    {
      "id": "proj2",
      "name": "Task Management Board",
      "description": "Kanban-style task board with drag-and-drop, team collaboration, and progress tracking.",
      "technologies": ["Angular", "Firebase", "TypeScript", "RxJS"],
      "imageUrls": [
        "assets/Screenshot/task-board.png"
      ],
      "githubUrl": "https://github.com/janedeveloper/task-board",
      "liveUrl": null
    }
  ]
}
```

### Tips
- Include GitHub repo for code visibility
- Add live demo URL when available
- Use high-quality screenshots (1200x800px recommended)
- Show different views/features in multiple screenshots
- Set to `null` if no GitHub/live URL available

---

## Testimonials

Client or colleague recommendations.

### Structure
```json
{
  "testimonials": [
    {
      "id": "string (unique)",
      "name": "string",
      "imageUrl": "string (URL)",
      "position": "string",
      "company": "string",
      "text": "string",
      "sourceUrl": "string (URL) - optional",
      "sourceText": "string - optional",
      "date": "string (Month Day, Year)"
    }
  ]
}
```

### Example
```json
{
  "testimonials": [
    {
      "id": "test1",
      "name": "Michael Chen",
      "imageUrl": "https://ui-avatars.com/api/?name=Michael+Chen&size=200",
      "position": "Engineering Manager",
      "company": "Tech Solutions Inc",
      "text": "Jane is an exceptional developer who consistently delivers high-quality code. Her attention to detail and problem-solving skills are outstanding.",
      "sourceUrl": "https://www.linkedin.com/in/janedeveloper/details/recommendations",
      "sourceText": "Read on LinkedIn",
      "date": "March 15, 2024"
    },
    {
      "id": "test2",
      "name": "Sarah Johnson",
      "imageUrl": "https://ui-avatars.com/api/?name=Sarah+Johnson&size=200",
      "position": "Product Manager",
      "company": "Digital Ventures",
      "text": "Working with Jane was a pleasure. She brings creative solutions to complex problems and communicates clearly with all team members.",
      "date": "January 8, 2024"
    }
  ]
}
```

### Tips
- Request testimonials from recent projects
- Use professional photos when possible
- Keep testimonials to 2-3 sentences (under 200 characters)
- Include source links (LinkedIn, Twitter, etc.)
- Add 4-8 testimonials for credibility
- Use UI Avatars if no photo available

---

## Social Links

Your professional social media and contact links.

### Structure
```json
{
  "socialLinks": [
    {
      "platform": "string",
      "url": "string (URL)",
      "icon": "string (icon identifier)"
    }
  ]
}
```

### Example
```json
{
  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/janedeveloper",
      "icon": "linkedin"
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/janedeveloper",
      "icon": "github"
    },
    {
      "platform": "Twitter",
      "url": "https://twitter.com/janedevs",
      "icon": "twitter"
    },
    {
      "platform": "Email",
      "url": "mailto:jane@example.com",
      "icon": "email"
    },
    {
      "platform": "Portfolio",
      "url": "https://janedeveloper.com",
      "icon": "web"
    }
  ]
}
```

### Supported Icons
- `linkedin`
- `github`
- `twitter`
- `email`
- `web`
- `medium`
- `dev`
- `stackoverflow`

### Tips
- Link to professional profiles only
- Test all URLs before deploying
- Include 3-6 social links
- Place most important links first

---

## Complete Example

Here's a minimal complete `portfolio-data.json`:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 000-0000",
    "location": "Your City, State",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "website": "https://yourwebsite.com",
    "availability": "Available",
    "summary": "Your summary here.",
    "avatar": "https://ui-avatars.com/api/?name=Your+Name",
    "about": ["About paragraph 1", "About paragraph 2"],
    "quickFacts": ["Fact 1", "Fact 2", "Fact 3"]
  },
  "experiences": [],
  "education": [],
  "skills": [],
  "skillItems": [],
  "productionProjects": [],
  "sampleProjects": [],
  "testimonials": [],
  "socialLinks": []
}
```

## Validation Tips

1. **Use a JSON validator**: [JSONLint](https://jsonlint.com/)
2. **Check for common errors**:
   - Missing commas between objects
   - Trailing commas in last items
   - Unescaped quotes in strings
   - Invalid URLs
3. **Test locally** before deploying
4. **Keep backups** of working versions

## Need Help?

- Check existing `portfolio-data.json` for reference
- Open an issue on GitHub
- Ensure all required fields are filled
- Validate JSON syntax before saving

---

Happy customizing! 🚀
