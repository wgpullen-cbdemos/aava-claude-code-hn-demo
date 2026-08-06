# vue-hn-clone (AAVA + Claude Code demo fork)

This app is a Vue.js-based clone of [Hacker News](https://hn.ycombinator.com).

> Forked from `wgpullen-cbdemos/hackers-WesTest` as a clean, repeatable demo target for an
> AAVA + Claude Code closed-loop agentic SDLC demo. `main` intentionally keeps a live bug
> (`src/components/ListItem.vue` hardcodes "2 hours ago" as the submission time for every
> post). Demo runs land their fix in a disposable branch/PR — `main` is never merged into,
> so the repo is ready to demo again immediately.

## Objective

It is helpful to have a go-to app for demoing new tools - this is mine. It's nice to have an app that is more than just a hello world, so I tried to create one that mirrors something usable to some degree.

## Tech info

- [Vue.js](https://vuejs.org/) - The frontend web framework used to build the site
- [HackerNews/API](https://github.com/HackerNews/API) - Source of data
- [Bulma](https://bulma.io) (Specifically [Buefy](https://buefy.org)) - the CSS framework I've used

This app is far from an ideal architecture - it is currently all client-side rendered and re-pulls all data on page change.
In the future I may add [vuex](https://vuex.vuejs.org/) so it doesn't query the API every single page change.

Ideally you would use server-side rendering like [this example](https://github.com/vuejs/vue-hackernews-2.0) does (in fact, that app is all around better).
But to make testing certain tools easier, being strictly client-side rendered is preferable.

## Deployment requirements

Optionally set the `VUE_APP_FM_KEY` environment variable to your CloudBees (Rox) SDK key before
building — `scripts/gen-config.js` writes it into `public/config.js` at build time. Falls back to
a working demo key if unset, so `npm install && npm run build` works with zero setup.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


<!-- vercel git-integration test commit 2026-08-06T03:41:42Z -->
