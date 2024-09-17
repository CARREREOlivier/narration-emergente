import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AarComponent} from "./aar/aar.component";
import {LetsPlayComponent} from "./lets-play/lets-play.component";
import {FanFictionComponent} from "./fan-fiction/fan-fiction.component";
import {ConnexionComponent} from "./connexion/connexion.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aar', component: AarComponent },
  { path: 'lets-play', component: LetsPlayComponent },
  { path: 'fan-fiction', component: FanFictionComponent },
  { path: 'connexion', component: ConnexionComponent },
];
