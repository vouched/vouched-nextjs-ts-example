# Vouched JS Plugin Next.js + TypeScript Example

This code example shows how to add the Vouched JS Plugin to a Next.js app with TypeScript. It was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) using `npx create-next-app <app-name> --ts` but will also work for projects created with `npx create-next-app <app-name>`. There are 2 main files, `public/vouched-onready.js` for script on load method, and `pages/index.tsx` for our component that loads the script.

## Getting it Running

Fill in `appId` in `public/vouched-onready.js` with your Public Key. To obtain one, create a [Vouched account](https://www.vouched.id/get-started/) and generate a key from your [Vouched dashboard](https://docs.vouched.id/docs/manage-keys).

Next, run `yarn install`, followed by `yarn dev`. Go to [http://localhost:3000](http://localhost:3000) and you should see the plugin loaded. You can inspect the console to see provided messages as you progress through the verification process.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
