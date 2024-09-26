import React from 'react';
import { FiEdit3, FiTrash} from "react-icons/fi";
import styles from './styles.module.scss';

const NotesList = ({item, removeItem, editItem}) =>{
    return <div className={styles.groceryList}>
        {item.map((item) => {
            const{id, title} = item
            return <article key = {id} className = {styles.groceryItemMotes}>
                <p className={styles.titleNotes}>{title}</p>
                <div className={styles.btnContainerNotes}>
                    <button type="button" 
                    className = {styles.editBtnNotes}
                    onClick ={() => editItem(id)}>
                    <FiEdit3 />
                    </button>
                    <button type="button" 
                    className = {styles.deleteBtnNotes}
                    onClick = {() => removeItem(id)}>
                    <FiTrash />
                    </button>
                </div>
            </article>
        })}
    </div>
}

export default NotesList;