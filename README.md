## Replicate this bug

- Clone this repo
- Run `npm i`
- Run `npm run build`
- Error in console:

```
> vanilla-test@1.0.0 build /Users/barrymcgee/projects/vanilla-test
> node-sass ./src/sass/cookie-policy.scss --include-path node_modules --output build/css

{
  "status": 1,
  "file": "/Users/barrymcgee/projects/vanilla-test/node_modules/vanilla-framework/scss/_patterns_icons.scss",
  "line": 48,
  "column": 11,
  "message": "\"%icon\" failed to @extend \"%vf-hide-text\".\nThe selector \"%vf-hide-text\" was not found.\nUse \"@extend %vf-hide-text !optional\" if the extend should be able to fail.",
  "formatted": "Error: \"%icon\" failed to @extend \"%vf-hide-text\".\n       The selector \"%vf-hide-text\" was not found.\nUse \"@extend %vf-hide-text !optional\" if the extend should be able to fail.\n        on line 48 of node_modules/vanilla-framework/scss/_patterns_icons.scss\n>>   @extend %vf-hide-text;\n\n   ----------^\n"
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vanilla-test@1.0.0 build: `node-sass ./src/sass/cookie-policy.scss --include-path node_modules --output build/css`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vanilla-test@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/barrymcgee/.npm/_logs/2019-01-23T11_40_10_554Z-debug.log

```
