import { Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistsComponent } from './components/artists/artists.component';

import { HomeComponent } from './components/home/home.component';
import { SourceArtistsComponent } from './components/source-artists/source-artists.component';
import { SourcesComponent } from './components/sources/sources.component';

export const GuestLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: ArtistsComponent,
    path: 'artists',
  },
  {
    component: ArtistComponent,
    path: 'artist/:id',
  },
  {
    component: SourceArtistsComponent,
    path: 'source-artists'
  },
  {
    component: SourcesComponent,
    path: 'sources/:id'
  },
];
