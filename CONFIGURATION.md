# Portfolio Configuration Guide

## Overview
All customizable text and content for your portfolio website is now centralized in the `config.js` file. This makes it easy to update your portfolio without touching the HTML code.

## How to Edit Your Portfolio

### 1. Open `config.js`
This file contains all the text, links, and content that appears on your website.

### 2. Edit the Content
Simply change the values in the `CONFIG` object to customize your portfolio:

#### Site Information
```javascript
site: {
  title: "Your Name — Portfolio",
  description: "Your portfolio description",
  author: "Your Name"
}
```

#### Navigation
```javascript
navigation: {
  brand: "Your Name",
  links: [
    { text: "About", href: "#about" },
    // Add or remove navigation items
  ],
  ctaButton: "Let's work"
}
```

#### Hero Section
```javascript
hero: {
  kicker: "Portfolio",
  title: "Your main headline",
  description: "Your introduction paragraph",
  primaryButton: "See my work",
  secondaryButton: "About me",
  image: {
    src: "path/to/your/image.jpg",
    alt: "Description of your image"
  },
  badge: "Available for work"
}
```

#### About Section
```javascript
about: {
  title: "About",
  description: "Your about paragraph",
  cards: [
    {
      title: "What I do",
      content: "Your skills and services"
    },
    // Add more cards as needed
  ]
}
```

#### Services
```javascript
services: {
  title: "Services",
  items: [
    {
      title: "Service Name",
      description: "Service description"
    },
    // Add more services
  ]
}
```

#### Work Portfolio
```javascript
work: {
  title: "Selected Work",
  items: [
    {
      title: "Project Name",
      description: "Project description",
      image: {
        src: "path/to/project/image.jpg",
        alt: "Project image description"
      },
      buttonText: "Learn more"
    },
    // Add more projects
  ]
}
```

#### Contact Information
```javascript
contact: {
  title: "Contact",
  email: "your@email.com",
  phone: "(123) 456-7890",
  location: "Your City, State",
  form: {
    namePlaceholder: "Your name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your message",
    submitButton: "Send message",
    successMessage: "Thanks! I'll reply soon."
  }
}
```

### 3. Save and Refresh
After making changes to `config.js`, simply refresh your browser to see the updates.

## Tips for Customization

1. **Images**: Replace the image URLs with your own photos. You can use:
   - Local files (place them in the same folder as your HTML)
   - Online image hosting services
   - Unsplash or other stock photo sites

2. **Adding More Items**: To add more work projects, services, or about cards, simply add new objects to the respective arrays in the config.

3. **Removing Items**: To remove items, delete the corresponding objects from the arrays.

4. **Navigation**: You can add or remove navigation links by editing the `navigation.links` array.

5. **Colors and Styling**: The visual styling (colors, fonts, layout) is still controlled by the CSS in the HTML file. If you need to change colors or fonts, look for the `:root` section in the `<style>` tag.

## File Structure
- `index.html` - The main website file (don't edit the content, only styling if needed)
- `config.js` - All your customizable content (edit this file)
- `404.html` - Error page (if you have one)

## Need Help?
If you need to make changes that aren't covered in this guide, you can still edit the HTML file directly, but try to keep content changes in the `config.js` file for consistency.
