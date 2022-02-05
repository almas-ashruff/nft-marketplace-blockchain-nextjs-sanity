import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: 'r3u46vf0',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skqTxhnckAhiljGXo2J2hD4XrjTn8ObjqRLCNL1ckkIvaum58cE0VEjUaeYpCjKlD7zJM6nKPQ3P3GDJx3xrmt3UhcHpTYSFPug8fdS12R99SOuWtIW1O8BYrJyR6Zy2pkUNzDC272KycqsqH1UIEQbztnwDy2L29USI73VwtoUhWGnYj7sE',
    useCdn: false
})