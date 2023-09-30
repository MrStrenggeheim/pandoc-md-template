---
title: Example Document
author: Florian Hunecke
date: Sat Sep 30 2023
output:
  - variant: html
    output-path: .\exampleOut.html
    from: markdown+emoji+hard_line_breaks
    to: html
    pdf-engine: null
    standalone: true
    self-contained: false
    toc: true
    toc-depth: 2
    toc-title: Contents
    number-sections: true
    css: 
    template: https://home.in.tum.de/~hunecke/md-template/template.html
    pandoc-args: [--mathml]
---

# Markdown Features

Use basic **Markdown** *formatting* to create **_rich_** text.

> Blockquotes are very handy for **highlighting**.

1. Lists
2. are 
3. also great

<!-- Use html syntax to comment -->
<!-- and to separate two lists -->

- unordered 
- lists
  - and nested 
  - lists
- as well

Use Definitions:
:   - To declare, define or explain something
    - Use is up to you

# Media

Insert images like this: 

::: row
![Image with caption](https://picsum.photos/400/180)\

![Image with caption](https://picsum.photos/400/200){width=70%}
:::


You can also inline images and set their size ![image](https://www.thegreenhead.com/imgs/star-wars-baby-yoda-child-life-size-replica-figure-1.jpg){#id .class height=50px} to make them fit better.

Links are also supported: [Link](https://www.google.com)


# Code

Of course, you can also insert code blocks of any kind:

```python
def hello_world():
    print("Hello World!")
```

# Mermaid

You can use Mermaid to create diagrams:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

# Maths 

You can also use LaTeX to render maths:

$$ 
    \begin{aligned}
    \dot{x} & = \sigma(y-x) \\
    \dot{y} & = \rho x - y - xz \\
    \dot{z} & = -\beta z + xy
    \end{aligned}
$$

# Tables

| Tables   |   Are   |     Nice |
| -------- | :-----: | -------: |
| to       | present |    data. |
| Aligning |   is    | possible |

# Columns

::: row
Use markdown syntax to assign html classes and create columns. Eu cillum velit enim magna ipsum amet excepteur. Eiusmod laborum incididunt nisi laborum est eiusmod ut ipsum aute incididunt ullamco eiusmod. In cillum fugiat et Lorem enim cupidatat consectetur Lorem magna duis laboris. Exercitation magna minim cupidatat nulla. In incididunt minim est dolore.

For clean content in your document. Magna veniam nostrud et id est mollit laboris consequat non. Ea sint voluptate Lorem aute est nisi dolor id pariatur mollit. Esse in elit duis incididunt labore incididunt consectetur reprehenderit labore nostrud Lorem. 
:::

# Sidenotes
::: note
**Sidenote**

This is a sidenote. It is a block element and can contain any kind of content. It is always placed on the right side of the page.
:::

Side notes float on the right side of the content and can be used to add additional information to the text. They are always placed on the right side of the page.


# [Styling]{.underline .smallcaps}

Use basic keyword to style text:
- [color]{.cr} [different]{.cy} part of the text
- or the [background]{.bg} of the text
- use [underline]{.underline} or [caps]{.smallcaps} as unusual marup

Everything can also be described via html elements as well:

<span class="underline">Underlined span.</span>




# References and Footnotes

See [website].

[website]: https://www.google.de

Here is a footnote reference[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's a longer footnote with more text.

Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]

Veniam veniam est dolor aute quis cupidatat fugiat incididunt quis magna et voluptate id nulla. Eu eiusmod est in quis voluptate tempor pariatur est veniam consectetur eu eu deserunt. Ad labore nulla commodo mollit. Consectetur incididunt ad sit ipsum dolore est amet dolor commodo est et laboris.

Blah blah.[^dd]

[^dd]:  John Doe, "Frogs," *Journal of Amphibians* 44 (1999);
Susan Smith, "Flies," *Journal of Insects* (2000);
Susan Smith, "Bees," *Journal of Insects* (2004).
