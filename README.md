# Todo Application - A Productivity App

## How to Build / Run

First, clone the project using :

```bash
git clone git@github.com:Nexus-coder/pet_adoption_app.git
```

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a todo application built using the MERN stack.The project is a really common productivity tool that is used quite frequently.the reason I made it was to further my express javascript skills.


### Screenshot

![](./adopt.png)


### Links

- Live Site URL: [Adopt Me](https://pet-adoption-app-theta.vercel.app/)

## My Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learnt how to use use Query which is a React library for caching.

To see how you can add code snippets, see below:

```js
export default async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    if (!res.ok) { throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`); }
    return res.json();
}
```

### Continued development

I would still like to continue focusing on learning about cache with react and also to learn how just how the whole framework operates too.So I will use it in the coming projects in order to get a better understanding of it.

### Useful resources

- [Tanstack Query](https://tanstack.com/query/latest) - This helped me for searching querying and even caching of my requests that come from the api. I really liked this pattern and will use it going forward.

## Author

- Website - [Apopt Me](https://pet-adoption-app-theta.vercel.app/)
- Twitter - [@AndrewK51659634](https://twitter.com/AndrewK51659634)


## Acknowledgments

I would like to acknowledge frontend masters where I actually git the inspiration and the knowledge to make the above application.

This is a simple todo app in express js.
Since I have been using express for a while i decided to perfect the skilll even more.
From this project I have learnt to use clusters and workr threads and also learnt the difference that clusters allow the server to be run cocurrently on different cores or logical cpu while worker threads just make the instance of the same code in the same file.
I have learnt to do this using the pm2 library which is very handy in helping one to manage processes.
Also from the project I have gotten experience scripting with mpm and boosting my productivity.
Finally I have also learnt how to use mongodb as a database knew it before bt i havvenow gotten better understanding of it.
Also generally i have learnt hoe to apply node best practices on my projects that i will probably use from now on.
