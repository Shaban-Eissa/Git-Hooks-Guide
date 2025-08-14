import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent { }

