import React from 'react';
import { useQuery } from '@apollo/client';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import { GET_BOARD_QUERY, GET_BOARDS_QUERY } from './queries';

function App() {
  return <AppRoutes />;
}


function AppRoutes(props: any) {

  React.useEffect(()=> {
    (async ()=> {
      const data = await fetchData();
      console.log("DATA: ", data);
    })()
  }, []);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route component={BoardComponent} path="/board/:id" />
        <Route component={BoardsComponent} path="/boards" />

        <Route exact={true} path="/">
            <Redirect to="boards" />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

interface BoardInterface {
  __typename?: string,
  id: number,
  players: number,
  type: string,
  title: string,
}

interface GetBoardInterface { getBoard: BoardInterface }

interface BoardVars { where?: { id: number }, limit?: number, offset?: number };

function BoardComponent(props: any) {
  
  const id = props.match.params.id;

  const { loading, data } = useQuery<GetBoardInterface, BoardVars>(
    GET_BOARD_QUERY,
    {
      // fetchPolicy: 'network-only',
      variables: { where: { id: id * 1 } }
    }
  );
  return (
    <h1>
      {
        loading
          ? 'Loading...'
          : JSON.stringify(data)
      }
    </h1>
  )
}

interface GetBoardsInterface { getBoards: BoardInterface[] }

function BoardsComponent(props: any) {
  const { loading, data } = useQuery<GetBoardsInterface, BoardVars>(
    GET_BOARDS_QUERY,
    {
      // fetchPolicy: 'network-only',
      variables: { where: { id: 1 } }
    }
  );

  const { getBoards = [] } = data || {};

  return (
    <div>
      {
        loading
          ? 'Loading...'
          : getBoards.map((ea: BoardInterface) => {
            const { id = 0, title,  } = ea || {}; 
            return (
              <Link to={`board/${id}`}>
                <h3>{id} - {title}</h3>
              </Link>
            )
          })
      }
    </div>
  )
}

const fetchData = () => {
  return new Promise((resolve, reject)=> {
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `{
        getBoards(where: {}) {id players}
      }`}),
    })
    .then(res => res.json())
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      reject(err)
    });
  });
}


export default App;
