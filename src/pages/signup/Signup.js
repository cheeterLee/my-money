import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label>
                <span>email:</span>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>display name:</span>
                <input
                    type="text" 
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            { !isPending && <button className="btn">Signup</button> }
            { isPending && <button className="btn" disabled>Loading</button> }
            { error && <p>{ error }</p> }
        </form>
    )
}
