import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-lint-staged',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './lint-staged.component.html',
  styleUrl: './lint-staged.component.css',
})
export class LintStagedComponent {
  public install: string = 'npm i -D lint-staged husky';
  public config: string = `{
  "*.ts": [
    "node scripts/remove-unused-vars.js",
    "prettier --write",
    "eslint --fix --config .eslintrc.json"
  ],
  "*.html": [
    "prettier --write",
    "eslint --fix --config .eslintrc.json"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
  `;
}

