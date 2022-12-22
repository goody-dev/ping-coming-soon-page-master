# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://codeevolver.github.io/ping-coming-soon-page-master/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./codeevolver.github.io_ping-coming-soon-page-master_(iPad%20Air).png)

### Links

- Solution URL: [https://github.com/CodeEvolver/ping-coming-soon-page-master](https://github.com/CodeEvolver/ping-coming-soon-page-master)
- Live Site URL: [https://codeevolver.github.io/ping-coming-soon-page-master/](https://codeevolver.github.io/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript](https://javascript.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I used this code to do a simple validation of inputed email address

```js
const proudOfThisFunc = () => {
    const x = document.getElementById('email-input').value;
    const at = document.getElementById('email-input').value.indexOf("@");
    if(x === "") {
        document.getElementById('email-input').style.borderColor = "hsl(354, 100%, 66%)";
        document.getElementById('error-message').style.color = "hsl(354, 100%, 66%)";
        document.getElementById('error-message').innerHTML = "<i>Whoops! It looks like you forgot to add your email</i>";
    }else if(at === -1) {
        document.getElementById('error-message').style.color = "hsl(354, 100%, 66%)";
        document.getElementById('error-message').innerHTML = "<i>Please provide a valid email address</i>";
    }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I'll will like to focus on concepts related to technologies(JavaScript) more than design...like form validation and the likes

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) - This helps in validating email with JavaScript. I'd recommend it to anyone still learning this concept.

## Author

- Github - [Goodness Okanlawon](hhttps://github.com/CodeEvolver)
- Frontend Mentor - [@CodeEvolver](https://www.frontendmentor.io/profile/CodeEvolver)
- Twitter - [@Code_Evolver](https://www.twitter.com/Code_Evolver)

## Acknowledgments

I thank God for the start to the completion of this project. Thumbs up to StackOverflow communities and Google, that's where I source for solution to bugs and the likes! 
