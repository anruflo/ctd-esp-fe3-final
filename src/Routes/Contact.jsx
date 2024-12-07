
import { useContext } from 'react';
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'
import ContactStyles from "../Styles/Contact.module.css"

const Contact = () => {
  const {state} = useContext(ContextGlobal);

  return (
    <div className={`${ContactStyles.container} ${state.theme === 'light' ? 'light' : 'dark'}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact