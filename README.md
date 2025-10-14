# smsnobin77.github.io

A **Jekyll**-powered personal portfolio and blog built using the **Al-Folio** theme.  
Includes blog posts, projects, publications, and SCSS-based theming.

## 🧰 Tech Stack
- **Jekyll 4** + **Liquid** templates  
- **SCSS** for theme customization  
- **Ruby/Bundler** for dependency management  
- **Docker** for containerized local builds  
- **GitHub Pages** for deployment  

## ⚙️ Local Development
```bash
# install dependencies
bundle install

# run locally
bundle exec jekyll serve
# site will be available at http://localhost:4000
```

## 🚀 Deployment
Push to the `main` branch — GitHub Pages will automatically build and deploy the site.

## 📂 Project Structure
```
repo-root/
├── _config.yml
├── Gemfile / Gemfile.lock
├── Dockerfile
├── LICENSE
├── README.md
├── _data/
│   ├── coauthors.yml
│   ├── cv.yml
│   ├── socials.yml
│   ├── venues.yml
├── _includes/
│   ├── audio.liquid
│   ├── citation.liquid
│   ├── figure.liquid
│   ├── footer.liquid
│   ├── header.liquid
│   └── pagination.liquid
├── _layouts/
├── _posts/
├── _projects/
├── _sass/
│   └── _themes.scss
├── _pages/
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── pdf/
└── _bibliography/
    └── papers.bib
```

## 🧩 Configuration

Edit `_config.yml` for site settings, title, description, and URLs.

Modify `_sass/_themes.scss` for color schemes or typography.

Add content in `_posts/` or `_projects/`.

**License:** MIT  
**Build:** Jekyll + GitHub Pages


