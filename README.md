# Enhanced Pandoc HTML Template

## Description
This Pandoc template is designed to simplify the conversion of Markdown files into stylish and feature-rich HTML documents. It comes packed with various enhancements, including CSS styling, Mermaid rendering, sidebar table of contents, text coloring, column layouts, and more. Whether you're creating documentation, reports, notes, or simple web content, this template can help you achieve professional and visually appealing results.


## Usage

To get started with this Pandoc template, follow these steps:

1. Make sure you have Pandoc installed on your system. If not, you can download it from Pandoc's official website.
2. Clone this repository to your local machine or download the ZIP archive.
3. Copy the pandoc-html-template directory to a location accessible to Pandoc.
4. Use the `--template` option with Pandoc to specify the path to the template file when converting Markdown to HTML. For example:

```bash
pandoc --template /path/to/pandoc-html-template.html -o output.html input.md
```

Use your usual pandoc options like `--toc` to customize the output. 

### Alternative 

Use my accompanying VS Code extension to easily convert Markdown files to HTML using this template. The extension is available on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=FlorianHunecke.markdownhelper) and can be installed directly from within VS Code.


## Features

- CSS styling
- Light and Dark mode
- Mermaid rendering
- Sidebar table of contents
- Text coloring
- Column layouts

### Example

For a basic example with usage of most the features see the files in the `examples` directory. 


## Contributing

I welcome any contributions from the community. If you encounter issues, have feature requests, or want to contribute code improvements, please submit an issue or a pull request through GitHub.