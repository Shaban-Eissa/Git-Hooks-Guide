import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-conventional-commits',
  imports: [NavComponent, FooterComponent],
  templateUrl: './conventional-commits.component.html',
  styleUrl: './conventional-commits.component.css'
})
export class ConventionalCommitsComponent {

}
