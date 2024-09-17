import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavigationComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isConnected = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.checkConnection();
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  checkConnection(): void {
    const user = localStorage.getItem('user');
    this.isConnected = !!user;  // Convertit en booléen
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('user');
    this.isConnected = false;
    this.router.navigate(['/']);  // Redirige l'utilisateur vers la page d'accueil
  }



}
