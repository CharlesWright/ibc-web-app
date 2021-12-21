import { useEffect, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { AppClient } from './clients';
import { routes } from './config';
import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { PageContent } from './components/PageContent';
import { Album } from './types/Album';
import { Song } from './types/Song';
import axios from 'axios';
import { AlbumContext } from './contexts/AlbumContext';
import { AppContext, ThemeModeContext } from './contexts';
import { SongContext } from './contexts/SongContext';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME);
  const [albums, setAlbums] = useState<Array<Album>>([])
  const [songs, setSongs] = useState<Array<Song>>([])
  const appClient = new AppClient();

  async function fetchAlbums() {
    let response = await axios(
      'http://localhost:7071/api/albums'
    )
    let albums = await response.data
    setAlbums(albums)
  }

  async function fetchSongs() {
    let response = await axios(
      'http://localhost:7071/api/songs'
    )
    let songs = await response.data
    setSongs(songs)
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  useEffect(() => {
    fetchSongs()
  }, [])

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} path={route.path} component={route.component || PageContent} exact />
  );

  return (
    <AppContext.Provider value={appClient}>
      <AlbumContext.Provider value={{ albums }}>
        <SongContext.Provider value={{ songs }}>
          <ThemeModeContext.Provider value={themeMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Router>
                <Switch>
                  <Layout>
                    {routes.map((route: AppRoute) =>
                      route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
                    )}
                  </Layout>
                </Switch>
              </Router>
            </ThemeProvider>
          </ThemeModeContext.Provider>
        </SongContext.Provider>
      </AlbumContext.Provider>
    </AppContext.Provider>
  );
}

export default App;