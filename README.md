# RMS Open Letter Signatories Highlighter

A Chrome and Firefox extension to add a notice to repositories from anyone who has signed the RMS Open Letter of support.

![Screenshot](./screenshot.png)

## Installation
Clone the repository and install the extension to your browser following the instructions:
* [Chrome](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)
* [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing)


## Manually Update List of Signatories

You can use [the Python spider](https://github.com/aaronbassett/rms-letter-spider) to scrape an updated list of signatories at any time. This list should replace the `githubUsernames` list in `content.js`
