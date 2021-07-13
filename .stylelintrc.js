module.exports = {
  extends: "stylelint-config-standard",
  plugins:[
    "stylelint-declaration-strict-value",
    "stylelint-scss"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always-multi-line",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": null,
    "number-leading-zero": "never",
    "string-quotes": "single",
    "selector-pseudo-class-no-unknown": [true, {"ignorePseudoClasses": ["global"]}],
    "property-no-unknown": [true, {"ignoreProperties": ["composes"]}],
    "declaration-empty-line-before": null,
    "rule-empty-line-before": null,
    "selector-pseudo-element-colon-notation": "single",
    "selector-nested-pattern": "^&((:.*)|\\[|\\.sel)",

    "color-hex-case": "upper",
    "color-hex-length": "short",
    "color-named": "never",

    "no-duplicate-selectors": true,
    "no-descending-specificity": null,

    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    "value-keyword-case": null,

    "max-empty-lines": [1, {"ignore": ["comments"]}]
  },
}
