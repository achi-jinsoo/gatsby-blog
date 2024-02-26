export default {
  /**
   * basic Information
   */
  title: `achi-blog.com`,
  description: `개발자 진수`,
  language: `ko`,
  siteUrl: `https://achi-blog.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `achi-jinsoo/gatsby-blog`, 
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `한진수`,
    nickname: `진수`,
    stack: ['Frontend', 'React', 'HTML/CSS'],
    bio: {
      email: `jshan77777@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Gachon Univ. Fashion Design (2014.03-2023.08)',
    },
    social: {
      github: `https://github.com/achi-jinsoo`,
      linkedIn: ``,
      resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      tistory: '',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: '개발, 늦었다고 생각할 때가...',
      category: 'featured-develop',
    },
    {
      title: 'Tech Review',
      category: 'featured-tech',
    },
    {
      title: 'I love it.',
      category: 'featured-love',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2020.08.04 - NOW',
      en: 'gredit',
      kr: '(주)그래딧',
      info: 'Web Designer',
      link: '',
    },
    {
      category: 'Career',
      date: '2020.01.04 - NOW',
      en: 'WETWET',
      kr: '웨트웨트',
      info: 'Shopping Mall - aiden Made',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.09 - 2024,02',
      en: 'EZEN Computer Academy',
      kr: '이젠 컴퓨터 아카데미',
      info: 'UI/UX Web, App design(figma) & Front-End(react.js) 과정 수료',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['Html/Css', 'Javascript', 'Jquery'],
      thumbnailUrl: 'port_1.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/achi-jinsoo/portfolid24',
        demo: 'http://aidenhan.com',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
