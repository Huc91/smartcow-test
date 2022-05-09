import * as React from "react"

//style
import * as styles from './style.module.scss';

export default function Layout(props) {
  
  return (
    <div className={styles.layout}>
      <nav className={styles['layout__nav']}>
        <ul>
            <li>home</li>
        </ul>      
      </nav>
      {props.children}
    </div>
  )
}