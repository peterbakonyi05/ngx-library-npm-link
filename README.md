# NgxLibraryNpmLink

See `@angular/cli` GitHub issue: https://github.com/angular/angular-cli/issues/11301

Extra path mapping for all node modules:
```
"*": [
  "node_modules/*"
]
```

When having a library (`ngx-test` in this case) and there the above tsconfig path mapping, `npm start` is unable to resolve the library.

## Why is the extra mapping required?
There can be other angular libraries that need to be `npm link`ed during development because they are not in the same repo.

In that case, the common dependencies (`@angular`, `@ngrx` etc...) need to be resolved from the root `node_modules` folder
to avoid bundling and resolving the dependencies from different locations.

## How to replicate?
```
npm install
npm run build ngx-test
npm start
```

`npm start` will result in the following error:
```
ERROR in ./src/app/app.module.tsModule not found:
Error: Can't resolve 'ngx-test' in 'C:\Github\ngx-library-npm-link\src\app'
```

## Building with `ngc` works
When building directly with `ngc`, it works as expected, no error, so it seems to be a webpack problem.

```
node_modules/.bin/ngc ./src/tsconfig.app.json
```

