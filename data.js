const data = {
  pages: [
    {
      name: 'home',
      url: '/',
      opening: ` Hey, I’m Alex Spencer and I love building beautiful websites`,

      intro: `  I’m a junior front-end developer looking for a new role in an exciting company. 
          I focus on writing accessible HTML, using modern CSS practices and writing clean 
          JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
          whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
          and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
          I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
          you to check out my work.
        `,
      images: [
        {
          name: 'image-homepage-hero',
          src: {
            mobile: '/images/homepage/mobile/image-homepage-hero.jpg',
            tablet: '/images/homepage/tablet/image-homepage-hero.jpg',
            desktop: '/images/homepage/desktop/image-homepage-hero.jpg',

            large: {
              mobile: '/images/homepage/mobile/image-homepage-hero@2x.jpg',
              tablet: '/images/homepage/tablet/image-homepage-hero@2x.jpg',
              desktop: '/images/homepage/desktop/image-homepage-hero@2x.jpg',
            },
          },
          sizes: {
            mobile: {
              width: '311',
              height: '271',
            },
            tablet: {
              width: '688',
              height: '600',
            },
            desktop: {
              width: '1110',
              height: '600',
            },
          },
        },
        {
          name: 'image-homepage-profile',
          src: {
            mobile: '/images/homepage/mobile/image-homepage-profile.jpg',
            tablet: '/images/homepage/tablet/image-homepage-profile.jpg',
            desktop: '/images/homepage/desktop/image-homepage-profile.jpg',

            large: {
              mobile: '/images/homepage/mobile/image-homepage-profile@2x.jpg',
              tablet: '/images/homepage/tablet/image-homepage-profile@2x.jpg',
              desktop: '/images/homepage/desktop/image-homepage-profile@2x.jpg',
            },
          },

          sizes: {
            mobile: {
              width: '311',
              height: '346',
            },
            tablet: {
              width: '281',
              height: '600',
            },
            desktop: {
              width: '540',
              height: '600',
            },
          },
        },
        {
          name: 'down-arrows',
          src: '/images/icons/down-arrows.svg',
        },
      ],
    },
    {
      name: 'portfolio',
      url: '/portfolio',
      projects: [
        {
          name: 'manage',
          desc: `This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the testimonial slider.`,
          categories: ['interaction desing', 'front end development'],
          tags: ['html', 'css', 'js'],
          projectBackground: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
          images: [
            {
              name: 'image-manage-hero',
              src: {
                mobile: '/images/detail/mobile/image-manage-hero.jpg',
                tablet: '/images/detail/tablet/image-manage-hero.jpg',
                desktop: '/images/detail/desktop/image-manage-hero.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-manage-hero@2x.jpg',
                  tablet: '/images/detail/tablet/image-manage-hero@2x.jpg',
                  desktop: '/images/detail/desktop/image-manage-hero@2x.jpg',
                },
              },
            },
            {
              name: 'image-manage-preview-1',
              src: {
                mobile: '/images/detail/mobile/image-manage-preview-1.jpg',
                tablet: '/images/detail/tablet/image-manage-preview-1.jpg',
                desktop: '/images/detail/desktop/image-manage-preview-1.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-manage-preview-1@2x.jpg',
                  tablet: '/images/detail/tablet/image-manage-preview-1@2x.jpg',
                  desktop:
                    '/images/detail/desktop/image-manage-preview-1@2x.jpg',
                },
              },
            },
            {
              name: 'image-manage-preview-2',
              src: {
                mobile: '/images/detail/mobile/image-manage-preview-2.jpg',
                tablet: '/images/detail/tablet/image-manage-preview-2.jpg',
                desktop: '/images/detail/desktop/image-manage-preview-2.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-manage-preview-2@2x.jpg',
                  tablet: '/images/detail/tablet/image-manage-preview-2@2x.jpg',
                  desktop:
                    '/images/detail/desktop/image-manage-preview-2@2x.jpg',
                },
              },
            },
          ],
        },
        {
          name: 'bookmark',
          desc: `This project required me to build a fully responsive landing page to the designs provided. I 
        used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
        as the features section.`,
          categories: ['interaction desing', 'front end development'],
          tags: ['html', 'css', 'js'],
          projectBackground: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
          images: [
            {
              name: 'image-bookmark-hero',
              src: {
                mobile: '/images/detail/mobile/image-bookmark-hero.jpg',
                tablet: '/images/detail/tablet/image-bookmark-hero.jpg',
                desktop: '/images/detail/desktop/image-bookmark-hero.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-bookmark-hero@2x.jpg',
                  tablet: '/images/detail/tablet/image-bookmark-hero@2x.jpg',
                  desktop: '/images/detail/desktop/image-bookmark-hero@2x.jpg',
                },
              },
            },
            {
              name: 'image-bookmark-preview-1',
              src: {
                mobile: '/images/detail/mobile/image-bookmark-preview-1.jpg',
                tablet: '/images/detail/tablet/image-bookmark-preview-1.jpg',
                desktop: '/images/detail/desktop/image-bookmark-preview-1.jpg',

                large: {
                  mobile:
                    '/images/detail/mobile/image-bookmark-preview-1@2x.jpg',
                  tablet:
                    '/images/detail/tablet/image-bookmark-preview-1@2x.jpg',
                  desktop:
                    '/images/detail/desktop/image-bookmark-preview-1@2x.jpg',
                },
              },
            },
            {
              name: 'image-bookmark-preview-2',
              src: {
                mobile: '/images/detail/mobile/image-bookmark-preview-2.jpg',
                tablet: '/images/detail/tablet/image-bookmark-preview-2.jpg',
                desktop: '/images/detail/desktop/image-bookmark-preview-2.jpg',

                large: {
                  mobile:
                    '/images/detail/mobile/image-bookmark-preview-2@2x.jpg',
                  tablet:
                    '/images/detail/tablet/image-bookmark-preview-2@2x.jpg',
                  desktop:
                    '/images/detail/desktop/image-bookmark-preview-2@2x.jpg',
                },
              },
            },
          ],
        },
        {
          name: 'insure',
          desc: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
        landing page. The only JavaScript this project required was to enable the toggling of the 
        mobile navigation.`,
          categories: ['interaction desing', 'front end development'],
          tags: ['html', 'css', 'js'],
          projectBackground: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
          images: [
            {
              name: 'image-insure-hero',
              src: {
                mobile: '/images/detail/mobile/image-insure-hero.jpg',
                tablet: '/images/detail/tablet/image-insure-hero.jpg',
                desktop: '/images/detail/desktop/image-insure-hero.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-insure-hero@2x.jpg',
                  tablet: '/images/detail/tablet/image-insure-hero@2x.jpg',
                  desktop: '/images/detail/desktop/image-insure-hero@2x.jpg',
                },
              },
            },
            {
              name: 'image-insure-preview-1',
              src: {
                mobile: '/images/detail/mobile/image-insure-preview-1.jpg',
                tablet: '/images/detail/tablet/image-insure-preview-1.jpg',
                desktop: '/images/detail/desktop/image-insure-preview-1.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-insure-preview-1@2x.jpg',
                  tablet: '/images/detail/tablet/image-insure-preview-1@2x.jpg',
                  desktop:
                    '/images/detail/desktop/image-insure-preview-1@2x.jpg',
                },
              },
            },
            {
              name: 'image-insure-preview-2',
              src: {
                mobile: '/images/detail/mobile/image-insure-preview-2.jpg',
                tablet: '/images/detail/tablet/image-insure-preview-2.jpg',
                desktop: '/images/detail/desktop/image-insure-preview-2.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-insure-preview-2@2x.jpg',
                  tablet: '/images/detail/tablet/image-insure-preview-2@2x.jpg',
                  desktop:
                    '/images/detail/desktop/image-insure-preview-2@2x.jpg',
                },
              },
            },
          ],
        },
        {
          name: 'fylo',
          desc: `This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
        built it so that it was fully-responsive. I took a mobile-first approach and used modern 
        CSS like Flexbox and Grid for layout purposes.`,
          categories: ['interaction desing', 'front end development'],
          tags: ['html', 'css', 'js'],
          projectBackground: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
          images: [
            {
              name: 'image-fylo-hero',
              src: {
                mobile: '/images/detail/mobile/image-fylo-hero.jpg',
                tablet: '/images/detail/tablet/image-fylo-hero.jpg',
                desktop: '/images/detail/desktop/image-fylo-hero.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-fylo-hero@2x.jpg',
                  tablet: '/images/detail/tablet/image-fylo-hero@2x.jpg',
                  desktop: '/images/detail/desktop/image-fylo-hero@2x.jpg',
                },
              },
            },
            {
              name: 'image-fylo-preview-1',
              src: {
                mobile: '/images/detail/mobile/image-fylo-preview-1.jpg',
                tablet: '/images/detail/tablet/image-fylo-preview-1.jpg',
                desktop: '/images/detail/desktop/image-fylo-preview-1.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-fylo-preview-1@2x.jpg',
                  tablet: '/images/detail/tablet/image-fylo-preview-1@2x.jpg',
                  desktop: '/images/detail/desktop/image-fylo-preview-1@2x.jpg',
                },
              },
            },
            {
              name: 'image-fylo-preview-2',
              src: {
                mobile: '/images/detail/mobile/image-fylo-preview-2.jpg',
                tablet: '/images/detail/tablet/image-fylo-preview-2.jpg',
                desktop: '/images/detail/desktop/image-fylo-preview-2.jpg',

                large: {
                  mobile: '/images/detail/mobile/image-fylo-preview-2@2x.jpg',
                  tablet: '/images/detail/tablet/image-fylo-preview-2@2x.jpg',
                  desktop: '/images/detail/desktop/image-fylo-preview-2@2x.jpg',
                },
              },
            },
          ],
        },
      ],

      images: [
        {
          name: 'image-portfolio-manage',
          src: {
            mobile: '/images/portfolio/mobile/image-portfolio-manage.jpg',
            tablet: '/images/portfolio/tablet/image-portfolio-manage.jpg',
            desktop: '/images/portfolio/desktop/image-portfolio-manage.jpg',

            large: {
              mobile: '/images/portfolio/mobile/image-portfolio-manage@2x.jpg',
              tablet: '/images/portfolio/tablet/image-portfolio-manage@2x.jpg',
              desktop:
                '/images/portfolio/desktop/image-portfolio-manage@2x.jpg',
            },
          },
          desc: `This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the testimonial slider.`,
          title: 'manage',
        },
        {
          name: 'image-portfolio-bookmark',
          src: {
            mobile: '/images/portfolio/mobile/image-portfolio-bookmark.jpg',
            tablet: '/images/portfolio/tablet/image-portfolio-bookmark.jpg',
            desktop: '/images/portfolio/desktop/image-portfolio-bookmark.jpg',

            large: {
              mobile:
                '/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg',
              tablet:
                '/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg',
              desktop:
                '/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg',
            },
          },
          desc: `This project required me to build a fully responsive landing page to the designs provided. I 
          used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
          as the features section.`,
          title: 'bookmark',
        },
        {
          name: 'image-portfolio-insure',
          src: {
            mobile: '/images/portfolio/mobile/image-portfolio-insure.jpg',
            tablet: '/images/portfolio/tablet/image-portfolio-insure.jpg',
            desktop: '/images/portfolio/desktop/image-portfolio-insure.jpg',

            large: {
              mobile: '/images/portfolio/mobile/image-portfolio-insure@2x.jpg',
              tablet: '/images/portfolio/tablet/image-portfolio-insure@2x.jpg',
              desktop:
                '/images/portfolio/desktop/image-portfolio-insure@2x.jpg',
            },
          },
          desc: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
          landing page. The only JavaScript this project required was to enable the toggling of the 
          mobile navigation.`,
          title: 'insure',
        },
        {
          name: 'image-portfolio-fylo',
          src: {
            mobile: '/images/portfolio/mobile/image-portfolio-fylo.jpg',
            tablet: '/images/portfolio/tablet/image-portfolio-fylo.jpg',
            desktop: '/images/portfolio/desktop/image-portfolio-fylo.jpg',

            large: {
              mobile: '/images/portfolio/mobile/image-portfolio-fylo@2x.jpg',
              tablet: '/images/portfolio/tablet/image-portfolio-fylo@2x.jpg',
              desktop: '/images/portfolio/desktop/image-portfolio-fylo@2x.jpg',
            },
          },
          desc: `This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
          built it so that it was fully-responsive. I took a mobile-first approach and used modern 
          CSS like Flexbox and Grid for layout purposes.`,
          title: 'fylo',
        },
      ],
    },
    {
      name: 'contact me',
      url: '/contact',
      opening: 'get in touch',
      para: `I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.`,
      images: [
        {
          name: 'github',
          src: '/images/icons/github.svg',
        },
        {
          name: 'twitter',
          src: '/images/icons/twitter.svg',
        },
        {
          name: 'linkedin',
          src: '/images/icons/linkedin.svg',
        },
      ],
      formHeading: 'contact me',
    },
  ],
};

export { data };

export const getPage = (pageName) => {
  const { pages } = data;
  return pages.filter((page) => page.name === pageName);
};
export const getProjects = () => {
  const { pages } = data;
  const [portfolioPage] = pages.filter((page) => page.name === 'portfolio');
  return portfolioPage.projects;
};

export const getProjectPage = (id) => {
  const projects = getProjects();
  const [requestedProject] = projects.filter((project) => project.name === id);
  return requestedProject;
};
