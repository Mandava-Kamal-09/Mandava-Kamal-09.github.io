// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-insights",
          title: "Research Insights",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Research publications and presentations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Computational modeling and data analysis projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected computational modeling and data analysis repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Academic curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-project-initiation-fibrinet-and-mechanistic-modeling",
        
          title: "Project Initiation: FibriNet and Mechanistic Modeling",
        
        description: "An introduction to my current work in computational biophysics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/research-initiation/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-accepted-to-present-dynamical-degradation-of-fibrin-networks-at-dynamics-days-us-2026-in-tucson-az",
          title: 'Accepted to present “Dynamical Degradation of Fibrin Networks” at Dynamics Days US 2026...',
          description: "",
          section: "News",},{id: "projects-fibrinet",
          title: 'FibriNet',
          description: "Agent-based computational model for simulating fibrinolysis using spring-mass network dynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fibrinet/";
            },},{id: "projects-fibrinolysis-regression-analysis",
          title: 'Fibrinolysis Regression Analysis',
          description: "Statistical analysis identifying chemical factors affecting clot degradation rates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fibrinolysis_regression/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6D%61%6E%64%61%76%61@%75%63%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Mandava-Kamal-09", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kamal-mandava", "_blank");
        },
      },{
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
