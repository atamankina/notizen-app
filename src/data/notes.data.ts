import { Note } from '../types/notes.type'


export const notesData: Note[] = [
    {
      title: 'Lorem ipsum 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus.',
      user: 'Galina',
      date: new Date(Date.now() - 3600 * 1000),
      categories: ['Büro', 'Haushalt'],
      id: 1
    }, {
      title: 'Sed libero 2',
      content: 'Eget mi proin sed libero enim sed faucibus turpis in. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Imperdiet proin fermentum leo vel orci porta. Sed nisi lacus sed viverra tellus. Nec feugiat in fermentum posuere urna nec tincidunt. Massa sapien faucibus et molestie. Non sodales neque sodales ut etiam sit.',
      user: 'Galya',
      date: new Date(Date.now() - 24 * 3600 * 1000),
      categories: ['Büro'],
      id: 2
    }, {
      title: 'Dictum non consectetur 3',
      content: 'Dictum non consectetur a erat. At augue eget arcu dictum. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
      user: 'Galina',
      date: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      categories: ['Haushalt'],
      id: 3
    }, {
      title: 'Varius quam quisque 4',
      content: 'Risus quis varius quam quisque id diam vel.',
      user: 'Galya',
      date: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      categories: ['Freizeit'],
      id: 4
    },
    {
      title: 'Vitae purus 5',
      content: 'Vitae purus faucibus ornare suspendisse sed nisi lacus. Cursus vitae congue mauris rhoncus.',
      user: 'Galya',
      date: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
      categories: ['Freizeit', 'Haushalt'],
      id: 5
    }
  ]