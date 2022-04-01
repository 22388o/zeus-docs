# Zeus Documentation

Zeus is a mobile bitcoin wallet that makes bitcoin payments simple, gives users complete control of their finances, and allows more advanced users to manage their Lightning nodes from the palm of their hand. This documentation site covers in detail how to use Zeus as a user, a developer and how to contribute to improving Zeus as either.

Zeus is available to download on the [Google play store](https://play.google.com/store/apps/details?id=app.zeusln.zeus), [Apple app store](https://apps.apple.com/us/app/zeus-ln/id1456038895) and [F-Droid](https://f-droid.org/packages/app.zeusln.zeus/).

If you are having trouble using Zeus, would like to contribute to the project, or are just interested in learning more, you can read these docs, reach our community on [Telegram](https://t.me/zeusLN), keep up with us on [Twitter](https://twitter.com/ZeusLN), join our [developer slack](https://zeusln.slack.com/join/shared_invite/zt-qw205nqa-o4VJJC0zPI7HiSfToZGoVw#/) or open an issue on [GitHub](https://github.com/ZeusLN/zeus).

Please check out our [official website](https://zeusln.app/) for more details.

### Build the documentation locally

In order to build the website locally, you'll need [Node.js](https://nodejs.org/) >= 12.16 (or basically the latest LTS version).

The setup is straight forward:

```bash
# Install dependencies
npm install

# Serve locally (by default on port 8080)
npm run docs:dev
```

### Text Highlights

There are [three types of text highlights](https://vuepress.vuejs.org/guide/markdown.html#custom-containers) that can be used to display different colored boxes.

A green box displaying a friendly tip:

```md
:::tip
foo
:::
```

A yellow box with a cautious warning:

```md
:::warning
foo
:::
```

A red box with a clear danger, you can also add a title `foo` to any container:

```md
:::danger foo
bar
:::
```

### Embedding images

To add an image you will need to add it to zeus-docs/docs/.vuepress/public/img directory and reference in the documentation like so:

```md
![IMAGE ALT TEXT HERE](.img/DOCS_SECTION_HERE/IMAGE_NAME_HERE)
```

### Embedding YouTube videos

To add a YouTube video with a preview, you can so so by linking to it like this:

```md
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/mqdefault.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

Note that the link item need to be a preview image (either from YouTube or a custom one) to result in an embedded video.
