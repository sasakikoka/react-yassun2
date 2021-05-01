import { useState, useEffect } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

function App() {
  const [tab, settab] = useState('list');
  const [langs, setLangs] = useState([]);

  useEffect(() =>{
    console.log('App.js:useEffect');
    fetchLanguages();
  },[tab]);
  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    settab('list');
  }
  return (
    <div>
      <header>
        <ul>
          <li onClick={() => settab('list')}>リスト</li>
          <li onClick={() => settab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;