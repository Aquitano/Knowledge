---
layout: ../../layouts/BlogLayout.astro
title: A Basic Introduction to HTML
description: HTML is the foundation of all websites. This guide will walk you through creating your first simple website using HTML.
tags: ['code', 'html']
time: 4
featured: true
timestamp: 2024-12-18T02:39:03+00:00
filename: html-intro
author: Thomas Breindl
avatar: /1720161159158.jpg
# image: /static/images/html-intro.jpg
---

HTML (HyperText Markup Language) is the foundation of all websites. Even with modern frameworks and tools, understanding HTML basics remains essential for web development. This guide will walk you through creating your first simple website using HTML.

## Understanding HTML Basics

HTML uses elements enclosed in tags to structure content. Most elements have opening and closing tags that wrap around content:

```html
<tagname>Content goes here</tagname>
```

## Essential Tools

To get started, you'll need:

- A text editor (like VS Code, Sublime Text, or even Notepad)
- A web browser to view your website

## Creating Your First HTML Page

1. Open your text editor and create a new file
2. Save it as "index.html"
3. Add the following code:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My First Website</title>
    </head>
    <body>
        <h1>Welcome to My Website</h1>
        <p>This is my first website created with HTML.</p>
    </body>
</html>
```

4. Save the file and open it in your browser

## Understanding the Structure

- `<!DOCTYPE html>`: Tells browsers you're using HTML5
- `<html>`: The root element of your page
- `<head>`: Contains meta-information about your document
- `<title>`: Sets the page title shown in browser tabs
- `<body>`: Contains all visible content

## Adding More Content

### Headings

HTML offers six heading levels:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
<!-- and so on to h6 -->
```

### Paragraphs and Text Formatting

```html
<p>This is a paragraph.</p>
<p>This is <strong>bold text</strong> and <em>italic text</em>.</p>
```

### Links

```html
<a href="https://example.com">Visit Example.com</a>
```

### Images

```html
<img src="image.jpg" alt="Description of image" />
```

### Lists

Unordered list:

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

Ordered list:

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
</ol>
```

## Next Steps

After mastering basic HTML, consider learning:

- CSS for styling your website
- JavaScript for adding interactivity
- Responsive design techniques

## Conclusion

HTML might seem simple at first, but it's an incredibly powerful tool that forms the backbone of the entire web. By understanding these fundamentals, you've taken your first step into web development. Practice by building small projects, gradually incorporating new elements, and soon you'll be creating more complex websites.

Remember that good HTML should be semantic—using the right tags for the right purpose helps with accessibility, SEO, and the overall structure of your website. As you grow your skills, focus on writing clean, well-organized HTML code that others (and your future self) can easily understand and maintain.

Happy coding!
