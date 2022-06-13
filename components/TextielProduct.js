import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/TextielProduct.module.scss"

const TextielProduct = ({ data }) => {
  var content = data.story.content;
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        <div className={styles.textielproduct}>
        <div className={styles.foto}>
          <img src={content.foto.filename} />
        </div>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.shortdescription}>
            {render(content.shortdescription)}
          </div>
          <div className={styles.description}>
            {render(content.description)}
          </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default TextielProduct  
