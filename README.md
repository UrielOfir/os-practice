# איך לתרום לפרוייקט הזה ולתרגל תרומה לקוד פתוח?
## 1. יש לפתוח אישיו
תבקשו לתקן את האתר ולהוסיף קובץ md עם פרטים עליכם בתוך תיקיית docs/people .
## 2. יש לעשות fork לפרוייקט כדי שתוכלו לערוך אותו.
## 3. הוסיפו בפרוייקט אצלכם את הקובץ עם הפרטים שלכם.
## 4. פתחו pull-request. נא לציין איזה issue אתם מעוניינים לסגור.

ומה שנשאר זה שהמתחזק של הפרוייקט יאשר את ה pull-request שלכם!
ואז תוכלו לראות את הקובץ שהוספתם בכתובת הזו באינטרנט:
https://melodious-muffin-2be5a1.netlify.app/docs/intro/
כשתפתחו בתפריט את people :)


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
