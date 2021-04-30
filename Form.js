import { useState } from 'react';

export const Form = ({ onAddLang }) => { // 変更
  const [text, setText] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    onAddLang(text); // 変更
  }

  return (
    <div>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  )
}