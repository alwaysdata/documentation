# alwaysdata documentation

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]
![GitHub release (latest by date)](https://img.shields.io/github/v/release/gohugoio/hugo?label=hugo)
![GitHub issues](https://img.shields.io/github/issues/alwaysdata/documentation)
![Twitter Follow](https://img.shields.io/twitter/follow/alwaysdata?style=social)

***

This documentation is generated using the [Hugo][1] static site generator.

## Working on documentation

### Installing Hugo

Hugo can be installed in the current directory with:

```sh
make hugo
```

### Build

To build:

```sh
$ make
```

### Serve the content

To start the Hugo builtin dev server:

```sh
$ ./hugo serve
```

Point your browser to http://localhost:1313 to access the preview.

### Update the content

[Pages of documentation](https://help.alwaysdata.com) are located in the `content` directory. The [folder tree](#files-organization) represent the navigation structure. Pages are written in markdown, with a YAML or a TOML Front Matter for metadata.

### Adding new pages

When adding new pages, please take care of the [folder tree](#files-organization) to stay consistent with the overall documents architecture.

### i18n

Please keep in mind that:

1. Default language is English (EN)
2. The Documentation is available both in English (EN) and French (FR)
3. If you do *not* precise the locale, then the page is considered to be in English

You should create *both* version when creating a new content:

```sh
$ ./hugo new path/to/page.en.md
$ ./hugo new path/to/page.fr.md
```

⚠ Pay attention: all localized versions of a given page **must** have the same filename and must be in the same folder. You **only** have to update the extension to use the correct ISO locale (e.g. here above the extension `.en.md` becomes `.fr.md` for the french version).

If you write a page that is _not_ in English, you should add a `url` entry in the front headers to fill the localized page url.

## Redacting content

### Types of pages

When you create new pages, you should pass a [type][7] to start your page with a proper template, dedicated to the content you want to add.

```sh
$ ./hugo new --kind man new/section/_index.en.md
$ ./hugo new --kind man new/section/_index.fr.md
```

Available types are:

- `readme`: they only serve as introduction to a new section and should be used for `_index.[ln].md` files only
- `howto`: step by step guide to explain a given action/task
- `man`: concept page that explain ideas, concepts, and point to more details how-tos; they can be used for `_index.[ln].md` pages
- `faq`: QnA sections related to a given domain; they should not appear in menu

### Files organization

Files in the `content` folder are organized in [branches and leaf bundles][8]. Here's how you may keep your contents organized to stay consistent:

```
content
├── guides                                <-- A section
│   ├── _index.en.md                      <-- Section main page (aka chapter), en_US
│   └── _index.fr.md                      <-- Section main page, fr_FR
├── marketplace
│   ├── admin-panel_1click_app.en.jpg     <-- Screenshot usable in the chapter, en_US
|   ├── admin-panel_1click_app.fr.jpg     <-- Same screenshot, fr_FR version
|   ├── build-application-script          <-- A page (leaf) bundle
|   |   ├── images                        <-- Page images assets
│   │   │   ├── create-script.en.png      <-- Screenshot used in the page, en_US
|   |   |   └── create-script.fr.png      <-- Same screenshot, fr_FR version
│   │   ├── index.en.md                   <-- Page bundle content, en_US
|   |   └── index.fr.md                   <-- Page bundle content, fr_FR
│   ├── install-an-application.en.md      <-- A Page leaf unbundled, en_US
|   ├── install-an-application.fr.md      <-- Same Page leaf, fr_FR version
│   ├── _index.en.md                      <-- Section chapter page, en_US
|   └── _index.fr.md                      <-- Section chpater page, fr_FR
├── _index.en.md                          <-- Documentation Homepage, en_US
└── _index.fr.md                          <-- Documentation Homepage, fr_FR
```

- Each _Section_ should have a _chapter_ page in the form of an `_index.[ln].md` page.
- Pages (leafs) can be standalone (with a dedicated name), or bundled (in a named folder, and named `index.[ln].md`). You can bundle all pages if you want, but unless you need to add _assets_ to the page, you can shortname them and avoid the leaf folder.
- If you need to add assets to a page, you **must** bundle them, and place images in a `images` folder into the bundle.
- If you need to add assets to a section page (aka chapter), you **must** put them at the same level as the branch page.

### Files naming

Here's the conventions about files naming you have to follow:

- All filenames are **lowercase**
- Avoid whitespaces in the filenames, replace them with `-`
- If you need to namespace your files (like, for images), use `_` as a separator for namespaces (e.g. `admin-panel_add-domain`)
- Chapter pages are named `_index`
- Bundle pages are named `index`
- Leaf pages can be named as you wish until you follow above rules
- All filenames use a locale suffix, regardless of their type (e.g. `my-page.en.md` or `my-image.fr.png`)
- Localized versions of a given page **must** have the **same** filename, with only the locale suffix changed

### Available shortcodes

You can extend the commonmark (markdown) syntax by using shortcodes that will render custom HTML in your page.

#### Images: `fig`

To add page/bundle images into your pages, use the `fig` shortcode:

```
{{< fig "[url]" ("[desc]") >}}
```

The `url` parameter in mandatory and refer to the image path relatively to the markdown document. I.e. to include an image in the `images` folder of the page bundle, use the following syntax:

```
{{< fig "images/my-image.en.png" >}}
```

The second parameter contains a caption for the image an is optional.

The shortcode will render a `<figure>` HTML tag.

#### Permalinks: `ref`

To link to another page of the documentation, use the `ref` shortcode:

```
{{< ref "pagename" >}}
```

I.e. to link the _Install an application_ page in the _Marketplace_ section, use:

```
[Install an application]({{< ref "marketplace/install-an-application" >}})
```

The `pagename` parameter may be a folder (internally resolved as it index file) or a file, with or without extension, or locale suffix. The locale is detected automatically from the current page one.

#### Notices: `notice [type]`

If you need to embed some insert to highlight aside contents in your page (like a _warning_ or a _tip_ aside content), you can rely on the `notice` shortcode:

```
{{% notice warning %}}
Pay attention to this insert!
{{% /notice %}}
```

You've got four types available:

- `warning`: _red_, for pay attention content
- `info`: _orange_, useful to excerpt some alternative option
- `note`: _blue_, for some extra but optional content
- `tip`: _green_, for useful tips

### Tables

Tables are formatted using the [Github Flavored][9] syntax:

```
| Header 1      | Header 2     | Header 3      |
|:--------------|--------------|--------------:|
| left aligned  | auto aligned | right aligned |
| 2nd line      | regular cell | regular cell  |
| 3rd line      | regular cell | regular cell  |
```

- Inner cells **must** be surrounded with one space
- Rows starts and end with a pipe `|`
- Headers separator **may** indicate the column alignment with the colon `:` marker
- Cells **must** be padded to ensure a consistent alignment with monospaced fonts (see example above)

### Footnotes

You can rely on the [PHP Markdown Extra Footnotes syntax][10] to dynamically generate footnotes:

```md
Hello World[^1]


[^1]: this is an associated footnote
```

Please note that the separator line and the anchor links are auto-generated.

### Conventions

Here's some conventions we use to write our documentation. Please stick to them.

1. Variables in code samples should appear surrounded by brackets: `mysql -u [username]`
2. Avoid the `~` character to indicated the home dir and prefer the `$HOME` version, more understandable
3. Avoid the use of the `![]()` markdown syntax for internal images, prefer the `fig` shortcode
4. Restrain from using quotes `>` as they're often not relevant in technical documentation, esêcially if you want to highlight some content, prefer the `notice` shortcode
5. Codeblocks should use the backtick notation <code>```</code> optionally followed by the syntax marker (e.g. <code>python</code>)
6. Variables and inline command/code **must** be surrounded by backticks
7. Emphasis is done by using one underscore surrounding; strong by using double stars sourrounding
8. Avoid the use of HTML tags and markup in your content, Markdown is enough (i.e. no `<br>` nor `<font>` tags)
9. We use the following names for replacement:
  - `foo`: for a lambda name, username, etc
  - `bar`: for a second one
  - `example.org`, `example.net`, `example.com`: for lambda domains

### Front Matter

Pages **must** start with a Front Matter block,. it may be written in YAML (using a `---` surrounding block marker) or in TOML (`+++` block marker):

```
+++
url = "/fr/marketplace/créer-son-script-d-application/"
title = "Créer son propre script d'application"
menuTitle = "Créer son propre script"
layout = "man"
weight = 5
hidden = true
+++
```

The following fields are mandatory:

- `title`: the page title
- `layout`: the type of page. Possible values are `man`, `howto`, `faq`. Exception exists for chapter pages where you can avoid the `layout` field, and replace it with a `chapter = true` one

You can add more metadata to your pages in the Front Matter:

- `menuTitle`: the page title in the navigation menu, default is the `title` value
- `weight`: an index to sort entries in the navigation menu
- `hidden`: does the page should appear in the navigation menu?
- `url`: for non *en_US* (default language) pages, you should explicitely fill the `url` field to localize it. Do _not_ forget the locale prefix (e.g. `/fr/`), and always add a final `/` at the end.

Please keep in mind to entirely remove the `draft` field when your page is ready to be published rather than putting it to `false`.

### Tags

To add new tag(s) to a page, add a tags entry in the front headers:

```md
+++
title = "My Page"
tags = ["tag 1", "tag 2"]
+++

Content
```

You can add as many tag as you wish, but we should limit to 3 tags per page. Tags can be written with `<spaces>` in their name.

***

More documentation is available on [Hugo doc][6].

***

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0
International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

[1]: https://gohugo.io
[6]: https://gohugo.io/documentation/
[8]: https://gohugo.io/content-management/page-bundles/
[9]: https://github.github.com/gfm/#tables-extension-