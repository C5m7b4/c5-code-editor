export type SnippetType = {
  name: string;
  contents: string;
};

export type SnippetArray = SnippetType[];

export const snippets: SnippetArray = [
  {
    name: 'App',
    contents: `import React from 'react'
  const App = () => {
    return (
      <div className="main-div">
        <h2>Hello world</h2>
      </div>
    )
  }`,
  },
  {
    name: 'Fetch',
    contents: `import avion from 'avion'
    async function getEmployees(url, apikey, searchPhrase){
      let json = await avion({
        method: 'GET',
        cors: true,
        headers: {
          'Content-Type':'application/json'
        },
        url: url + 'users/list',
        params: {
          apikey,
          searchPhrase
        }
      })

      return json;
    }
    `,
  },
  {
    name: 'Simple',
    contents: `
      <script id="example">
        const a = 5;
        console.log(a)
      </script>
    `,
  },
  {
    name: 'Test',
    contents: `'Content-Type':'application/json'`,
  },
  {
    name: 'Content-Type',
    contents: `'Content-Type'`,
  },
];
