import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { MoviesDirectorComponent } from './components/movies-director/movies-director.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesDetailComponent } from './components/series-detail/series-detail.component';
import { GenresComponent } from './components/genres/genres.component';
import { BrowseComponent } from './components/browse/browse.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'auth/:option', component: LoginFormComponent },
  { path: 'api/movies', component: MoviesComponent },
  { path: 'api/movies/genre/:genre', component: GenresComponent},
  { path: 'api/movies/:id', component: MoviesDetailComponent},
  { path: 'api/movies/director/:id', component: MoviesDirectorComponent},
  { path: 'api/series', component: SeriesComponent },
  { path: 'api/series/genre/:genre', component: GenresComponent },
  { path: 'api/series/:id', component: SeriesDetailComponent },
  { path: '**', redirectTo: '' }
];
