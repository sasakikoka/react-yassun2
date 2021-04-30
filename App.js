import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/languages";

function App() {
  const [tab, settab] = useState('list');
  const [langs, setLangs] = useState(LANGUAGES);

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