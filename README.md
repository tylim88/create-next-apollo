# Create-Next-Apollo

```
npm i -g create-next-apollo
create-next-apollo myAppName

or

npx create-next-apollo myAppName
```

## Troubleshooting

**ENOENT error when _npm i -g create-next-apollo_ in desktop folder**  
cause: unknown  
remedy: there is three workaround, **download and install new version of npm** or **npx create-next-apollo myAppName** or create a new folder and **run npm i -g create-next-apollo** in the folder

## Instruction

It is ready to use, it comes with simple example that show you:

1. How to use Unstated to share state across pages.
2. How to Apollo in Next
3. How to SSR Apollo in Next

What can you expect when you npm run dev?

![](./img/1.png)  
The data is loaded which mean SSR is working.

![](./img/2.png)  
You should see nothing in about page because you haven't update the state in container.

![](./img/3.png)  
Now go back and update the state in index page.

![](./img/4.png)  
And now you should see the same data in About page.

## Acknowledgement

Greatly Inspired by [Next Apollo Example](https://github.com/zeit/next.js/tree/canary/examples/with-apollo)

## Misc

Great library, deserve more attention [Unstated](https://github.com/jamiebuilds/unstated)

This project was bootstrapped with [Create NPM Create](https://github.com/tylim88/create-npm-create).
