import './Login.css'
import {useNavigate} from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();

    function onSubmit() {
        navigate('/');
    }

    return (
        <>
            <div className={'header'}>
                <label id={'bit'}>Bit</label>
                <label id={'cracker'}>Cracker</label>
            </div>
            <div className={'mainContent'}>
                <div className={'image-laptop'}></div>
                <div className={'loginForm'}>
                    <form>
                        <div className={'formHeader'}>
                            <label>Bine ai venit la </label>
                            <label id={'bit'}>Bit</label>
                            <label id={'cracker'}>Cracker!</label>
                        </div>
                        <div className={'logInMethod'}>
                            <div className={'auth'}>Autentificare</div>
                            <div className={'reg'}>Inregistrare</div>
                        </div>

                        <label className={'lorem'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</label>

                        <div className={'data'}>
                            <div className={'inputField'}>
                                <label>Nume utilizator</label>
                                <input placeholder={'Nume utilizator'}/>
                            </div>

                            <div className={'inputField'}>
                                <label>Parola</label>
                                <input placeholder={'Parola'}/>
                            </div>

                            <div className={'checkBoxDiv'}>
                                <input type={'checkBox'}/>
                                <label className={'rememberLabel'}>Remember me</label>
                                <label>Forgot password?</label>
                            </div>
                        </div>
                        <div className={'authDiv'}>
                            <div onClick={onSubmit} className={'authButton'}>Autentificare</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
