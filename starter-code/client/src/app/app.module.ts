import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { MovieService} from './services/movie.service';
import { SerieService } from './services/serie.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { TopPageComponent } from './components/top-page/top-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { SeriesDetailComponent } from './components/series-detail/series-detail.component';
import { GenresComponent } from './components/genres/genres.component';
import { MoviesDirectorComponent } from './components/movies-director/movies-director.component';
import { BrowseComponent } from './components/browse/browse.component';
import { MyPipePipe } from './components/my-pipe.pipe';
import { UserService } from './services/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import { YearComponent } from './components/year/year.component';
import { SeasonComponent } from './components/season/season.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TopPageComponent,
    FooterPageComponent,
    HomePageComponent,
    MoviesComponent,
    SeriesComponent,
    MoviesDetailComponent,
    SeriesDetailComponent,
    GenresComponent,
    MoviesDirectorComponent,
    BrowseComponent,
    ProfileComponent,
    TitleComponent,
    YearComponent,
    ProfileComponent,
    SeasonComponent,
    MyPipePipe
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, MovieService, SerieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
