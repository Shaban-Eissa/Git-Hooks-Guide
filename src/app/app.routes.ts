import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', loadComponent: () => import('./pages/overview/overview.component').then(m => m.OverviewComponent) },
  { path: 'pre-commit', loadComponent: () => import('./pages/pre-commit/pre-commit.component').then(m => m.PreCommitComponent) },
  { path: 'post-checkout', loadComponent: () => import('./pages/post-checkout/post-checkout.component').then(m => m.PostCheckoutComponent) },
  { path: 'pre-push', loadComponent: () => import('./pages/pre-push/pre-push.component').then(m => m.PrePushComponent) },
  { path: 'lint-staged', loadComponent: () => import('./pages/lint-staged/lint-staged.component').then(m => m.LintStagedComponent) },
  { path: 'commit-lint', loadComponent: () => import('./pages/commit-lint/commit-lint.component').then(m => m.CommitLintComponent) },
  { path: 'conventional-commits', loadComponent: () => import('./pages/conventional-commits/conventional-commits.component').then(m => m.ConventionalCommitsComponent) },

];
