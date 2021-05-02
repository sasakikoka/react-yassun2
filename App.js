import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

const Header = styled.header`
  display: flex;
  justify-content: spce-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0
`
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`

function App() {
  const [tab, settab] = useState('list');
  const [langs, setLangs] = useState([]);

  useEffect(() =>{
    fetchLanguages();
  },[]);
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
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => settab('list')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => settab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;