# Blog module for Magento PWA Studio

This module acts as an add-on for [Mageplaza's Better Blog extension](https://www.mageplaza.com/magento-2-better-blog/) to make it work with Magento PWA Studio.

End result: https://blog.pwa-commerce.com/blog.html

## Requirements

- Magento 2.4.* or >= 2.3.5
- Got [Mageplaza Blog extension](https://www.mageplaza.com/magento-2-better-blog/) and [Blog GraphQL](https://github.com/mageplaza/magento-2-blog-graphql) already installed

## Installation

### 1. Init project
```
npm init @magento/pwa@1.1.2
```

Fill in your project information and `cd` into it.

### 2. Start the project

From the root directory of the project you created above, clone the repository:

```
   git clone https://github.com/Simicart/blog-module-pwa-studio ./@simicart/blog
```

### 3. (Optional) Add Facebook Comment feature

To add Facebook Comment feature for your blog, edit the file at
```
node_modules/@magento/upward-security-headers/upward.yml
```

and modify inline value:

```
inline: "script-src http: https: {{ backend }}; style-src 'self' https: 'unsafe-inline' {{ backend }}; img-src data: http: https:; object-src 'none'; base-uri 'none'; child-src 'self'; font-src 'self' fonts.gstatic.com; frame-src assets.braintreegateway.com *.youtube.com *.youtu.be *.vimeo.com *.facebook.net *.facebook.com"
```

### 4. Modify .env

Change the .env MAGENTO_BACKEND_URL with your magento site URL, or use our demo URL:

```
  MAGENTO_BACKEND_URL=https://mp.pwa-commerce.com/
```
### 5. Modify package.json

Modify the dependencies of the project to add the Blog extension.

```
  "dependencies": {
    "@magento/pwa-buildpack": "~7.0.0",
    "@simicart/blog": "link:./@simicart/blog",
    "react-dropdown-tree-select": "^2.5.1",
    "react-responsive-carousel": "^3.2.10",
    "react-social-sharing": "^3.3.0"
  },
```

### 6. Install and Start Project

```
  yarn install && yarn watch
```

## Contribution

[SimiCart Team](https://www.simicart.com/pwa.html/) & [Mageplaza Team](https://www.mageplaza.com/)
