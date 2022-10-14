# ARC CMS: HOW-TO
> Instructions for ARC "zero-to-hero" for present and future volunteers interested in contributing to the website.

## Table of Contents
- **[Non-Technical Overview](#contributor-guide)**
-   [How to: Add, Remove, Edit a File](#general-ui-actions-review-for-non-technical-contributors)
-   [Add to the "Big Ideas" Page](#adding-big-ideas-posts)
-   [Add a Blog Post](#adding-blog-posts)
-   [Add a pet to the "Featured Pets" Slideshow](#adding-featured-pets-to-slideshow)
-   [Add images to the xmas Page](#holidays-only-adding-to-x-mas-page)
- **[Developer Overview](#developer-overview)**
-   [Understand the project Layout](#understanding-the-file-structure)
-   [Add New Pages](#pages-and-branding)
-   [Add templates/blocks to library](#adding-content-blocks)


## Contributor Guide
For each of the following how-tos, please ensure that you are signed into your GitHub account. If you do not have a GitHub account, please create one [here](https://github.com/signup).

### General UI Actions Review (for non-technical contributors)
**Adding a file**: click the light gray "Add file" button and then select the "upload" option. If you are adding a new page, please ensure that the file name is in the format of `page-name.html`. If you are adding a new image, please ensure that the file name is in the format of `image-name.png`. Once you are satisfied with your file, click the green "Commit changes" button at the bottom of the page.

**Deleting a File**: click the file you would like to delete. In the top right above the file contents, click the trash can icon. Once you are satisfied with your file, click the green "Commit changes" button at the bottom of the page.

**Editing a File**: click the file you would like to edit. In the top right above the file contents, click the pencil icon. Once you are satisfied with your file, click the green "Commit changes" button at the bottom of the page.

**Renaming a File**: click the file you would like to rename. In the top right above the file contents, click the pencil icon. Scroll up to where it shows ``[repo-name]/[file-name]`` and change the existing content to whatever you would like the new name to be. Once you are satisfied with your file, click the green "Commit changes" button at the bottom of the page.

### Adding Blog Posts
1. Create a new file in the `/blog` directory with the following naming convention: `YYYY-MM-DD-title-of-post.html`

### Adding "Big Ideas" Posts
1. Create a new file in the `/subdirs/big-ideas` directory with the following naming convention: `title-of-post.txt`
2. All "Big Ideas" posts require a thumbnail image. Please ensure that the image is in the `/subdirs/big-ideas` directory and is named `title-of-post.png` (thumbnail and post must have the same name).

### Adding Featured Pets to Slideshow
1. Create a new file in the `/subdirs/featured-pets` directory with the following naming convention: `pet-name.png`
2. Each pet image must also include a description file. Create a new file in the `/subdirs/featured-pets` directory with the following naming convention: `pet-name.txt`
3. Each pet image must also include a caption file. Create a new file in the `/subdirs/featured-pets` directory with the following naming convention: `pet-name-caption.txt`

### **HOLIDAYS ONLY** Adding to X-Mas Page
1. Create or upload a file to the `/subdirs/xmas-[current-year]` directory with the following naming convention: `pet-name.png`. Please ensure that the image is a square (1:1 ratio) and is at least 500px x 500px.


## Developer Overview
### Understanding the File Structure
Most of the logic for the site is contained within the ``assets/js`` directory. Each page can have its own JS file, which controls API calls, DOM-manipulation, and other logic. 

Besides these page-specific files, there are a few other files that are of particular interest. 

Primarily, the ``assets/js/import.js`` is a custom implementation of a rendering engine, which allows us to re-use blocks of HTML across the site. This is particularly useful for the navbar, footer, and other elements that are common across the site.

In addition to this, the ``assets/js/blogloader.js`` file is responsible for loading the blog posts from the GitHub API. This file is used on the blog page, and simply grabs each blog html file from the ``/blog`` directory, and appends it to the page.

Besides these two files, the rest of the files are fairly self-explanatory. Any other questions can be directed to the ARC team through GitHub Issues.

### Pages and Branding
A new page can be added by creating a new HTML file in the ``/static`` directory. This file should be named ``[page-name].html``.

All new pages should link to the ``assets/css/style.css`` file, and the ``assets/js/import.js`` file. An example of a common page structure is shown below:

```html
<html>
  <head>
    <link rel='stylesheet' href='/assets/css/styles.css'/>
    <script src='assets/js/import.js' defer></script>
  </head>

  <div class='nav' data-block='nav'></div>

  ...

  <div class='footer' data-block='footer'></div>
</html>
```

As mentioned in the previous section, and page-specific logic should be contained in a separate JS file, named ``[page-name].js``. This file should be linked to the page in the ``<head>`` tag, and should be placed in the ``/assets/js`` directory.

### Adding Content Blocks
Content blocks are HTML snippets that can be re-used across the site. These blocks are stored in the ``/components`` directory, and can be imported into any page using the ``import.js`` file.

To add a new content block, simply create a new HTML file in the ``/components`` directory. This file should be named ``[block-name].html``. The contents of this file should be the HTML that you want to be re-used across the site.

To import this block into a page, simply add a ``<div>`` tag to the page, and add the ``data-block`` attribute. The value of this attribute should be the name of the block that you want to import. For example, if you want to import the ``nav`` block, you would add the following to the page:

```html
<div class='nav' data-block='nav'></div>
```
