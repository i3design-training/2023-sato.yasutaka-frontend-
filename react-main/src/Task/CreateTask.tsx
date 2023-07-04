import { Title } from '@mui/icons-material';
import { Container, Grid, Box, Button, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Header } from '../components/Header';

export const CreateTasks = () => {
  const [todoText, setTodoText] = useState(''); //入力フォーム
  const [todoTextEdit, setTodoTextEdit] = useState(''); //編集フォーム
  const [incompleteTodos, setIncompleteTodos] = useState([
    'ToDoリストはここに表示',
  ]);
  const [showForm, setShowForm] = useState(false); //falseでフォーム非表示
  const [editIndex, setEditIndex] = useState(-1); //-1で編集モード非アクティブ

  //入力のたびに、todoTextを更新
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  //入力のたびに、todoTextEditを更新
  const onChangeTodoTextEdit = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTextEdit(event.target.value);

  //追加ボタンクリック
  const onClickAdd = () => {
    if (todoText === '') alert('値を入力してください');
    else {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText('');
    }
  };

  //編集ボタンクリック
  const onClickEdit = (index: number) => {
    setEditIndex(index);
    setShowForm(true);
  };

  //削除ボタンクリック
  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //保存ボタンクリック
  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    if (todoTextEdit.length === 0) {
      alert('文字数が0文字です。値を入力してください。');
      return;
    }
    const newTodos = [...incompleteTodos]; //コピー作成（既存の未完了タスクリストの変更防止）
    newTodos[editIndex] = todoTextEdit; //編集された内容を反映
    setIncompleteTodos(newTodos); //未完了タスクリストのステートを更新
    setShowForm(false);
    setTodoTextEdit('');
  };

  //タイトル
  const Title = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '54px',
    textAlign: 'center',
    marginTop: '48px',
    marginBottom: '24px',
    fontWeight: '700',
    fontSize: '32px',
  };

  //ボタン
  const ButtonColor = {
    display: 'flex',

    width: '70px',
    height: '30px',
    backgroundColor: 'black',
    fontWeight: '700',
    color: 'white',
    margin: '0 auto',
    marginLeft: '10px',
  };

  //登録ボタン
  const saveButton = {
    display: 'flex',
    width: '188px',
    height: '51px',
    backgroundColor: 'black',
    fontWeight: '700',
    color: 'white',
    margin: '0 auto',
    marginTop: '32px',
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container>
          <Box sx={Title}>タスクを作成</Box>

          <Box>
            <Box sx={{ display: 'flex' }}>
              <TextField
                className="blue-border"
                placeholder="TODOを入力"
                value={todoText}
                onChange={onChangeTodoText}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button sx={ButtonColor} onClick={onClickAdd}>
                  追加
                </Button>
              </Box>
            </Box>
            <Box>
              <Box>
                {incompleteTodos.map((todo, index) => {
                  return (
                    <>
                      <Box
                        key={index}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Checkbox />
                          <Box className="TextColor">{todo}</Box>
                        </Box>
                        <Box>
                          <Button
                            sx={ButtonColor}
                            onClick={() => onClickEdit(index)}
                            className="Button"
                          >
                            編集
                          </Button>
                        </Box>
                        <Button
                          onClick={() => onClickDelete(index)}
                          sx={ButtonColor}
                        >
                          削除
                        </Button>

                        {/* ここを後ほどmui           */}
                        {showForm && editIndex === index && (
                          <form onSubmit={handleSave}>
                            <input
                              className="blue-border"
                              placeholder="内容を編集"
                              value={todoTextEdit}
                              onChange={onChangeTodoTextEdit}
                            />
                            <Button className="Button" type="submit">
                              保存
                            </Button>
                          </form>
                        )}
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
            <Button type="submit" sx={saveButton}>
            保存
          </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
