// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resources",
          title: "Resources",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-filterrag-has-been-accepted-at-t2fm-workshop-iccv-2025",
          title: '🎉 Our paper FilterRAG has been accepted at T2FM Workshop, ICCV 2025! 🔍✨...',
          description: "",
          section: "News",},{id: "news-selected-for-the-iccv-2025-broadening-participation-program-excited-to-engage-with-the-cv-community",
          title: '🎉 Selected for the ICCV 2025 Broadening Participation program. Excited to engage with...',
          description: "",
          section: "News",},{id: "news-our-paper-fedmentor-is-accepted-for-presentation-at-the-genai4health-workshop-neurips-2025-the-second-workshop-on-genai-for-health-potential-trust-and-policy-compliance",
          title: '🎉 Our paper FedMentor is accepted for presentation at the GenAI4Health Workshop, NeurIPS...',
          description: "",
          section: "News",},{id: "news-excited-to-receive-a-travel-grant-from-the-genai4health-workshop-organizers-to-present-fedmentor-at-neurips-2025",
          title: '✨ Excited to receive a travel grant from the GenAI4Health Workshop organizers to...',
          description: "",
          section: "News",},{id: "news-our-paper-fedmentor-has-been-accepted-for-poster-presentation-at-the-trusted-ai-symposium-hosted-by-the-amazon-agi-team",
          title: '🎉 Our paper FedMentor has been accepted for poster presentation at the Trusted...',
          description: "",
          section: "News",},{id: "news-our-paper-multimodal-unlearning-survey-has-been-online",
          title: '📢 Our paper Multimodal Unlearning Survey has been online.',
          description: "",
          section: "News",},{id: "news-️-awesome-academic-nlp-research-labs-worldwide-released-a-curated-list-of-academic-nlp-research-labs-worldwide",
          title: '🏛️ Awesome Academic NLP Research Labs Worldwide released — a curated list of...',
          description: "",
          section: "News",},{id: "news-released-the-repository-and-project-page-for-our-survey-paper-on-multimodal-unlearning",
          title: '🚀 Released the repository and project page for our survey paper on Multimodal...',
          description: "",
          section: "News",},{id: "news-our-multimodal-unlearning-survey-has-been-accepted-as-findings-of-acl-2026",
          title: '🎉 Our Multimodal Unlearning Survey has been accepted as Findings of ACL 2026....',
          description: "",
          section: "News",},{id: "news-our-paper-croissant-baker-is-now-available-on-arxiv-with-code-released-on-github",
          title: '🥐 Our paper Croissant Baker is now available on arXiv, with code released...',
          description: "",
          section: "News",},{id: "news-released-academic-research-opportunities-for-international-students-a-curated-collection-of-global-research-mentorship-programs-fellowships-internships-and-predoctoral-opportunities",
          title: '🌍 Released Academic Research Opportunities for International Students — a curated collection of...',
          description: "",
          section: "News",},{id: "news-our-paper-pluralis-v0-1-introducing-a-multimodal-benchmark-for-multicultural-ai-safety-is-now-available-on-arxiv-presented-at-the-google-booth-icml-2026-posts-x-linkedin",
          title: '🌍 Our paper Pluralis v0.1, introducing a multimodal benchmark for multicultural AI safety,...',
          description: "",
          section: "News",},{id: "news-featured-in-the-meet-llnl-interns-article-covering-my-summer-research-on-trustworthy-ai-for-scientific-discovery",
          title: '🔬 Featured in the Meet LLNL Interns article, covering my summer research on...',
          description: "",
          section: "News",},{id: "news-co-authored-the-last-translation-benchmark-a-community-built-dataset-designed-to-break-translation-models-with-reliable-evaluation-rules-check-it-out-here",
          title: '🌐 Co-authored the Last Translation Benchmark, a community-built dataset designed to break translation...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
