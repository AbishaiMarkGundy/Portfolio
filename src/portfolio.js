const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AbishaiMarkGundy.github.io',
  title: 'AMG',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abishai Mark Gundy',
  role: 'Full-Stack Developer',
  description:
    'I am  currently a software developer at General Motors. This website highlights my skillset and a few of the fantastic projects I have worked on. Please feel free to reach out to me! ',
  resume: './Abishai_MarkGundy Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/abishaimg',
    github: 'https://github.com/AbishaiMarkGundy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PintOS Project',
    description:
      'Built out a full Linux-based OS from Stanford\'s PintOS shell code. Fully Implemented Operating System, built from Shell of Stanford\'s PintOS. Implemented Virtual Memory, Filesystem, Multi-Threaded Processes, User/Kernel Modes, Threads, and created custom linux commands.',
    stack: ['Assembly', 'x86', 'Linux'],
    sourceCode: 'https://github.com/AbishaiMarkGundy/PintOS.git',
    //livePreview: 'https://github.com',
  },
  {
    name: 'Web Spider & PageRank',
    description:
      'Created a tool to web-scrape and build a corpora of text documents given a domain. Creates a custom PageRank-based search engine for the corpora retrieved.',
    stack: ['Java'],
    sourceCode: 'https://github.com/AbishaiMarkGundy/WebSpider-PageRank',
    //livePreview: 'https://github.com',
  },
  {
    name: 'AutonomousRacing F1Tenth Car',
    description:
      'Created a F1Tenth racecar that can automatically navigate any building it is placed in. Automatically senses objects and performs obstacle avoidance. Implemented speed control, turning, and obstacle detection.',
    stack: ['Java', 'Python', 'C++'],
    sourceCode: 'https://github.com/AbishaiMarkGundy/AutonomousRacingF1Tenth.git',
    //livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'C/C#/C++',
  'AWS',
  'MongoDB',
  'Google Guice',
  'HTML',
  'CSS',
  'SQL',
  'JavaScript',
  'Flutter',
  'React',
  'Git',
  'CADD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abishai.markgundy@gmail.com',
}

export { header, about, projects, skills, contact }
