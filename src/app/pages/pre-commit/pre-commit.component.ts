import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-pre-commit',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './pre-commit.component.html',
  styleUrl: './pre-commit.component.css',
})
export class PreCommitComponent {
  public codePreCommitHook: string = `npx lint-staged`;

  public codeLintStagedConfig: string = `{
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
}`;
}

