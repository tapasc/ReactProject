import React from 'react';
import ReactDOM from 'react-dom';
const App = function(){
    return (
        <div className='container'>
            <div className='comment'>
                <a href='/'>
                    <img src='' alt=''></img>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        Sam
                    </a>
                    <div className='metadata'>
                        <span className='date'>Today at 6:00PM</span>
                    </div>
                    <div className='text'>comment body...</div>
                </div>
            </div>
        </div>
    )
}
// const el = document.getElementById('root');
// const root = ReactDOM.createRoot(el)

ReactDOM.render(<App/>,document.querySelector('#root'))