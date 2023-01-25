// IMPORT PADRÃO
import React, {useState} from 'react';
import  '../NewChat/NewChat.css';

// IMPORT ICONS MATERIAL UI 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default ({user,chatlist,show, setShow })=>{

    const [list, setList] = useState([
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name:'Diego'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name:'Diego'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name:'Diego'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name:'Diego'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name:'Diego'},
    ]);

    const handleClose=() =>{
        setShow(false)
    }

    return(
        <div className='newChat' style={{left: show ? 0:-415 }}>
            <div className='newChat-head'>
                <div onClick={handleClose} className='newChat-backbutton'>
                    <ArrowBackIcon style={{color:'#FFFF'}}/>
                </div>
                <div className='newChat-headtitle'>
                    Nova Conversa
                </div>
            </div>
            <div className='newChat-List'>
                {list.map((item, key) =>(
                    <div className='newChat-item' key={key}>
                        <img className='newChat-itemavatar' src={item.avatar} alt=' ' />
                        <div className='newChat-itemname'>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    )

}