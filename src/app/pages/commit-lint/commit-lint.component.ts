import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-commit-lint',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './commit-lint.component.html',
  styleUrl: './commit-lint.component.css',
})
export class CommitLintComponent {
  public hook: string = `#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"`;

  public commitlintConfig: string = `// commitlint.config.js
module.exports = { extends: ['@commitlint/config-conventional'] };`;

  public commitizenSetup: string = `npm i -D commitizen cz-conventional-changelog

// package.json
{
  "config": { "commitizen": { "path": "cz-conventional-changelog" } }
}

npx cz`;
}

