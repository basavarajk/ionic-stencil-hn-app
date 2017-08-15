module.exports = {
  "skipWaiting": true,
  "globDirectory": "www/",
  "globPatterns": [
    "**/*.{css,js,svg,json,ico,png,html}"
  ],
  "swDest": "www/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
