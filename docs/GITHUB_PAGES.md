# GitHub Pages Deployment

EmberFlow369 v0.5-alpha publishes the interactive React dashboard from `apps/dashboard` to GitHub Pages.

## Live URL

When GitHub Pages is enabled, the dashboard should be available at:

```text
https://michaelwave369.github.io/EmberFlow369/
```

## Required repository setting

In the GitHub repository, open:

```text
Settings -> Pages -> Build and deployment -> Source
```

Set the source to:

```text
GitHub Actions
```

After that, pushes to `main` should run `.github/workflows/pages.yml` and deploy the dashboard artifact.

## What the Pages workflow does

The workflow:

1. checks out the repository,
2. sets up Node 20,
3. installs root dependencies,
4. installs dashboard dependencies,
5. runs `npm run dashboard:build`,
6. uploads `apps/dashboard/dist`,
7. deploys that folder to GitHub Pages.

## Local verification

Before relying on the Pages deploy, run:

```bash
npm install
npm --prefix apps/dashboard install
npm run dashboard:build
npm run dashboard:preview
```

## Safety boundary

The GitHub Pages site is still a mock-data prototype. It is not an official emergency alerting system, evacuation-order system, disaster prediction service, or replacement for local responders. Official life-safety instructions must always override dashboard suggestions.
