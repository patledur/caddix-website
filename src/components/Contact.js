import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2>Contact Us for a free consultation</h2>
            <form action="post">
                <input type="text" placeholder="Name"/>
                <input type="email" name="" id="" placeholder="E-Mail"/>
                <input type="text" placeholder="Subject"/>
                <p placeholder="Type your message here."></p>
                <button>send</button>
            </form>
        </div>
    )
}

export default Contact
