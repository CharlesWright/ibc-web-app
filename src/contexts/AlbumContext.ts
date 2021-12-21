import { createContext } from 'react';

import { Album } from '../types/Album';

export interface IAlbumContext {
  albums: Array<Album>;
}

export const AlbumContext = createContext<IAlbumContext>({} as IAlbumContext);