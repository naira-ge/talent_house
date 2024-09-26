import React, {useState} from 'react';
import NotesList from './NotesList';
import NotesAlert from './NotesAlert';
import styles from './styles.module.scss'

function Notes(){
    const[name,setName] = useState('');
    const[list,setList] = useState([]);
    const[isEditing,setIsEditing] = useState(false);
    const[editID,setEditID] = useState(null);
    const[alert,setAlert] = useState({
        show: false, 
        msg:'', 
        type:'',
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name){
            showAlert(true, 'danger', 'please enter value')
        }else if(name && isEditing){
          setList(
              list.map((item) =>{
              if(item.id === editID){
                  return {...item, title:name}
              }
              return item;
          })
          )
          setName('');
          setEditID(null);
          setIsEditing(false);
          showAlert(true, 'success', 'value changed');
        }else{
            showAlert(true, 'success', 'added successfully')
            const newItem = {id: new Date().getTime().toString(),
            title: name};
            setList([...list, newItem]);
            setName('')
        }  
    }

    const showAlert = (show = false, type = '', msg = '') =>{
        setAlert({show, msg, type})
    }

    const clearList = () =>{
        showAlert(true, 'danger', 'empty list');
        setList([])
    }

    const removeItem = (id) =>{
        showAlert(true, 'danger', 'item removed');
        setList(list.filter((item)=> item.id !== id))
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title)
    }

    return(
        <section className ={styles.sectionNotes}>
            <form className={styles.groceryForm} onSubmit = {handleSubmit}>
                {alert.show && <NotesAlert {...alert} removeAlert = {showAlert} list={list}/>}
                <h4>Add Interests</h4>
                <div className={styles.formControl}>
                    <input type = "text" className = "grocery" 
                    placeholder = "e.g. JavaScript" 
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    <button type = "submit" className={styles.submitBtnNotes}>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
            <div className={styles.groceryContainer}>
                <NotesList item = {list} removeItem = {removeItem} editItem = {editItem}/>
                <button className={styles.clearBtnNotes} onClick = {clearList}>Clear Items</button>
              </div>
            )}
        </section>
    )

}


export default Notes;