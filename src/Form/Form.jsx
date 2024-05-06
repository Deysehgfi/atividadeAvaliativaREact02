import '../Form/Form.css'
import Button from './Button/Button';
import Input from './Input/Input.jsx';
import Icon from '../classificacao-interativa/images/icon-star.svg'


const Form = () => {


    return (
        <>
        <form action="">
        <div className='img'><img src={Icon} alt="" /></div>

            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <Input/>

            <Button/>
       
         

        </form>
        </>
    )
}

export default Form;
