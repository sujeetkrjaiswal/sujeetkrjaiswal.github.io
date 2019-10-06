
export interface IListEntry {
  id: string,
  name: string,
  subtext?: string,
  icon?: any | null,
  url?: string | null,
  target: '_blank' | '_self'
  children?: null | IListEntry[]
}
const listEntries: IListEntry[] = [{
  icon: null,
  id: 'list-cv',
  name: 'CV',
  url: null,
  target: '_self',
  children: [{
    id: 'list-cv-summary',
    name: 'Summary',
    url: '/#summary',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-lang',
    name: 'Tech',
    url: '/#tech',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-skills',
    name: 'Skills',
    url: '/#skills',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-experience',
    name: 'Exprience',
    url: '/#experience',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-project',
    name: 'Projects',
    url: '/#projects',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-awards',
    name: 'Awards',
    url: '/#awards',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-certs',
    name: 'Certifications',
    url: '/#certifications',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-scores',
    name: 'Scores',
    url: '/#scores',
    icon: null,
    target: '_self',
  }, {
    id: 'list-cv-edu',
    name: 'Education',
    url: '/#education',
    icon: null,
    target: '_self',
  }],
}, {
  icon: null,
  id: 'personal-projects',
  name: 'Personal Projects',
  url: null,
  target: '_self',
  children: [{
    icon: null,
    id: 'pokedex',
    name: 'Pokedex',
    subtext: 'Pokemon Explorer',
    url: 'https://pokedex.sujeetjaiswal.com',
    target: '_blank',
  }, {
    icon: null,
    id: 'wiki',
    name: 'Wiki',
    subtext: 'Readable Wikipedia',
    url: 'https://wiki.sujeetjaiswal.com',
    target: '_blank',
  }, {
    icon: null,
    id: 'organizer',
    name: 'Organizer',
    subtext: 'Planner App',
    url: 'https://github.sujeetjaiswal.com/organizer/#/',
    target: '_blank',
  }, {
    icon: null,
    id: 'autotyping',
    name: 'Auto Typing',
    subtext: 'Type like hacker',
    url: 'http://github.sujeetjaiswal.com/AutoTyping/',
    target: '_blank',
  }, {
    icon: null,
    id: 'canvas-constellation',
    name: 'Constellation',
    subtext: 'Canvas Effects',
    url: 'http://github.sujeetjaiswal.com/canvas-effects/ConstellationEffect/index.html',
    target: '_blank',
  }, {
    icon: null,
    id: 'canvas-fireworks',
    name: 'Fireworks',
    subtext: 'Canvas Effects',
    url: 'http://github.sujeetjaiswal.com/canvas-effects/Fireworks/index.html',
    target: '_blank',
  }, {
    icon: null,
    id: 'canvas-diwali-wish',
    name: 'Diwali Wish 2016',
    subtext: 'Canvas Effects',
    url: 'http://github.sujeetjaiswal.com/canvas-effects/Diwali2016/index.html',
    target: '_blank',
  }],
}]

export default listEntries
