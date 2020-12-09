import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import reportWebVitals from './reportWebVitals';

// Класс
/* class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26,
            love: "Veronica",
            mweis: "Mathias",
            nationality: 'uk'
        } */
/* this.nextYear = this.nextYear.bind(this); */
/*         this.nextYear = () => {
            this.setState(state => ({
                years: ++state.years
            }))
        }
    } */
/*  nextYear() {
     console.log(1);
     this.setState(state => ({
         years: ++state.years
     }))
 } */
/*     render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        const { love } = this.state;
        const { mweis } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <a href={link}>{love} + {mweis}</a>
            </>
        )
    }
} */

// Компонент
/* function WhoAmI({ name, surname, link }) {
    return (
        <React.Fragment>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>Me profile</a>
        </React.Fragment>
    )
} */

/* const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Ivan" surname="Smith" link="facebook.com" />
            <WhoAmI name="Ashot" surname="Smith" link="facebook.com" />
        </>
    )
} */

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
