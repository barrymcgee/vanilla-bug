## Replicate this bug

- Clone this repo
- Run `npm i`
- Run `gulp build`
- Error in console:

```
Error in plugin "sass"
Message:
    node_modules/vanilla-framework/scss/_patterns_icons.scss
Error: "%icon" failed to @extend "%vf-hide-text".
       The selector "%vf-hide-text" was not found.
       Use "@extend %vf-hide-text !optional" if the extend should be able to fail.
        on line 48 of node_modules/vanilla-framework/scss/_patterns_icons.scss
>>   @extend %vf-hide-text;

   ----------^

```
