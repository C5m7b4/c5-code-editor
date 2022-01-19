export type SnippetType = {
  name: string;
  contents: string;
};

export type SnippetArray = SnippetType[];

export const snippets: SnippetArray = [
  {
    name: 'App',
    contents: `import React from 'react'
  const App = (a) => {
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
  {
    name: 'Parens',
    contents: `const a = 10
      if ( a > 10){
        console.log('a is greater than 10')
      }
    `,
  },
  {
    name: 'ClassName',
    contents: `<div className="testing">Hello</div>`,
  },
  {
    name: 'Typescript',
    contents: `import React from 'react'
      export interface TestProps {
        name: string;
        enable: boolean
      }

      export const Test:React.FC<TestProps> = ({name, enable}) => {
        console.log("i am here")
      }
    `,
  },
  {
    name: 'Fat Arrow',
    contents: `const filtered = filter.filter(a => a.id === id)`,
  },
];
