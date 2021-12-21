import {
    Home as HomeIcon,
    PeopleOutline as BandIcon,
    Person as PersonIcon,
    LibraryMusic as MusicIcon,
    MusicNote as SongIcon,
    Help as HelpIcon,
    Album as AlbumIcon,
  } from '@mui/icons-material';
import { PageContent } from '../components/PageContent';
import AlbumsPage from '../pages/AlbumsPage';
import AudioPage from '../pages/AudioPage';
import { Home } from '../pages/Home';
import { Route } from '../types/Route';
  
  const routes: Array<Route> = [
    {
      key: 'router-home',
      title: 'Home',
      description: 'Home',
      component: Home,
      path: '/',
      isEnabled: true,
      isVisible: true,
      icon: HomeIcon,
      appendDivider: true,
    },    
    {
      key: 'router-who-are-they',      
      title: 'Who are they‽',
      description: 'Who is in the band⁈',
      path: '/who/are/they‽',
      isEnabled: true,
      isVisible: true,
      icon: BandIcon,
    },
    {
      key: 'router-why-are-they',
      title: 'Why are they‽',
      description: 'Why does this even exist⁈',
      path: '/why/are/they‽',
      isEnabled: true,
      isVisible: true,
      icon: HelpIcon,     
    },
    {
      key: 'router-the-music',
      title: 'The Music',
      description: 'The Music',
      isEnabled: true,
      isVisible: true,
      expanded: true,
      icon: MusicIcon,
      subRoutes: [
        {
          key: 'the-albums',
          component: AlbumsPage,
          title: 'The Albums',
          description: 'The Albums',
          path: '/the/albums',
          isEnabled: true,
          isVisible: true,
          icon: AlbumIcon,
        },
        {
          key: 'the-songs',
          component: AudioPage,
          title: 'The Songs',
          description: 'The Songs',
          path: '/the/songs',
          isEnabled: true,
          isVisible: true,
          icon: SongIcon,
        },
        {
          key: 'the-people',
          component: PageContent,
          title: 'The People',
          description: 'The People',
          path: '/the/people',
          isEnabled: true,
          isVisible: true,
          icon: PersonIcon,
        },
      ],
    },
    {
      key: 'router-content',
      component: PageContent,
      title: '',
      description: '',
      path: '/the/content?name={name}',
      isEnabled: true,
      isVisible: false,
      icon: undefined
    }
  ];
  
  export default routes;