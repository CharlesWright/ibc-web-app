import { createContext } from 'react';

import { Song } from '../types/Song';

export interface ISongContext {
  songs: Array<Song>;
}

export const SongContext = createContext<ISongContext>({} as ISongContext);